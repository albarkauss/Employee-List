// Import the MongoClient class from the mongodb library
const { MongoClient } = require("mongodb");

// Get the MongoDB connection string from the environment variable
const Db = process.env.ATLAS_URI;

// Create a new MongoClient instance
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a variable to store the employee database
var dbEmployees;

// Export an object with two functions
module.exports = {
  // Function to connect to the MongoDB server
  connectToServer: function (callback) {
    // Use the connect method to connect to the server
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        // Assign the "employees" database to the dbEmployees variable
        dbEmployees = db.db("employees");
        console.log("Successfully connected to MongoDB.");
      }
      // Call the callback function, passing in the error if one occurred
      return callback(err);
    });
  },

  // Function to get the employee database
  getDb: function () {
    // Return the dbEmployees variable
    return dbEmployees;
  },
};
