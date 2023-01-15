# Create Employee Record App
## Description

This is an application allows you to create and visualize employees. The frontend is built using ReactJS, and the backend is built using ExpressJS. The data is stored into a MongoDB database.

### Frontend
The frontend is built using ReactJS, which allows for a dynamic and responsive user interface.
- There are input fields for email, first name, last name, and a dropdown to select the employee's gender.
- By clicking the submit button, the data is sent to the backend for storage in the database.
- If any of the required information is missing, an error message will appear and the data will not be sent to the backend.

### Backend
The backend is built using NodeJS and Express framework, which allows for efficient handling of data and communication with the frontend.
Data received from the frontend is stored in a database. MongoDB Atlas is used as the database, which is a cloud-based database service that allows for easy and secure storage of data.

### Conclusion
This application is a simple and easy way to manage employee data. By using ReactJS and NodeJS, the application is efficient and user-friendly. With MongoDB Atlas, the data is securely stored and can be easily accessed.


## Getting started
To run this application, you will need to have NodeJS installed on your machine.

> **_NOTE:_** If you don't have NodeJS installed: https://nodejs.org/en/download/

1. Clone the repository running `git clone`
##### Start Node server  
2. In the root directory of the project, run `cd server`
3. Run `npm install` to install the necessary dependencies
4. Start the server by running `npm start`
##### Start React App
5. In the root directory of the project, run `cd client`
6. Run `npm install` to install the necessary dependencies
7. Start the client by running `npm start`
8. The application can be accessed at `http://localhost:3000` in your browser


