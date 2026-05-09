import { useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import UploadSection from "./components/UploadSection";
import Loader from "./components/Loader";
import MarkdownRenderer from "./components/MarkdownRenderer";

import "./styles/app.css";

function App() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a resume");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file)

      const res = await axios.post(
        "http://localhost:8000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);

      setResponse(res.data.response);
    } catch (error) {
      console.log(error);
      alert("Failed to analyze resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />

      <UploadSection
        file={file}
        setFile={setFile}
        handleAnalyze={handleAnalyze}
        loading={loading}
      />

      {loading && <Loader />}

      {response && !loading && (
        <MarkdownRenderer response={response} />
      )}
    </div>
  );
}

export default App;