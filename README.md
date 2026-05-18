# Job Portal Project

---

## Features

- Create job postings (via API/Postman)
- View all jobs on frontend
- Apply for jobs via frontend form
- Store applications in MongoDB
- RESTful API (Express.js)
- Simple and clean UI (HTML/CSS/JS)
- Full backend + frontend integration

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- HTML
- CSS
- JavaScript
- Postman (API Testing)

---

## 📁 Project Structure

job-portal-project
→ backend
   → src
      → config
      → controllers
      → models
      → routes
      → middleware
      → app.js
      → server.js
   → .env
   → package.json

→ frontend
   → index.html
   → jobs.html
   → apply.html
   → style.css
   → script.js

→ postman
   → JobPortalAPI.postman_collection.json

---

## Installation & Setup

### 1. Clone Repository
git clone https://github.com/your-username/job-portal-project.git

---

### 2. Backend Setup
cd backend
npm install

---

### 3. Create .env file

PORT=5000
MONGO_URI=your_mongodb_connection_string

---

### 4. Run Backend Server
npm run dev

Server will run on:
http://localhost:5000

---

## Frontend Setup

Open:
frontend/index.html

Then:
Right click → Open with Live Server

(Install Live Server extension if not installed)

---

## API Endpoints

### Jobs

GET     /api/jobs  
POST    /api/jobs  
PUT     /api/jobs/:id  
DELETE  /api/jobs/:id  

---

### Applications

GET     /api/applications  
POST    /api/applications  

---

## Example Job JSON

{
  "title": "Node.js Intern",
  "company": "Internee.pk",
  "location": "Remote",
  "salary": "30000",
  "description": "Internship opportunity",
  "skills": ["Node.js", "MongoDB", "Express"]
}

---

## Example Application JSON

{
  "jobId": "JOB_ID_HERE",
  "name": "Your Name",
  "email": "you@example.com",
  "resumeLink": "https://drive.google.com/",
  "coverLetter": "Interested in this role"
}

---

## How to Test (Postman)

1. Open Postman
2. Create new request
3. Choose method (GET/POST)
4. Enter URL (http://localhost:5000/api/jobs)
5. Add JSON body for POST requests
6. Click Send

---

## ⚠️ Important Notes

- MongoDB Atlas must allow:
  0.0.0.0/0 (Network Access)

- Backend must run before frontend

- Use Live Server for frontend

---

## Future Improvements

- JWT Authentication (Login/Register)
- Admin Dashboard UI
- Resume Upload System
- Search & Filters
- Deployment (Render / Netlify)

---

## Author
Muhammad Hamza

LinkedIn: https://www.linkedin.com/in/mhamza-se

LinkedIn Post:
https://www.linkedin.com/posts/mhamza-se_jobabrlistings-node-express-ugcPost-7461844577143152640-cKz8?utm_source=share&utm_medium=member_android&rcm=ACoAAFC1dRwBJw9Hjdk96lKLzScF6CQdWMYwQpo
---

## License

Free to use for learning and internship purposes
