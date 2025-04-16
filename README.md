# 🥦 GreenCart - Grocery Delivery Website  

A full-featured Grocery Delivery Web App built with the **MERN stack** and **React + Vite**.  
GreenCart allows users to browse grocery categories, add items to cart, manage addresses, and checkout using **Cash on Delivery (COD)** or **Stripe** online payments.  
A separate **Seller Dashboard** enables sellers to manage products and view orders.

---

## 🌐🚀 **LIVE DEMO**

### 🔗 [👉 https://greencart-frontend.vercel.app/](https://greencart-frontend.vercel.app/)  
🔑 **Seller Login:** [https://greencart-frontend.vercel.app/seller](https://greencart-frontend.vercel.app/seller)

---

## 🎯 Features  

### 🧑‍🍳 For Users:
✅ Login / Signup  
✅ Browse products by category  
✅ Add and update items in the cart  
✅ Add, update, or switch delivery address before checkout  
✅ Choose between COD and online payment (via Stripe)  
✅ Responsive UI and smooth UX  

### 🛒 For Sellers:
✅ Login with admin credentials  
✅ Add new products  
✅ Update stock quantities  
✅ View all user orders

---

## 🧑‍💻 Tech Stack  

| Layer       | Technologies Used                          |
|-------------|---------------------------------------------|
| **Frontend**| React + Vite, Tailwind CSS                  |
| **Backend** | Node.js, Express.js                         |
| **Database**| MongoDB + Mongoose                          |
| **Auth**    | JSON Web Tokens (JWT)                       |
| **Payments**| Stripe API                                  |
| **Images**  | Cloudinary                                  |
| **State**   | React Context API                           |
| **Deployment** | Vercel |

---

## 📁 Project Folder Structure  

```
GREEN_CART/
├── client/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── vercel.json
│   └── vite.config.js
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── .gitignore
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── vercel.json
```

---

## 🛠️ Setup & Installation  

### ✅ Prerequisites:  
- Node.js (Latest LTS)  
- MongoDB URI (Local/Cloud)  
- Cloudinary Account  
- Stripe Account  

### 📦 Clone the Repository  

```bash
git clone https://github.com/omrajkamat68/Grocery_Delivery_Website.git
cd Grocery_Delivery_Website
```

### 🔧 Install Dependencies  

```bash
# Client setup
cd client
npm install

# Server setup
cd ../server
npm install
```

### 📁 Environment Variables  

#### `client/.env`

```env
VITE_CURRENCY = '$'
VITE_BACKEND_URL = "http://localhost:4000"
```

#### `server/.env`

```env
JWT_SECRET = ""
NODE_ENV = "development"

# Admin Credentials
SELLER_EMAIL = "seller@greencart.com"
SELLER_PASSWORD = "green@cart#"

# MongoDB
MONGODB_URI = "your_mongodb_connection_string"

# Cloudinary
CLOUDINARY_CLOUD_NAME = 'your_cloud_name'
CLOUDINARY_API_KEY = 'your_api_key'
CLOUDINARY_API_SECRET = 'your_api_secret'

# Stripe
STRIPE_PUBLISHABLE_KEY = 'your_publishable_key'
STRIPE_SECRET_KEY = 'your_secret_key'
STRIPE_WEBHOOK_SECRET = 'your_webhook_secret'
```

---

## 🚦 Run the App  

### ▶️ Start Backend  

```bash
cd server
npm run server
```

### ▶️ Start Frontend  

```bash
cd ../client
npm run dev
```

---
