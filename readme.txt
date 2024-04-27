Job Hunt Platform
==================

Description
-----------
Job Hunt is a platform designed to help job seekers find employment opportunities in Japan. With its user-friendly interface and comprehensive job listings, Job Hunt aims to connect individuals with job opportunities that match their skills and preferences.

Target Audience
----------------
Job seekers interested in finding employment opportunities in Japan.

Technologies Used
-----------------
- Frontend: Next.js
- Backend: Next.js with App Route feature
- Database: MongoDB
- Animation: Framer Motion
- UI Development: Material UI, Tailwind CSS
- API Calls: Axios

Functionality
-------------
Job Hunt consists of the following pages:
1. Home: Provides an overview of the application.
2. About: Details about the application, company, and team.
3. Jobs: Lists available jobs with a search option to filter jobs.
   - Jobs Details Page: Displays detailed information about a job and the associated company. Users can apply for a job from this page.
4. Why Work in Japan: Highlights the advantages of working in Japan.
5. Contact: Allows users to contact the team.

The application features smooth animations powered by Framer Motion during page transitions, enhancing the user experience.

Setup and Requirements
-----------------------
1. Clone the repository: `git clone https://github.com/rahulchatterjee12/jobs-in-japan`
2. Install dependencies: `npm install`
3. Set up MongoDB access URL in the .env file to fetch job data. Note: You must enter job data to list them in the application.

API Documentation
------------------
The backend of Job Hunt provides the following APIs:
1. GET /jobs: Retrieves a list of jobs.
2. GET /jobs/:id: Retrieves details of a specific job by its ID.
3. POST /jobs/:id/apply: Submits a job application.

Contributing
------------
Contributions to Job Hunt are welcome! Please follow the guidelines outlined in CONTRIBUTING.md for submitting bug reports, feature requests, or code contributions.


Contact Information
-------------------
For questions or feedback, contact visit my GitHub repository for more information: https://github.com/rahulchatterjee12/jobs-in-japan.

Acknowledgements
----------------
We would like to thank the open-source community for their valuable contributions. Special thanks to the creators of Next.js, MongoDB, Framer Motion, Material UI, Tailwind CSS, and Axios for their excellent tools and libraries.