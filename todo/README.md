# MERN Todo Application

A full-stack todo application built with MongoDB, Express, React, and Node.js.

## Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Beautiful UI with DaisyUI and Tailwind CSS
- ✅ Real-time updates with MongoDB

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation

## Installation

### 1. Install Frontend Dependencies

```bash
npm install
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

## Running the Application

### Start Backend Server

```bash
cd backend
npm start
```

The backend server will run on `http://localhost:8080`

### Start Frontend Development Server

Open a new terminal and run:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Project Structure

```
todo/
├── backend/
│   ├── server.js           # Express server setup
│   ├── controllers/        # Route controllers (business logic)
│   │   └── todoController.js
│   ├── routes/             # Express routers (routes wiring)
│   │   └── todoRoutes.js
│   ├── db/
│   │   └── db.js          # MongoDB connection
│   └── modals/
│       └── Todo.js        # Todo mongoose model
├── src/
│   ├── App.jsx            # Main app component
│   ├── components/
│   │   ├── Form.jsx       # Todo form and list component
│   │   └── Home.jsx       # Home header component
│   └── main.jsx
└── package.json
```

## API Endpoints

- `GET /todos` - Get all todos
- `POST /add` - Add a new todo
- `PATCH /update/:id` - Toggle todo completion status
- `DELETE /delete/:id` - Delete a todo

## Technologies Used

### Frontend

- React
- Axios
- React Hook Form
- Tailwind CSS
- DaisyUI
- Vite

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- Body-parser

## Database Configuration

The application uses MongoDB Atlas. Update the connection string in `backend/db/db.js` if needed:

```javascript
let url = "your-mongodb-connection-string";
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT
