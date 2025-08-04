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

### Desktop Interface
<img width="1893" alt="Main Dashboard" src="https://github.com/user-attachments/assets/cd736422-5057-4653-9208-d65c9b3c1365" />

*Main dashboard with image generation interface*

<img width="1338" alt="Image Gallery View" src="https://github.com/user-attachments/assets/7ca03ea7-684a-4ee6-8eb5-417e3d1fca1e" />

*Generated images gallery and management*

<img width="1338" alt="User Profile" src="https://github.com/user-attachments/assets/9d2688ee-808b-4f4a-8d23-2dc7a844eb10" />

*User profile and credit management*

<img width="1904" alt="Payment Integration" src="https://github.com/user-attachments/assets/6b6623a7-291e-4840-a5f9-450cbc64dc32" />

*Razorpay payment integration for credit purchases*

<img width="1244" alt="Generated Image Preview" src="https://github.com/user-attachments/assets/d55db2f3-fb8d-4d5a-87be-f4992475a0c6" />

*AI-generated image preview and download*

### Mobile Interface
<img width="466" alt="Mobile Login" src="https://github.com/user-attachments/assets/55f9623d-7626-4089-814f-cd1c2bb3d58c" />

*Mobile login interface*

<img width="470" alt="Mobile Dashboard" src="https://github.com/user-attachments/assets/929ebfef-2feb-4df9-b89e-fc780faf35d3" />

*Mobile dashboard and image generation*

<img width="483" alt="Mobile Gallery" src="https://github.com/user-attachments/assets/e93b4f50-9b0e-47d8-8088-961b17f9a950" />

*Mobile image gallery view*

<img width="474" alt="Mobile Profile" src="https://github.com/user-attachments/assets/d50dc6a0-5bf3-40b3-89df-da355f15caba" />

*Mobile user profile and settings*

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
