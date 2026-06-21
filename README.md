# Event Registration Management System

## 📌 Project Overview

The Event Registration Management System is a full-stack web application developed using the MERN Stack. It enables organizers to manage attendee registrations for events efficiently. Users can create, view, update, and delete registration records through a simple and responsive interface.

---

## 🚀 Features

### Registration Management

* Add new event registrations
* View all registered attendees
* Update attendee details
* Delete registrations
* Search registrations by name, contact number, or payment status

### Payment Status Management

* Mark registrations as Paid or Unpaid
* Display payment status using visual badges

### User Interface

* Responsive design using Bootstrap
* Navigation bar and footer components
* Confirmation modal before deletion

---

## 🛠️ Technology Stack

### Frontend

* React.js
* React Router DOM
* Bootstrap 5
* Vite

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose ODM

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📂 Project Structure

event_management/

├── frontend/

│ ├── src/

│ ├── public/

│ ├── package.json

│ └── vite.config.js

│

├── backend/

│ ├── routes/

│ ├── models/

│ ├── database/

│ ├── views/

│ ├── app.js

│ └── package.json

│

└── README.md

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Aurenox/event_management.git
cd event_management
```

### Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
MONGODB_URI=your_mongodb_connection_string
```

Run Backend

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Database Schema

### Registration

| Field         | Type   |
| ------------- | ------ |
| username      | String |
| ticketCount   | Number |
| contact       | String |
| paymentStatus | String |

---

## API Endpoints

### Get All Registrations

```http
GET /Registration
```

### Create Registration

```http
POST /Registration
```

### Update Registration

```http
PUT /Registration/:id
```

### Delete Registration

```http
DELETE /Registration/:id
```

---

## Future Enhancements

* User Authentication
* Event Creation Module
* Email Notifications
* Ticket Generation
* Dashboard Analytics
* Export Registrations to Excel/PDF

---

## Author

**Saurav B**

B.Tech Computer Science and Engineering

APJ Abdul Kalam Technological University (KTU)

---

## License

This project is developed for educational and academic purposes.
