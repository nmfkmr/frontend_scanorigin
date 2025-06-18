# ScanOrigin Matrix Dashboard

A web-based dashboard for inspection management of baggage scanners in a matrix environment, developed as part of an internship project at OSI Systems.

## Features

- **Modern Frontend:** Built with React.js and Tailwind CSS for a responsive, user-centric UI.
- **Multi-Page Navigation:** Seamless routing using React Router.
- **Modular Components:** Includes Scanner Statistics, Matrix Environment, Follow-On Actions, Station Mapping, Operator Alarm Settings, and more.
- **RESTful API Integration:** Communicates with a Node.js + Express backend.
- **Database Management:** Handles data storage and retrieval with MySQL.
- **Contemporary UX:** Designed for accessibility and usability in operational environments.

## Project Structure

```
scanorigin-dashboard/
├── backend/         # Node.js + Express API and database models
├── frontend/        # React.js app with Tailwind CSS
├── README.md
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MySQL

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nmfkmr/backend_scanorigin.git
   cd scanorigin-dashboard
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   npm install react-router-dom
   ```

4. **Configure environment variables:**
   - Copy `.env.example` to `.env` in both `backend` and `frontend` folders and update with your settings.

5. **Set up the MySQL database:**
   - Create a database and update credentials in the backend `.env` file.
   - Run migrations or import provided SQL schema if available.

### Running the Project

- **Start the backend:**
  ```bash
  cd backend
  npm server.js
  ```

- **Start the frontend:**
  ```bash
  cd ../frontend
  npm run dev
  ```

- The frontend will typically run on [http://localhost:3000](http://localhost:3000) and the backend on [http://localhost:5000](http://localhost:5000).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE) (or specify your license)

## Acknowledgements

- Developed as part of an internship at OSI Systems.
- Special thanks to mentors and team members for guidance and support.
