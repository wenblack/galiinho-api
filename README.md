# 🛒 Galinho API

Backend API for an e-commerce application built with **Node.js**, **Express**, **TypeScript**, **Prisma ORM**, and **Zod**.

This project provides a complete structure for managing:

* 👤 Users (authentication & management)
* 🛍️ Products
* 📦 Orders

---

# 🚀 Tech Stack

* **Node.js**
* **Express**
* **TypeScript**
* **Prisma ORM**
* **SQLite (development)**
* **PostgreSQL (production)**
* **Zod (validation)**
* **JWT (authentication)**
* **Bcrypt (password hashing)**

---

# 📂 Project Structure

```bash
src/
 ├── config/
 │   └── prisma.ts          # Prisma client configuration
 │
 ├── middlewares/
 │   └── auth.middleware.ts # JWT authentication middleware
 │
 ├── modules/
 │   ├── auth/
 │   │   ├── auth.controller.ts
 │   │   ├── auth.routes.ts
 │   │   └── auth.schema.ts
 │   │
 │   ├── users/
 │   │   ├── users.controller.ts
 │   │   └── users.routes.ts
 │   │
 │   ├── products/
 │   │   ├── products.controller.ts
 │   │   ├── products.routes.ts
 │   │   └── product.schema.ts
 │   │
 │   └── orders/
 │       ├── orders.controller.ts
 │       └── orders.routes.ts
 │
 ├── routes/
 │   └── index.ts           # Main routes
 │
 ├── app.ts                 # Express app setup
 └── server.ts              # Server entry point
```

---

# ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/wenblack/galinho.git
cd galinho/api
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Configure environment variables

Create a `.env` file:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your_secret_key"
```

---

### 4. Run database migrations

```bash
npx prisma migrate dev --name init
```

---

### 5. Start the server

```bash
npm run dev
```

Server will run at:

```bash
http://localhost:3333
```

---

# 🔐 Authentication

This API uses **JWT (JSON Web Token)**.

### Login response:

```json
{
  "token": "your_jwt_token"
}
```

### Protected routes require:

```bash
Authorization: Bearer YOUR_TOKEN
```

---

# 📌 API Endpoints

## 🔑 Auth

| Method | Route              | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Create new user   |
| POST   | /api/auth/login    | Authenticate user |

---

## 👤 Users

| Method | Route      | Protected | Description    |
| ------ | ---------- | --------- | -------------- |
| GET    | /api/users | ✅         | List all users |

---

## 🛍️ Products

| Method | Route         | Protected | Description    |
| ------ | ------------- | --------- | -------------- |
| POST   | /api/products | ✅         | Create product |
| GET    | /api/products | ❌         | List products  |

---

## 📦 Orders

| Method | Route       | Protected | Description  |
| ------ | ----------- | --------- | ------------ |
| POST   | /api/orders | ✅         | Create order |

---

# 📊 Database

Managed with **Prisma ORM**.

### Main models:

* User
* Product
* Order
* OrderItem

To open database UI:

```bash
npx prisma studio
```

---

# 🔒 Security

* Passwords hashed with **bcrypt**
* Authentication via **JWT**
* Input validation using **Zod**

---

# 🧠 Future Improvements

* ✅ Pagination
* ✅ Role-based authorization (admin/user)
* ✅ Product stock validation
* ✅ Swagger documentation
* ✅ Docker + PostgreSQL deployment

---

# 👨‍💻 Author

Developed by **Wender Barbosa**

---

# 📄 License

This project is licensed under the MIT License.
