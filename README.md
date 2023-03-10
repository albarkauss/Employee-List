# Create Employee Record App  📑

![DEMO](https://user-images.githubusercontent.com/119751609/212564591-1982f859-ea14-4776-8032-7f2817e68367.gif)

## Description ✒️

This is an application that allows you to create and visualize employees. The frontend is built using React, and the backend is built using Express.js. The data is stored into a MongoDB database.

### Frontend
The frontend is built using React, which allows for a dynamic and responsive user interface.
- There are input fields for email, first name, last name, and a dropdown to select the employee's gender.
- By clicking the submit button, the data is sent to the backend for storage in the database.
- If any of the required information is missing, an error message will appear and the data will not be sent to the backend.

### Backend 
The backend is built using Node.js and Express.js framework, which allows for efficient handling of data and communication with the frontend.
Data received from the frontend is stored in a database. MongoDB Atlas is used as the database, which is a cloud-based database service that allows for easy and secure storage of data.

### Conclusion
This application is a simple and easy way to manage employee data. By using React and Express.js, the application is efficient and user-friendly. With MongoDB Atlas, the data is securely stored and can be easily accessed.


## Getting started 👩🏽‍💻
To run this application, you will need to have Node.js installed on your machine.

> **_NOTE:_** If you don't have NodeJS installed: https://nodejs.org/en/download/

1. Open your terminal and clone the repository running `git clone https://github.com/albarkauss/Employee-List.git`
#### Start Node server  
2. In the root directory of the project, run `cd server`
3. Run `npm install` to install the necessary dependencies
4. Start the server by running `npm start`
5. If successfull you will see: 
```
Server is running on port: 5001
Successfully connected to MongoDB.
```

#### Start React App
Ensure that the server app is still running. If it’s not, start by executing `npm start` in the server/ directory

6. Open a new terminal and navigate to the client folder, running `cd client`
7. Run `npm install` to install the necessary dependencies
8. Start the client by running `npm start`
9. The application can be accessed at `http://localhost:3000` in your browser
10. If successfull you will see in terminal:
```
webpack compiled successfully
```


