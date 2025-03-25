# Real-Time Chat Application

A modern, feature-rich chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for real-time communication. This application provides a seamless chatting experience with features like real-time messaging, user presence, image sharing, and theme customization.

## 🌟 Features

- **Real-time Messaging**: Instant message delivery using Socket.IO
- **Authentication System**: Secure user authentication with JWT
- **User Presence**: Real-time online/offline status indicators
- **Image Sharing**: Support for image uploads with Cloudinary integration
- **Theme Customization**: Multiple theme options using DaisyUI
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Profile Management**: User profile updates with avatar support

## 🚀 Technologies Used

### Frontend
- **React.js** (v18.3.1) - UI library
- **Vite** (v6.0.5) - Build tool and development server
- **Tailwind CSS** (v3.4.13) - Utility-first CSS framework
- **DaisyUI** (v4.12.23) - Component library for Tailwind
- **Socket.IO Client** (v4.8.1) - Real-time client
- **Zustand** (v5.0.3) - State management
- **React Router DOM** (v7.1.3) - Client-side routing
- **Lucide React** (v0.474.0) - Icon library
- **React Hot Toast** (v2.5.1) - Toast notifications
- **Axios** (v1.7.9) - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** (v4.21.2) - Web framework
- **MongoDB** (v6.12.0) - Database
- **Mongoose** (v8.9.5) - MongoDB ODM
- **Socket.IO** (v4.8.1) - Real-time server
- **JWT** (jsonwebtoken v9.0.2) - Authentication
- **Bcrypt.js** (v2.4.3) - Password hashing
- **Cloudinary** (v2.5.1) - Cloud image storage
- **Cookie Parser** (v1.4.7) - Cookie handling
- **CORS** (v2.8.5) - Cross-Origin Resource Sharing
- **Dotenv** (v16.4.7) - Environment variable management


## 📝 Project Structure

```
chat-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── lib/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── middleware/
    │   └── lib/
    ├── package.json
    └── index.js
```

## 🔒 Authentication Flow

1. User signs up/logs in through the authentication form
2. Backend validates credentials and generates JWT
3. JWT is stored in HTTP-only cookie
4. Protected routes check JWT validity
5. Socket.IO connection authenticated using user ID

## 🎨 Theme Customization

The application uses DaisyUI themes, offering multiple color schemes:
- Light/Dark modes
- Custom themes (Coffee, Dracula, etc.)
- Easy theme switching through settings

## 💬 Real-time Features

- Instant message delivery
- Typing indicators
- Online/offline status updates
- Real-time user presence
- Image sharing capabilities

## 🔐 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- HTTP-only cookies
- Protected API routes
- CORS configuration
- XSS protection
- CSRF protection

## 🚀 Deployment

The application is ready for deployment on platforms like:
- Frontend: Vercel, Netlify
- Backend: Render, Heroku
- Database: MongoDB Atlas
- Image Storage: Cloudinary

## 📱 Mobile Responsiveness

The application is fully responsive and works seamlessly on:
- Desktop browsers
- Tablets
- Mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Shai Nachum
- GitHub: https://github.com/ShaiNachum

---

Made with ❤️ using the MERN stack and Socket.IO
