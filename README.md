# Mobile Financial Service (MFS) Application

Live link : 

## Overview

This is a basic Mobile Financial Service (MFS) application, inspired by platforms like bKash or Nagad, built using React.js, Node.js, Express.js, and MongoDB. The application supports essential features such as user authentication, money transfers, cash-outs, balance inquiries, and transaction history management. The system supports three roles: User, Agent, and Admin, each with distinct functionalities.

## Table of Contents

- [Features](#features)
  - [User](#user)
  - [Agent](#agent)
  - [Admin](#admin)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Security](#security)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

### User
- **Registration:** Users can register by providing Name, 5-digit PIN, Mobile Number, and Email. The account will initially be in a pending state, awaiting admin approval.
- **Secure Login:** Users can log in using their Mobile Number/Email and PIN. JWT is used for authentication, and PINs are securely hashed.
- **Send Money:** Users can send money to other users. Transactions over 100 Taka incur a 5 Taka fee. A minimum transaction amount of 50 Taka is required.
- **Cash-Out:** Users can cash out through an agent. A 1.5% fee is charged, deducted from the user's balance.
- **Cash-In:** Users can cash in through agents without any fee. Agents approve cash-in requests.
- **Balance Inquiry:** Users can check their account balances anytime.
- **Transaction History:** Users can view their last 10 transactions.

### Agent
- **Registration:** Agents can register by providing Name, 5-digit PIN, Mobile Number, and Email. The account will initially be in a pending state, awaiting admin approval.
- **Secure Login:** Agents can log in using their Mobile Number/Email and PIN. JWT is used for authentication, and PINs are securely hashed.
- **Transaction Management:** Agents can manage cash-in and cash-out requests from users.
- **Balance Inquiry:** Agents can check their account balances anytime.
- **Transaction History:** Agents can view their last 20 transactions.

### Admin
- **Secure Login:** Admins can log in using their Mobile Number/Email and PIN. JWT is used for authentication.
- **User Management:** Admins can view all users, search for specific users, and manage user accounts (activate or block accounts).
- **System Monitoring:** Admins can view all transactions within the system.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt.js for PIN hashing
- **Hosting:** Surge (Frontend), MongoDB Atlas (Database) , Vercel (BackEnd) 

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/mfs-app.git
   cd mfs-app
  

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add the following environment variables:

   ```bash
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application:**
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Register:** Create a user or agent account by providing the required information.
2. **Login:** Use your credentials to log in.
3. **Explore Features:** As a user, you can send money, cash out, check your balance, and view transaction history. As an agent, you can manage transactions and view your transaction history. Admins can manage users and monitor the system.

## API Endpoints

- **POST /api/auth/register:** Register a new user or agent.
- **POST /api/auth/login:** Authenticate and log in a user, agent, or admin.
- **GET /api/users/balance:** Get the current balance for a logged-in user or agent.
- **POST /api/transactions/send-money:** Send money to another user.
- **POST /api/transactions/cash-out:** Request a cash-out through an agent.
- **POST /api/transactions/cash-in:** Request a cash-in through an agent.
- **GET /api/transactions/history:** Get the transaction history for a logged-in user or agent.
- **GET /api/admin/users:** Admin endpoint to view and manage all users.
- **GET /api/admin/transactions:** Admin endpoint to view all transactions.

## Security

- **JWT Authentication:** All endpoints are protected with JWT authentication.
- **Password Hashing:** User and agent PINs are securely hashed using bcrypt.js.
- **Role-Based Access Control:** Different roles have access to specific functionalities.

## Future Improvements

- **Mobile App Version:** Develop a mobile app version using React Native.
- **Advanced Transaction Analytics:** Provide users and agents with advanced analytics on their transactions.
- **Multi-Currency Support:** Add support for multiple currencies.
- **Notification System:** Implement email or SMS notifications for transactions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

This `README.md` provides a comprehensive guide for your MFS application, detailing features, setup instructions, usage, API endpoints, and more. You can modify or expand upon this content as needed for your specific project.
