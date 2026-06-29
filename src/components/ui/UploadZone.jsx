import { useRef, useState } from "react";

function UploadZone({ file, setFile }) {
  const inputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);

  function handleFiles(files) {
    if (!files || files.length === 0) return;

    const selected = files[0];

    if (selected.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    setFile(selected);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      <div
        onClick={() => inputRef.current.click()}
        onDragEnter={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragActive(false);
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className={`cursor-pointer transition-all duration-300 border-2 border-dashed rounded-3xl p-10 text-center
        ${
          dragActive
            ? "border-blue-600 bg-blue-50 dark:bg-blue-950/20 scale-[1.01]"
            : "border-gray-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800/40"
        }`}
      >
        {!file ? (
          <>
            <div className="text-6xl mb-4">📄</div>

            <h2 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
              Drag & Drop Resume
            </h2>

            <p className="text-red-500 dark:text-red-400 mt-3">
              or click to browse PDF
            </p>

            <p className="text-sm text-slate-450 dark:text-slate-500 mt-6">
              Supports PDF files
            </p>
          </>
        ) : (
          <>
            <div className="text-5xl">✅</div>

            <h2 className="text-2xl font-bold mt-4 text-green-700 dark:text-green-400">
              Resume Uploaded
            </h2>

            <p className="mt-4 font-semibold break-all text-slate-855 dark:text-slate-200">
              {file.name}
            </p>

            <p className="text-slate-500 dark:text-slate-405 mt-2">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                inputRef.current.click();
              }}
              className="mt-6 px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Change Resume
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default UploadZone;
