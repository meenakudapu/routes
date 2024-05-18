# Student Management System

This is a simple Student Management System built with Node.js, Express.js, and MongoDB.

## Features

- CRUD Operations: Allows Create, Read, Update, and Delete operations for managing student records.
- RESTful API: Exposes RESTful API endpoints for interacting with student data.
- MongoDB Database: Uses MongoDB to store student records.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your local machine.
- MongoDB installed and running locally or accessible remotely.
- Basic understanding of JavaScript and Express.js.

## Installation
- Clone the repository:   
    - git clone <repository-url>    
- Install dependencies:    
    - npm install   
- Set up environment variables:   
    - Create a .env file in the root directory.   
    - Define environment variables like PORT and MONGODB_URI in the .env file.  
- Start the server:  
    - npm start   
- Access the application at http://localhost:PORT in your web browser.     

## Usage

- Create Student: Send a POST request to /api/students with student data in the request body.  
- Get All Students: Send a GET request to /api/students.  
- Get Student by ID: Send a GET request to /api/students/:id.  
- Update Student: Send a PUT request to /api/students/:id with updated student data in the request body.  
- Delete Student: Send a DELETE request to /api/students/:id to delete a student by ID.  

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or feature requests.
   
![image](https://github.com/meenakudapu/routes/assets/160092073/704cfc0d-975d-4588-98e8-fe79ba5a113b)
![image](https://github.com/meenakudapu/routes/assets/160092073/0ad25f85-34ce-4a5c-9aba-8a29e08f85a9)

