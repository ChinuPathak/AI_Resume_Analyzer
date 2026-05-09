import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "../styles/markdown.css";

function MarkdownRenderer({ response }) {
  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {response}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;