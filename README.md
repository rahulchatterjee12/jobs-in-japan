# Assignment Submission README

# Setting up MongoDB Connection

# Begin by creating a .env file at the root of your project. Inside this file, define an environment variable called MONGO_URL and assign it the connection link to your MongoDB database.

# 2. Importing Demo Job Data

# Included in the project is a script for importing demo job details into your database. Before running the script, ensure that you have correctly provided the MongoDB connection link in the .env file. The demo job data is conveniently stored in the jobData.js file.

# Technologies Utilized

    Next.js (Frontend & Backend (API Routes))
    Axios (API calls)
    Framer Motion (Animations)
    Material-UI (UI Development)
    Tailwind CSS (UI Development)
    MongoDB (Database)

# Viewing and Applying for Jobs

# Applicants can easily browse available job listings on the jobs page, which fetches data directly from the MongoDB database.

# To apply for a job, applicants can navigate to the job description page and seamlessly submit their application. Upon submission, the user's resume will be uploaded to the public folder of the application, and their data, along with the file link, will be securely stored in the MongoDB database.

## Getting Started

# First, run the development server:

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
