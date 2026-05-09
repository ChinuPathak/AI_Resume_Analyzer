from fastapi import FastAPI, UploadFile, File
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import os
import google.generativeai as genai
import fitz
import docx
import io
from resumeAnalyzerPrompt import resume_Analyzer_Prompt

app = FastAPI()
load_dotenv()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development (later restrict this)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


secret_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key = secret_key)
model = genai.GenerativeModel("gemini-2.5-flash")

@app.post("/upload")
async def resumeAnalyser(file: UploadFile = File(...)):
    contents = await file.read() # Read file content
    text = ""
    if file.filename.endswith(".pdf"):
        # Handle PDF
        doc = fitz.open(stream=contents, filetype="pdf")
        for page in doc:
            text += page.get_text()
            
    elif file.filename.endswith(".docx"):
        # Handle Word Document
        doc = docx.Document(io.BytesIO(contents))
        for para in doc.paragraphs:
            text += para.text + "\n"

    else:
        return {"error": "Unsupported file format. Please upload PDF or DOCX."}

    print("text>>>>>>>>>>>>>>" , text)

    prompt = resume_Analyzer_Prompt(text)
    response = model.generate_content(prompt)
    print("response>>>>>>>>>>>>>>>>>>>>" , response)

    return {
        "response": response.text
    }
