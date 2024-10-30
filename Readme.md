# description
Implement user authentication and authorization using Bearer tokens in a Node.js application with Express.js, Mongoose, and JWT. The application should follow the MVC pattern and include API documentation.

# project include
This project implements a user authentication and information retrieval system using the MVC (Model-View-Controller) architecture with MongoDB and Mongoose. It includes essential features for secure user management: registration and login with password hashing, JWT generation, and authentication middleware to protect sensitive routes. Upon registration, users' passwords are hashed for security. The login endpoint verifies user credentials and issues a JWT, which allows access to a protected user information route. Middleware verifies the JWT, decodes it, and attaches user data to the request. Comprehensive Postman documentation is provided, detailing each API endpoint, sample requests, responses, and error handling to support reliable and secure interactions.


# Detailed documentation for each API endpoint in Postman.
https://documenter.getpostman.com/view/39168739/2sAY4sj4gg