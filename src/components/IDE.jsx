import Editor from "@monaco-editor/react";
import Problem from "./Problem";
import { useEffect, useState } from "react";
import axios from "axios";
import confetti from "canvas-confetti";
import {
  FiCheck,
  FiCircle,
  FiMenu,
  FiPlay,
  FiCheckCircle,
  FiXCircle,
  FiLock,
} from "react-icons/fi";
import { problems } from "../data/problems";

export default function IDE() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState(problems[0]?.starterCode?.python || "");
  const [results, setResults] = useState([]);
  const [finalResult, setFinalResult] = useState("");
  const [warning, setWarning] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editorKey, setEditorKey] = useState(0);

  // ---------- INITIAL LOAD ----------
  useEffect(() => {
    const rollNo = localStorage.getItem("rollNo");
    if (rollNo) {
      axios.get(`https://codeine-backend-2.onrender.com/user/${rollNo}`).then((res) => {
        const solved = res.data.solvedProblems || [];
        setCompleted(solved);

        const firstUnsolvedIndex = problems.findIndex(
          (p) => !solved.includes(p.id.toString())
        );
        const idx = firstUnsolvedIndex !== -1 ? firstUnsolvedIndex : 0;

        const savedData = JSON.parse(localStorage.getItem("savedCodes") || "{}");
        const savedCode = savedData[`${rollNo}-${problems[idx].id}-python`];
        setCode(savedCode || problems[idx].starterCode?.python || "");
        setCurrentIdx(idx);
        setEditorKey((prev) => prev + 1);
      });
    }
  }, []);

  // ---------- LOAD PYODIDE ----------
  useEffect(() => {
    const loadPyodide = async () => {
      if (!window.loadPyodide) {
        console.error("Pyodide script not loaded - add it in index.html");
        return;
      }
      const pyodideInstance = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.2/full/",
      });
      setPyodide(pyodideInstance);
    };
    loadPyodide();
  }, []);

  const showWarning = (
    msg = "⚠️ Pasting is not allowed! Please write code yourself."
  ) => {
    setWarning(msg);
    setTimeout(() => setWarning(""), 3000);
  };

  const runSinglePython = async (input) => {
    const safeCode = code || "";
    const codeWithStdout = `
import sys
from io import StringIO
sys.stdin = StringIO('''${input}''')
_stdout = sys.stdout
sys.stdout = StringIO()
try:
${safeCode.split("\n").map((line) => "    " + line).join("\n")}
    output_text = sys.stdout.getvalue()
except Exception as e:
    output_text = "Error: " + str(e)
sys.stdout = _stdout
output_text
`;
    try {
      return await pyodide.runPythonAsync(codeWithStdout);
    } catch (err) {
      return `Python Error: ${err.message}`;
    }
  };

  const validateCode = () => {
    if (!code || code.trim() === "") {
      showWarning(`⚠️ Please write some Python code before running.`);
      return false;
    }
    return true;
  };

  const runCode = async () => {
    if (!validateCode()) return;
    setIsLoading(true);
    const firstCase = problems[currentIdx].testCases[0];
    let output;
    if (pyodide) {
      output = await runSinglePython(firstCase.input);
    }
    setResults([
      {
        input: firstCase.input,
        expected: firstCase.output,
        got: output,
        pass: output.trim() === firstCase.output.trim(),
      },
    ]);
    setFinalResult("");
    setIsLoading(false);
  };

  const goToNextUnsolved = () => {
    const nextUnsolved = problems.findIndex(
      (p, idx) => !completed.includes(p.id.toString()) && idx !== currentIdx
    );
    const nextIndex = nextUnsolved !== -1 ? nextUnsolved : 0;
    const rollNo = localStorage.getItem("rollNo");
    const savedData = JSON.parse(localStorage.getItem("savedCodes") || "{}");
    const savedCode = savedData[`${rollNo}-${problems[nextIndex].id}-python`];

    setCurrentIdx(nextIndex);
    setCode(savedCode || problems[nextIndex].starterCode?.python || "");
    setResults([]);
    setFinalResult("");
    setEditorKey((prev) => prev + 1);
    setSidebarOpen(false);
  };

  const submitCode = async () => {
    if (!validateCode()) return;
    setIsLoading(true);
    let allPassed = true;
    const tempResults = [];

    for (const test of problems[currentIdx].testCases) {
      let result;
      if (pyodide) {
        result = await runSinglePython(test.input);
      }
      const pass = result.trim() === test.output.trim();
      if (!pass) allPassed = false;
      tempResults.push({ ...test, got: result, pass });
    }

    setResults(tempResults);
    setFinalResult(
      allPassed ? "✅ All test cases passed!" : "❌ Some test cases failed!"
    );

    if (allPassed) {
      const problemId = problems[currentIdx].id;
      const rollNo = localStorage.getItem("rollNo");

      const savedData = JSON.parse(localStorage.getItem("savedCodes") || "{}");
      savedData[`${rollNo}-${problemId}-python`] = code;
      localStorage.setItem("savedCodes", JSON.stringify(savedData));

      if (!completed.includes(problemId.toString())) {
        setCompleted((prev) => [...prev, problemId.toString()]);
      }

      try {
        await axios.post("https://codeine-backend-2.onrender.com/updateProgress", {
          rollNo,
          problemId,
        });
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        setTimeout(() => {
          goToNextUnsolved();
        }, 1500);
      } catch (error) {
        console.error("Error updating progress:", error);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-100 text-gray-800">
      {warning && (
        <div className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-20 sm:px-6 sm:py-3">
          {warning}
        </div>
      )}

      {/* Top Navbar */}
      <div className="p-2 flex justify-between items-center bg-sky-100 z-20 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Menu Button First */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded bg-black hover:bg-gray-700 sm:p-2"
          >
            <FiMenu className="text-xl text-white sm:text-2xl" />
          </button>
          {/* Problems Heading Next */}
          <h1 className="text-lg font-bold text-black sm:text-xl">Problems set</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        {sidebarOpen && (
          <div className="w-full md:w-72 bg-gray-900 p-2 md:p-4 h-[calc(100vh-64px)] overflow-y-auto md:h-screen">
            <div className="flex justify-between items-center mb-2 md:mb-4">
              <h2 className="text-base font-semibold text-white md:text-lg">
                Problems
              </h2>
              <span className="text-sm text-black md:text-base">
                {completed.length}/{problems.length}
              </span>
            </div>

            {problems.map((p, idx) => {
              const isSolved = completed.includes(p.id.toString());
              const isSelected = currentIdx === idx;
              const isUnlocked =
                isSolved ||
                idx === 0 ||
                completed.includes(problems[idx - 1]?.id.toString());

              let diffColor =
                p.difficulty === "Hard"
                  ? "text-red-400"
                  : p.difficulty === "Med."
                  ? "text-yellow-400"
                  : "text-green-400";

              return (
                <button
                  key={p.id}
                  disabled={!isUnlocked}
                  className={`flex items-center justify-between w-full px-2 py-1 md:px-4 md:py-2 rounded-lg text-left transition-all font-semibold border-l-4 ${
                    isSelected
                      ? "bg-gray-700 border-blue-500"
                      : "border-transparent"
                  } ${
                    !isUnlocked
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-700/80"
                  } text-sm md:text-base`}
                  onClick={() => {
                    if (!isUnlocked) return;
                    setCurrentIdx(idx);
                    const rollNo = localStorage.getItem("rollNo");
                    const savedData = JSON.parse(
                      localStorage.getItem("savedCodes") || "{}"
                    );
                    const savedCode = savedData[`${rollNo}-${p.id}-python`];
                    setCode(savedCode || p.starterCode?.python || "");
                    setResults([]);
                    setFinalResult("");
                    setEditorKey((prev) => prev + 1);
                    setSidebarOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base md:text-lg">
                      {isUnlocked ? (
                        isSolved ? (
                          <FiCheck className="text-green-400" />
                        ) : (
                          <FiCircle className="text-gray-400" />
                        )
                      ) : (
                        <FiLock className="text-gray-500" />
                      )}
                    </span>
                    <span>{idx + 1}. {p.title}</span>
                  </div>
                  <span className={`text-xs font-bold ${diffColor}`}>
                    {p.difficulty}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Split Main Panel */}
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Left Side - Problem */}
          <div className="w-full md:w-1/2 bg-sky-100 p-2 md:p-4 h-[40vh] md:h-screen overflow-y-auto border-2 border-sky-700 rounded-lg">
            <Problem problem={problems[currentIdx]} />
          </div>

          {/* Right Side - Editor & Results */}
          <div className="w-full md:w-1/2 bg-sky-100 p-2 md:p-4 flex flex-col border-2 border-sky-700 rounded-lg">
            <Editor
              key={editorKey}
              height="300px" // Reduced height for mobile
              language="python"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 14, // Reduced font size for mobile
                fontFamily: "Fira Code, monospace",
                lineNumbers: "on",
              }}
              onMount={(editor, monaco) => {
                editor.addCommand(
                  monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyV,
                  () => showWarning()
                );
                editor.onKeyDown((e) => {
                  if ((e.ctrlKey || e.metaKey) && e.code === "KeyV") {
                    e.preventDefault();
                    showWarning();
                  }
                });
                editor.onDidPaste(() => showWarning());
              }}
            />

            <div className="mt-2 flex gap-2 flex-wrap">
              <button
                onClick={runCode}
                disabled={isLoading || !code || code.trim() === ""}
                className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg flex items-center gap-1 text-sm md:text-base"
              >
                <FiPlay /> {isLoading ? "Running..." : "Run Code"}
              </button>
              <button
                onClick={submitCode}
                disabled={isLoading || !code || code.trim() === ""}
                className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-lg flex items-center gap-1 text-sm md:text-base"
              >
                <FiCheckCircle />{" "}
                {isLoading ? "Submitting..." : "Submit Code"}
              </button>
            </div>

            <div className="mt-2 flex-1 overflow-y-auto">
              {results.length > 0 ? (
                results.map((r, i) => (
                  <div
                    key={i}
                    className={`p-2 mb-1 rounded-lg border ${
                      r.pass
                        ? "bg-green-900 border-green-700"
                        : "bg-red-900 border-red-700"
                    } text-sm md:text-base`}
                  >
                    <div className="font-bold flex items-center gap-1">
                      {r.pass ? (
                        <FiCheckCircle className="text-green-400" />
                      ) : (
                        <FiXCircle className="text-red-400" />
                      )}
                      {r.pass ? "Passed" : "Failed"} - Test Case {i + 1}
                    </div>
                    <div className="text-xs mt-1 md:text-sm">
                      <div>
                        <b>Input:</b> <code>{r.input}</code>
                      </div>
                      <div>
                        <b>Expected:</b> <code>{r.output}</code>
                      </div>
                      <div>
                        <b>Got:</b> <code>{r.got.trim() || "<empty>"}</code>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500 text-center text-sm md:text-base">
                  Run code to see results...
                </div>
              )}
            </div>

            {finalResult && (
              <div
                className={`mt-2 text-center font-bold text-sm md:text-lg rounded-lg p-2 ${
                  finalResult.includes("passed")
                    ? "bg-green-700 text-white"
                    : "bg-red-700 text-white"
                }`}
              >
                {finalResult}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}