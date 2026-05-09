AI Resume Analyzer 🚀

An AI-powered Resume Analyzer built using FastAPI, React (Vite), and Google Gemini AI that analyzes resumes, provides ATS scores, identifies strengths and weaknesses, and suggests job roles based on skills.

✨ Features
📄 Upload Resume (PDF / DOCX)
🤖 AI-Powered Resume Analysis
📊 ATS Score Generation
✅ Strengths & Weakness Detection
💡 Resume Improvement Suggestions
🎯 Job Role Recommendations
🛠 Skill Match Analysis
⚡ FastAPI Backend
⚛️ React + Vite Frontend
🔥 Gemini AI Integration

🛠 Tech Stack
Frontend
React.js
Vite
JavaScript
CSS
Backend
FastAPI
Python
Google Gemini API
PyMuPDF (fitz)
python-docx

📂 Project Structure
AI_RESUME_ANALYZER/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── resumeAnalyzerPrompt.py
│   ├── .env
│   └── venv/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── node_modules/
│
├── .gitignore
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/AI_RESUME_ANALYZER.git
cd AI_RESUME_ANALYZER

🚀 Backend Setup (FastAPI)
Navigate to Backend Folder
cd backend
Create Virtual Environment
Windows
python -m venv venv
Activate Virtual Environment
Windows
venv\Scripts\activate
Install Dependencies
pip install -r requirements.txt
Create .env File

Create a .env file inside the backend folder:
GOOGLE_API_KEY=your_gemini_api_key

Get your Gemini API Key from:
Google AI Studio

Run FastAPI Server
uvicorn main:app --reload

Backend will run on:
http://127.0.0.1:8000

⚛️ Frontend Setup (React + Vite)
Open New Terminal
cd frontend
Install Dependencies
npm install
Start Frontend
npm run dev

Frontend will run on:
http://localhost:5173

📡 API Endpoint
Analyze Resume
Endpoint
POST /upload
Form Data
Key	Type
file	UploadFile

🧠 How It Works
User uploads a resume.
Backend extracts text from PDF/DOCX.
Resume text is sent to Gemini AI.
AI analyzes:
ATS Score
Strengths
Weaknesses
Missing Skills
Suggested Improvements
Matching Job Roles
Results are displayed on the frontend.

📦 Backend Dependencies
fastapi
uvicorn
python-dotenv
google-generativeai
pymupdf
python-docx
python-multipart

🔒 Environment Variables
Variable	Description
GOOGLE_API_KEY	Gemini API Key
📸 Future Improvements
🔥 Drag & Drop Resume Upload
📈 Resume Score Visualization
📄 Multiple Resume Templates
🌐 Deploy on Vercel + Render
🔐 User Authentication
💬 AI Chat Resume Assistant
📊 Skill Gap Analysis Dashboard
🤝 Contributing

Contributions are welcome!
Fork the repository
Create a new branch
Commit changes
Push the branch
Open a Pull Request

📜 License
This project is licensed under the MIT License.

👨‍💻 Author
Chinmay Pathak

Backend Developer
AI & Full Stack Enthusiast

⭐ Support
If you like this project, give it a ⭐ on GitHub!
