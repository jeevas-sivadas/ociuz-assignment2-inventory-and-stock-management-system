Inventory & Stock Management System

A web-based Inventory & Stock Management System built using the MERN stack. The application helps businesses manage products, categories, suppliers and stock movements while maintaining accurate inventory records.

Project Overview

The Inventory & Stock Management System provides a centralized platform to manage inventory operations efficiently.

It supports two user roles — Admin and Staff — with role-based access and permissions.

Features

1. Authentication & User Management

Secure login and logout.

JWT-based authentication.

Admin and Staff roles.

Admin can create, update and deactivate Staff accounts.

Protected routes and role-based authorization.

2. Dashboard

Total products, categories and suppliers.

Total available stock.

Low-stock product overview.

Recent stock transactions.

Stock movement summary.

3. Category Management

Add, view, update and delete categories.

Associate products with categories.

Prevent deletion of categories currently in use.

4. Product Management

Create, view, update and manage products.

Product name, SKU, description and price.

Category association.

Current stock and minimum stock level.

Unique SKU validation.

Product search and filtering.

5. Supplier Management

Create, view, update and manage suppliers.

Supplier name, contact person, phone, email and address.

Select suppliers during Stock In.

View supplier-wise Stock In history.

6. Stock Management

Stock In

Select a product and supplier.

Enter received quantity.

Automatically increase available stock.

Stock Out

Select a product.

Enter outgoing quantity.

Automatically decrease available stock.

Prevent stock from becoming negative.

Stock Adjustment

Admin-only stock correction.

Record adjustment reason.

Maintain previous and updated stock quantities.

7. Stock Transaction History

Record Stock In, Stock Out and Adjustments.

Maintain product, transaction type, quantity, date and user.

Store previous and updated stock quantities.

Search and filter transaction records.

8. Reports & Search

Search products by name or SKU.

Filter by category and stock status.

Sorting and pagination.

Low-stock reports.

User Roles

Feature

Admin

Staff

Login and Logout

✓

✓

View Dashboard

✓

✓

Manage Staff

✓

✗

Manage Categories

✓

✗

Manage Products

✓

✗

Manage Suppliers

✓

✗

View Products and Stock

✓

✓

Stock In

✓

✓

Stock Out

✓

✓

Stock Adjustment

✓

✗

View Transaction History

✓

✓

Access Reports

✓

✗

Technology Stack

Frontend

React.js

React Router DOM

Tailwind CSS

Axios

TanStack Query

Zustand

Backend

Node.js

Express.js

MongoDB

Mongoose

JSON Web Token (JWT)

bcrypt

Development Tools

Git and GitHub

Postman

MongoDB Atlas

Visual Studio Code

Project Structure

ociuz-assignment2-inventory-management/
│
├── client/                 # React frontend
│
├── server/                 # Node.js and Express backend
│
├── .gitignore
└── README.md

Installation & Setup

Prerequisites

Node.js

npm

MongoDB Atlas account

Git

1. Clone the Repository

git clone <your-repository-url>

2. Frontend Setup

cd client
npm install
npm run dev

3. Backend Setup

Open another terminal:

cd server
npm install
npm run dev

4. Environment Variables

Create a .env file inside the server directory.

PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret

Never commit your .env file or expose your database credentials.

Development Timeline

Week

Modules

Planned Work

Week 1

Authentication, User Management, Categories

Project setup, login, roles and category CRUD

Week 2

Products and Suppliers

Product and supplier management

Week 3

Stock Management and Transactions

Stock In, Stock Out, Adjustments and transaction history

Week 4

Dashboard, Reports and Finalization

Dashboard, reports, testing and deployment

Important Business Rules

Every product must have a unique SKU.

Stock In requires a supplier.

Stock Out cannot exceed available stock.

Stock quantity cannot become negative.

Only Admin can perform stock adjustments.

Every stock movement must create a transaction record.

Previous and updated stock quantities must be maintained.

Categories currently associated with products cannot be deleted.

Project Objective

To develop a functional inventory management application that demonstrates practical knowledge of the MERN stack, REST API development, database design, authentication, authorization, reusable React components and accurate inventory management.

Project Status

🚧 Currently Under Development

Project: Inventory & Stock Management System
Stack: MERN
Duration: 4 Weeks