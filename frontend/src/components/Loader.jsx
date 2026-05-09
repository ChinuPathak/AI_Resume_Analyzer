import "../styles/loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>

      <h2>Analyzing Resume...</h2>

      <p>
        AI is reviewing ATS score, skills,
        projects, formatting, and recruiter insights.
      </p>
    </div>
  );
}

export default Loader;