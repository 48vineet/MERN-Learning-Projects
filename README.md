# MERN-Learning-Projects

This repository serves as a collection of projects built to learn and practice various aspects of the MERN stack (MongoDB, Express.js, React, Node.js) and related modern web development technologies. Each project resides in its own directory, focusing on different concepts and functionalities.

## Projects

### 1. Todo App
A simple Todo application demonstrating basic React concepts, state management, and component interaction.

* **Technology Stack**: React, Vite.
* **Features**:
    * Add new todo items with a name and due date.
    * Delete existing todo items.
    * Basic UI styling.
* **How to Run**:
    1.  Navigate to the `Projects/Todo App` directory:
        ```bash
        cd Projects/Todo App
        ```
    2.  Install dependencies:
        ```bash
        npm install
        ```
    3.  Start the development server:
        ```bash
        npm run dev
        ```
    The application will typically be accessible at `http://localhost:5173`.

### 2. Social Media App
A front-end social media application showcasing more advanced React features, component design, and external library integration.

* **Technology Stack**: React, Vite, Tailwind CSS, `styled-components`, `motion` (Framer Motion).
* **Features**:
    * Display a list of posts with titles, bodies, reactions, and tags.
    * Create new posts with user ID, title, content, reactions, and hashtags.
    * Delete posts.
    * Interactive UI elements with animations.
    * Sidebar navigation to switch between Home and Create Post views.
* **How to Run**:
    1.  Navigate to the `Projects/Social_Media_App` directory:
        ```bash
        cd Projects/Social_Media_App
        ```
    2.  Install dependencies:
        ```bash
        npm install
        ```
    3.  Start the development server:
        ```bash
        npm run dev
        ```
    The application will typically be accessible at `http://localhost:5173`.

### 3. Hooks Rev/Assignment (Weather Info App)
An assignment project focused on practicing React Hooks and displaying weather information.

* **Technology Stack**: React, Vite, Tailwind CSS, `framer-motion`, `styled-components`.
* **Features**:
    * Displays a rotating text in the heading for different weather conditions.
    * Allows users to search for weather information by state name.
    * Presents weather data (temperature, condition, humidity, wind, AQI, real feel) in a visually appealing card format.
    * Uses a predefined `fakeWeatherData` array for demonstration purposes.
* **How to Run**:
    1.  Navigate to the `Hooks Rev/Assignment` directory:
        ```bash
        cd Hooks Rev/Assignment
        ```
    2.  Install dependencies:
        ```bash
        npm install
        ```
    3.  Start the development server:
        ```bash
        npm run dev
        ```
    The application will typically be accessible at `http://localhost:5173`.

## General Setup (for all projects)

Each project in this repository is a separate React application configured with Vite. To run any of them:

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd mern-learning-projects
    ```
2.  **Navigate to the desired project directory** (e.g., `Projects/Todo App`, `Projects/Social_Media_App`, or `Hooks Rev/Assignment`).
3.  **Install dependencies** within that project's directory:
    ```bash
    npm install
    # or yarn install
    ```
4.  **Start the development server**:
    ```bash
    npm run dev
    # or yarn dev
    ```

Each project's `README.md` provides more specific details about its functionality and how to expand its ESLint configuration.
