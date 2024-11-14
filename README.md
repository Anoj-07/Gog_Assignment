
# GOG-Assignment

A full-stack application built with React, Tailwind CSS, Spring Boot, and Spring Data JPA. This project demonstrates a simple frontend with secure authentication with login and signUp feature.

## Features

- User registration and login
- Secure authentication with Spring Security
- RESTful APIs for managing information
- Responsive user interface with Tailwind CSS
- In-memory database using H2 for quick testing and development

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Spring Boot, Spring Data JPA, Spring Security
- **Database**: H2 (in-memory database)

## Project Structure

### Entities

The primary entity for this project is the `User` entity, which contains the following fields:

| Field        | Type   | Description            |
|--------------|--------|------------------------|
| `userId`     | Long   | Unique identifier      |
| `userName`   | String | Name of the user       |
| `email`      | String | Email of the user      |
| `mobileNumber` | String | User's mobile number |
| `password`   | String | Encrypted password     |

### API Endpoints

The application exposes several endpoints for user management:

- **POST /api/users/register** - Register a new user
- **POST /api/users/login** - Login user and receive authentication token
- **GET /api/users/{id}** - Get user details by ID
- **PUT /api/users/{id}** - Update user details
- **DELETE /api/users/{id}** - Delete user by ID

## Getting Started

### Prerequisites

- Java 17 or higher
- Node.js and npm
- IDE or code editor of your choice

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git@github.com:Anoj-07/Gog_Assignment.git
   cd your-repo-name
   ```
   
2.**Backend Setup**
- Navigate to the backend directory.
- Configure application.properties for database settings if needed.
- Run the Spring Boot application:
  ```
  ./mvnw spring-boot:run
  ```
3. **Frontend Setup:**
- Navigate to the frontend directory.
- Install dependencies and start the development server:

```
npm install
npm run dev
```


## Database
- This project uses the H2 in-memory database. The console can be accessed at http://localhost:8080/h2-console with the default settings in application.properties.

## License
```

Feel free to customize the instructions, API routes, and additional setup steps based on your project’s details!
```
