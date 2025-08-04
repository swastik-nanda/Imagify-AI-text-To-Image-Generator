# Imagify | AI Image Generator

A secure, credit-based AI image generation platform that transforms text prompts into high-fidelity visuals using advanced AI technology.

## 🌟 Features

- **AI-Powered Image Generation**: Transform text prompts into stunning visuals using the Clipdrop API
- **Credit-Based System**: Supports up to 100+ images per day per user
- **Secure Payment Processing**: Integrated Razorpay for seamless credit purchases
- **User Authentication**: Robust authentication protocols to protect user data
- **Image Management**: Easy creation, management, and download of generated images
- **Intuitive Interface**: User-friendly design for effortless image generation

## 📁 Project Structure

```
Ai Text to Image Proj/
├── .trunk/                 # Trunk configuration
├── .vscode/                # VS Code settings
├── backend/                # Backend server
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── .env               # Environment variables
│   ├── db.js              # Database configuration
│   ├── index.js           # Server entry point
│   └── package.json       # Backend dependencies
├── frontend/              # React frontend
│   ├── dist/              # Production build
│   ├── public/            # Static assets
│   ├── src/               # Source code
│   │   ├── assets/        # Images, icons, etc.
│   │   ├── components/    # React components
│   │   ├── context/       # React context providers
│   │   ├── pages/         # Page components
│   │   ├── App.jsx        # Main App component
│   │   ├── index.css      # Global styles
│   │   └── main.jsx       # React entry point
│   ├── .env               # Frontend environment variables
│   ├── index.html         # HTML template
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
└── .gitignore             # Git ignore rules
```

## 📸 Screenshots

*Screenshots will be added here to showcase the application interface and features.*

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Clipdrop API key
- Razorpay account credentials

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/imagify.git
cd "Ai Text to Image Proj"
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Set up environment variables:

**Backend (.env in backend folder):**
```env
CLIPDROP_API_KEY=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
```

**Frontend (.env in frontend folder):**
```env
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

5. Start the development servers:

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## 📱 Usage

1. **Sign Up/Login**: Create an account or log in to access the platform
2. **Purchase Credits**: Buy credits through secure Razorpay integration
3. **Generate Images**: Enter your text prompt and generate AI images
4. **Manage Images**: View, download, and organize your generated images
5. **Monitor Credits**: Track your daily usage and remaining credits

## 🛠️ Tech Stack

### Frontend
- **React**: Modern UI library with Vite for fast development
- **JavaScript (ES6+)**: Core programming language
- **CSS3**: Styling and responsive design
- **Vite**: Build tool and development server

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for user and image data
- **Mongoose**: MongoDB object modeling

### Integrations
- **Clipdrop API**: AI image generation service
- **Razorpay**: Payment gateway for credit purchases
- **JWT**: JSON Web Tokens for authentication

## 📊 Project Stats

- 30+ registered users
- 200+ successful credit purchases
- 100+ images generated per day per user capacity
- Secure data handling and user privacy protection

## 🔐 Security Features

- Secure user authentication and authorization
- Encrypted payment processing through Razorpay
- Data protection and privacy safeguards
- Secure API key management

## 🚀 Deployment

### Production Build

**Frontend:**
```bash
cd frontend
npm run build
```

**Backend:**
```bash
cd backend
npm start
```

The frontend build files will be generated in the `frontend/dist/` directory.

### Environment Setup

Ensure all production environment variables are properly configured:
- Database connection strings
- API keys and secrets
- Payment gateway credentials

## 📝 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Image Generation Endpoints
- `POST /api/images/generate` - Generate image from text prompt
- `GET /api/images` - Get user's generated images
- `DELETE /api/images/:id` - Delete specific image

### Credit Management Endpoints
- `GET /api/credits/balance` - Get user's credit balance
- `POST /api/credits/purchase` - Purchase credits via Razorpay

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:
- Create an issue in this repository
- Contact: [swastik2004nanda@gmail.com]

## 🙏 Acknowledgments

- Clipdrop API for AI image generation capabilities
- Razorpay for secure payment processing
- All contributors and users who helped improve the platform

---

**Built with ❤️ by [Swastik Nanda]**
