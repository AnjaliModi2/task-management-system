# Task Management System

## About This Project

Hi, I’m *Anjali Modi, and this project is my capstone submission where I built a full-stack **Task Management System* using React, Spring Boot, and MySQL.

The goal of this project was to design and develop a simple but structured system that helps users manage tasks efficiently, instead of relying on unorganized tools like spreadsheets or chat applications.

---

## Problem Statement

In small teams, task management is often unclear:

* Tasks are not tracked properly
* Ownership is not defined clearly
* There is no centralized system to monitor progress

To address this, I developed an application where:

* Tasks can be created and assigned
* Progress can be tracked using status updates
* All tasks are visible in one place

---

## Tech Stack

* *Frontend:* React (Vite), Tailwind CSS
* *Backend:* Spring Boot (REST APIs)
* *Database:* MySQL
* *Dev Tools:* Docker, Docker Compose

---

## Features Implemented

### Authentication

* User login system
* Secured API access

### Task Management

* Create, update, and delete tasks
* Assign tasks to users
* Track task status:

  * To Do
  * In Progress
  * Done

### Dashboard

* View all tasks
* Filter tasks by status

---

## Database Design

### Users Table

* id
* name
* email
* password
* role (Admin/User)

### Tasks Table

* id
* title
* description
* status
* assigned_to
* created_by

---

## API Endpoints

### Auth

* POST /api/auth/login

### Tasks

* POST /api/tasks
* GET /api/tasks
* PUT /api/tasks/{id}
* DELETE /api/tasks/{id}

---

## Docker Setup

I have containerized the complete application so it can run easily without manual setup.

### Run the project

bash
docker compose up --build


---

## Application URLs

* Frontend: http://localhost:3000
* Backend: http://localhost:8080

---

## Project Structure


task-management-system/
│
├── backend/        # Spring Boot application
├── frontend/       # React (Vite) application
├── docker-compose.yml
└── README.md


---

## Notes

* Backend connects to MySQL using Docker service name (db)
* Sensitive data like passwords are handled securely
* APIs are protected to restrict unauthorized access

---

## Learning Outcomes

Through this project, I gained hands-on experience with:

* Building a full-stack application
* Designing REST APIs
* Connecting frontend with backend
* Working with MySQL and JPA
* Using Docker for containerization

---

## Future Improvements

* Enhanced UI/UX
* Advanced role-based access control
* Search and pagination features
* Cloud deployment

---

## Quick Start


docker compose up --build


Then open: http://localhost:3000