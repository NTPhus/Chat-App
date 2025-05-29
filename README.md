# 💬 Realtime Chat Website

> Đồ án cuối kỳ môn **Công nghệ Lập Trình Ứng Dụng**  
> Trường Đại học Quy Nhơn – Khoa Công Nghệ Thông Tin  
> Sinh viên thực hiện: **Nguyễn Thiên Phú** – Lớp 45A

---

## 📌 Mô tả

Đây là ứng dụng **chat thời gian thực (realtime)** xây dựng với các công nghệ hiện đại như **React**, **Node.js**, **Socket.IO**, và **MongoDB**. Người dùng có thể đăng nhập, trò chuyện trực tuyến 1:1, gửi tệp và xem lịch sử tin nhắn.

---

## 🚀 Tính năng

- 🔐 Đăng ký & Đăng nhập (có xác thực JWT)
- 💬 Gửi và nhận tin nhắn realtime (Socket.IO)
- 📂 Gửi hình ảnh, emoji và file
- 🟢 Trạng thái online/offline người dùng
- 🕘 Lưu trữ và hiển thị lịch sử trò chuyện
- 🧑‍💻 Giao diện hiện đại, hỗ trợ responsive

---

## 🛠️ Công nghệ sử dụng

### 📦 Backend
- Node.js + Express
- Socket.IO
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- Bcrypt
- Multer
- Dotenv

### 💻 Frontend
- React
- Vite
- Axios
- Tailwind CSS
- React Router DOM

---

## 📁 Cấu trúc thư mục

realtime-chat/
├── client/ # Frontend (React + Vite)
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.jsx
│ └── vite.config.js
│
├── server/ # Backend (Node.js + Express)
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ └── index.js
│
├── .env
└── README.md


---

## ⚙️ Cài đặt & chạy ứng dụng

### 1. Clone project
git clone https://github.com/[yourusername]/realtime-chat.git
cd realtime-chat
2. Cài đặt backend
bash
Sao chép
Chỉnh sửa
cd server
npm install
3. Cài đặt frontend
bash
Sao chép
Chỉnh sửa
cd ../client
npm install
4. Thiết lập biến môi trường
Tạo file .env trong thư mục server/ với nội dung:

env
Sao chép
Chỉnh sửa
PORT=5000
MONGO_URI=mongodb://localhost:27017/realtime-chat
JWT_SECRET=supersecretkey
5. Chạy ứng dụng
Chạy backend

bash
Sao chép
Chỉnh sửa
cd server
npm run dev
Chạy frontend

bash
Sao chép
Chỉnh sửa
cd ../client
npm run dev
