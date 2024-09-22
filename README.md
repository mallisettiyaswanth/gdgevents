# GDG Events App

Welcome to the GDG Events App! This application allows users to manage events organized by Google Developer Groups (GDGs). Users can add events, view a list of upcoming events, and find details about each event.

## Features

- Add new events with details such as name, date, venue, description, and organizer.
- View a list of all events in a card format.
- Responsive design for seamless usage across devices.
- Backend server using Node.js and Express with MongoDB to store event data.

---

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB
- **Database:** MongoDB
- **State Management:** React Hooks
- **Date Picker:** react-datepicker
- **Icons:** react-icons

---

## Getting Started

To get started with the GDG Events App, you need to set up both the backend and frontend servers.

### Backend Setup

1. **Clone the Repository**

   Open your terminal and clone the repository:

   ```bash
   git clone https://github.com/yourusername/gdg-events-app.git
   cd gdg-events-app/backend
   ```

2. **Install Dependencies**

   Ensure you have Node.js and npm installed. Then install the required packages:

   ```bash
   npm install
   ```

3. **Setup Environment Variables**

   Create a `.env` file in the backend directory with the following contents:

   ```plaintext
   PORT=6461
   MONGODB_URI=mongodb://<username>:<password>@localhost:27017/gdgEvents
   ```

   Replace `<username>` and `<password>` with your MongoDB credentials. If you are using MongoDB locally without authentication, the URI can simply be `mongodb://localhost:27017/gdgEvents`.

4. **Run the Server**

   Start the backend server:

   ```bash
   npm start
   ```

   You should see a message indicating that the server is running on `http://localhost:6461`.

### Frontend Setup

1. **Clone the Frontend Repository**

   Open a new terminal window and navigate back to the main project directory:

   ```bash
   cd gdg-events-app/frontend
   ```

2. **Install Dependencies**

   Ensure you have Node.js and npm installed, then install the frontend dependencies:

   ```bash
   npm install
   ```

3. **Run the Frontend Application**

   Start the React development server:

   ```bash
   npm start
   ```

   Your frontend application should now be running on `http://localhost:3000`.

---

## Usage

1. **Adding Events**

   Navigate to the "Add Event" page to fill out the event details and submit the form. This information will be sent to the backend server and saved in the MongoDB database.

2. **Viewing Events**

   The home page displays all events in a card format. Click on an event to view more details.

---

## API Endpoints

Here are the main API endpoints for interacting with the backend server:

- **GET /events**
  - Fetches a list of all events.
  - **Response:**
    ```json
    [
      {
        "eventName": "Sample Event",
        "fromDate": "2024-10-01T00:00:00.000Z",
        "toDate": "2024-10-01T00:00:00.000Z",
        "venue": "Sample Venue",
        "description": "Description of the event",
        "organizer": "Organizer Name"
      },
      ...
    ]
    ```

- **POST /events**
  - Adds a new event to the database.
  - **Request Body:**
    ```json
    {
      "eventName": "New Event",
      "fromDate": "2024-10-01T00:00:00.000Z",
      "toDate": "2024-10-01T00:00:00.000Z",
      "venue": "Event Venue",
      "description": "Event Description",
      "organizer": "Organizer Name"
    }
    ```
  - **Response:**
    ```json
    {
      "message": "Event added successfully!"
    }
    ```

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Thanks to the open-source community for the resources and libraries that made this project possible.
- Special thanks to the GDG community for inspiring this application.
