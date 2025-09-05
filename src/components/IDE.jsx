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
  const [language, setLanguage] = useState("python");

  // ---------- INITIAL LOAD ----------
  useEffect(() => {
    const rollNo = localStorage.getItem("rollNo");
    if (rollNo) {
      axios.get(`https://codeine-backend.onrender.com/user/${rollNo}`).then((res) => {
        const solved = res.data.solvedProblems || [];
        setCompleted(solved);

        const firstUnsolvedIndex = problems.findIndex(
          (p) => !solved.includes(p.id.toString())
        );
        const idx = firstUnsolvedIndex !== -1 ? firstUnsolvedIndex : 0;

        const savedData = JSON.parse(localStorage.getItem("savedCodes") || "{}");
        const savedCode =
          savedData[`${rollNo}-${problems[idx].id}-${language}`];
        setCode(savedCode || problems[idx].starterCode?.[language] || "");
        setCurrentIdx(idx);
        setEditorKey((prev) => prev + 1);
      });
    }
  }, [language]);

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

  const runSingleNonPython = async (input) => {
    try {
      const response = await axios.post("https://codeine-backend.onrender.com/run", {
        language,
        code,
        input,
      });
      return response.data.output;
    } catch (err) {
      return `Error: ${err.response?.data?.error || err.message}`;
    }
  };

  const validateCode = () => {
    if (!code || code.trim() === "") {
      showWarning(`⚠️ Please write some ${language} code before running.`);
      return false;
    }
    return true;
  };

  const runCode = async () => {
    if (!validateCode()) return;
    setIsLoading(true);
    const firstCase = problems[currentIdx].testCases[0];
    let output;
    if (language === "python" && pyodide) {
      output = await runSinglePython(firstCase.input);
    } else {
      output = await runSingleNonPython(firstCase.input);
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
    const savedCode = savedData[`${rollNo}-${problems[nextIndex].id}-${language}`];

    setCurrentIdx(nextIndex);
    setCode(savedCode || problems[nextIndex].starterCode?.[language] || "");
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
      if (language === "python" && pyodide) {
        result = await runSinglePython(test.input);
      } else {
        result = await runSingleNonPython(test.input);
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
      savedData[`${rollNo}-${problemId}-${language}`] = code;
      localStorage.setItem("savedCodes", JSON.stringify(savedData));

      if (!completed.includes(problemId.toString())) {
        setCompleted((prev) => [...prev, problemId.toString()]);
      }

      try {
        await axios.post("https://codeine-backend.onrender.com/updateProgress", {
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
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-100 text-gray-100">
      {warning && (
        <div className="fixed top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg">
          {warning}
        </div>
      )}

{/* Top Navbar */}
<div className="p-4 flex justify-between items-center bg-sky-100">
  <div className="flex items-center gap-3">
    {/* Menu Button First */}
    <button
       onClick={() => setSidebarOpen(!sidebarOpen)}
       className="p-2 rounded bg-black hover:bg-gray-700">
        <FiMenu className="text-2xl text-white" />
    </button>
    {/* Problems Heading Next */}
    <h1 className="text-xl font-bold text-black">Problems set</h1>

  </div>
</div>


      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <div className="w-72 bg-gray-900 p-4 h-[calc(100vh-64px)] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
             <h2 className="text-lg font-semibold text-white">Problems</h2>
             <span className="text-sm text-black">
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
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-left transition-all font-semibold border-l-4 ${
                    isSelected
                      ? "bg-gray-700 border-blue-500"
                      : "border-transparent"
                  } ${
                    !isUnlocked
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-700/80"
                  }`}
                  onClick={() => {
                    if (!isUnlocked) return;
                    setCurrentIdx(idx);
                    const rollNo = localStorage.getItem("rollNo");
                    const savedData = JSON.parse(
                      localStorage.getItem("savedCodes") || "{}"
                    );
                    const savedCode = savedData[`${rollNo}-${p.id}-${language}`];
                    setCode(savedCode || p.starterCode?.[language] || "");
                    setResults([]);
                    setFinalResult("");
                    setEditorKey((prev) => prev + 1);
                    setSidebarOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">
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
                    <span>
                      {idx + 1}. {p.title}
                    </span>
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
        <div className="flex-1 flex">
          {/* Left Side - Problem */}
           <div className="w-1/2 bg-sky-100 p-6 h-screen overflow-y-auto border-2 border-sky-700 rounded-lg">
              <Problem problem={problems[currentIdx]} />
           </div>


          {/* Right Side - Editor & Results */}
          <div className="w-1/2 bg-sky-100 p-6 flex flex-col border-2 border-sky-700 rounded-lg">
            <div className="mb-2 flex items-center gap-4">
              <label className="text-yellow-500 font-semibold text-sm">
                Select Language:
              </label>
              <select
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                  const rollNo = localStorage.getItem("rollNo");
                  const savedData = JSON.parse(
                    localStorage.getItem("savedCodes") || "{}"
                  );
                  const savedCode =
                    savedData[
                      `${rollNo}-${problems[currentIdx].id}-${e.target.value}`
                    ];
                  setCode(
                    savedCode ||
                      problems[currentIdx].starterCode?.[e.target.value] ||
                      ""
                  );
                  setEditorKey((prev) => prev + 1);
                }}
                className="bg-gray-700 text-white rounded-lg px-3 py-1"
              >
                <option value="python">Python</option>
                <option value="cpp">C++</option>
                <option value="c">C</option>
                <option value="java">Java</option>
              </select>
            </div>

            <Editor
              key={editorKey}
              height="550px"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 16,
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

            <div className="mt-4 flex gap-4 flex-wrap">
              <button
                onClick={runCode}
                disabled={isLoading || !code || code.trim() === ""}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <FiPlay /> {isLoading ? "Running..." : "Run Code"}
              </button>
              <button
                onClick={submitCode}
                disabled={isLoading || !code || code.trim() === ""}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <FiCheckCircle />{" "}
                {isLoading ? "Submitting..." : "Submit Code"}
              </button>
            </div>

            <div className="mt-6 flex-1 overflow-y-auto">
              {results.length > 0 ? (
                results.map((r, i) => (
                  <div
                    key={i}
                    className={`p-4 mb-3 rounded-lg border ${
                      r.pass
                        ? "bg-green-900 border-green-700"
                        : "bg-red-900 border-red-700"
                    }`}
                  >
                    <div className="font-bold flex items-center gap-2 text-lg">
                      {r.pass ? (
                        <FiCheckCircle className="text-green-400" />
                      ) : (
                        <FiXCircle className="text-red-400" />
                      )}
                      {r.pass ? "Passed" : "Failed"} - Test Case {i + 1}
                    </div>
                    <div className="text-sm mt-2">
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
                <div className="text-gray-400 text-center">
                  Run code to see results...
                </div>
              )}
            </div>

            {finalResult && (
              <div
                className={`mt-4 text-center font-bold text-lg rounded-xl p-4 ${
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
