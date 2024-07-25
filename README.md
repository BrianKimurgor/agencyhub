Certainly! Here's the README file in markdown format:

---

# AgencyHub

AgencyHub is a centralized agency management platform designed to streamline and enhance the operations of agencies. This platform offers a variety of features including user registration, login, dashboard access, and management of companies, projects, resources, and branding.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration and Login
- User Logout
- Dashboard with Navigation
- Company Management
- Project Management
- Resource Management
- Branding Management

## Getting Started

### Prerequisites

- Node.js (v17 or later)
- npm (v6 or later) or Yarn
- MySQL

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/BrianKimurgor/AgencyHub.git
    cd AgencyHub
    ```

2. **Backend Setup**:
    ```sh
    cd backend
    npm install
    ```

3. **Frontend Setup**:
    ```sh
    cd ../frontend
    npm install
    ```

4. **Environment Variables**:
    Create a `.env` file in the `backend` directory and add the following:
    ```plaintext
    DATABASE_URL="mysql://user:password@localhost:3306/agencyhub"
    JWT_SECRET="your_jwt_secret"
    ```

### Running the Application

1. **Start the Backend Server**:
    ```sh
    cd backend
    npm run dev
    ```

2. **Start the Frontend Development Server**:
    ```sh
    cd frontend
    npm run dev
    ```

3. **Access the Application**:
    Open your browser and navigate to `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### User
- `GET /api/user/profile` - Get user profile

### Company
- `GET /api/companies` - Get all companies
- `POST /api/companies` - Create a new company
- `GET /api/companies/:id` - Get a company by ID
- `PUT /api/companies/:id` - Update a company by ID
- `DELETE /api/companies/:id` - Delete a company by ID

### Project
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create a new project
- `GET /api/projects/:id` - Get a project by ID
- `PUT /api/projects/:id` - Update a project by ID
- `DELETE /api/projects/:id` - Delete a project by ID

### Resource
- `GET /api/resources` - Get all resources
- `POST /api/resources` - Create a new resource
- `GET /api/resources/:id` - Get a resource by ID
- `PUT /api/resources/:id` - Update a resource by ID
- `DELETE /api/resources/:id` - Delete a resource by ID

### Branding
- `GET /api/branding` - Get all branding items
- `POST /api/branding` - Create a new branding item
- `GET /api/branding/:id` - Get a branding item by ID
- `PUT /api/branding/:id` - Update a branding item by ID
- `DELETE /api/branding/:id` - Delete a branding item by ID

## Technologies Used

### Backend
- Node.js
- Express.js
- Prisma ORM
- MySQL

### Frontend
- React
- Vite
- Axios

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes relevant tests.
