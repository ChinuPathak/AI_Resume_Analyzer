import "../styles/upload.css";

function UploadSection({
  file,
  setFile,
  handleAnalyze,
  loading,
}) {
  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2>Upload Resume</h2>

        <p className="upload-text">
          Supported formats: PDF, DOC, DOCX
        </p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {file && (
          <div className="selected-file">
            <strong>Selected:</strong> {file.name}
          </div>
        )}

        <button
          onClick={handleAnalyze}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </div>
    </div>
  );
}

export default UploadSection;