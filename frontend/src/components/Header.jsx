import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="overlay">
        <h1>AI Resume Analyzer</h1>

        <p>
          Upload your resume and get ATS score,
          recruiter insights, skill analysis,
          improvement roadmap, and job matching.
        </p>
      </div>
    </header>
  );
}

export default Header;