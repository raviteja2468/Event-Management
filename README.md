# Event Management Backend

## Overview

This backend is part of an Event Management application built using Node.js, Express, MongoDB, and Supabase. It provides functionality for user authentication, event management, session tracking, and weather information integration.

## Features

- User registration and login with Supabase
- Event creation, retrieval, updating, and deletion
- Session tracking for users
- Integration with a weather API to fetch weather information for event locations

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- MongoDB
- Supabase account
- Weather API key (e.g., from WeatherAPI)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd event-management-backend

### Frontend Documentation

#### `README.md`

```markdown
# Event Management Frontend

## Overview

This frontend is part of an Event Management application built with React. It allows users to register, log in, and manage events, including viewing weather information for event locations.

## Features

- User registration and login
- Event management (create, read, update, delete)
- Integration with weather API for event locations

## Getting Started

### Prerequisites

- Node.js (>=14.x)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd event-management-frontend

Install dependencies:
npm install

Start the development server:
npm start
The development server will start on http://localhost:3000.
Components
Authentication
Login Page: Allows users to log in.
Register Page: Allows users to register.
Events
Events Page: Displays a list of events, allows users to create, update, and delete events.
Weather
Weather Integration: Shows weather information for event locations.
