# Funneh.LOL

A social media platform for sharing funny posts with images. Built with Node.js, Express, and MongoDB.

## Features

- 📸 Upload images with posts
- 👤 User posts with author information
- 🏷️ Community-based categorization
- 💬 Like and comment system (planned)
- 🔍 Search and discover posts (planned)

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **File Upload**: Multer
- **Frontend**: HTML, CSS, JavaScript (basic)

## Project Structure

```
funneh.lol/
├── app.js                 # Main application file
├── config/
│   └── db.js             # Database connection
├── controllers/
│   └── posts.controller.js # Post-related logic
├── middleware/
│   └── upload.js         # File upload middleware
├── models/
│   └── postModel.js      # Post data model
├── routes/
│   └── posts.js          # API routes
├── views/
│   ├── 404.html          # 404 error page
│   └── upload.html       # Upload form (if implemented)
├── public/               # Static files
├── images/               # Uploaded images
└── package.json          # Dependencies and scripts
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/Abdelwahab-Ibrahim/Funneh.LOL>
   cd funneh.lol
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   - Make sure MongoDB is running on `mongodb://localhost:27017`
   - The app will create a database called `LOL_DB`

4. **Start the server**
   ```bash
   # Development mode (with nodemon)
   npm run dev

   # Production mode
   npm start

   # Or directly with node
   node app.js
   ```

The server will run on `http://localhost:3000`

## Usage

### API Endpoints

#### Create a Post
- **URL**: `POST /upload`
- **Content-Type**: `multipart/form-data`
- **Body**:
  - `image` (file): Image file (required)
  - `authorId` (string): Author ID (required)
  - `username` (string): Username (required)
  - `content` (string): Post content (required)
  - `community` (string): Community name (optional, defaults to "general")

**Example using curl:**
```bash
curl -X POST http://localhost:3000/upload \
  -F "authorId=user123" \
  -F "username=john_doe" \
  -F "content=This is a funny meme!" \
  -F "community=memes" \
  -F "image=@/path/to/image.jpg"
```

**Response:**
```json
{
  "message": "Post created successfully",
  "post": {
    "authorId": "user123",
    "username": "john_doe",
    "content": "This is a funny meme!",
    "imageUrl": "/images/uuid-generated-filename.jpg",
    "community": "memes",
    "likesCount": 0,
    "commentsCount": 0,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "imagePath": "images/uuid-generated-filename.jpg"
}
```

#### Static Files
- **Images**: Served from `/images/*` path
- **Example**: `http://localhost:3000/images/uuid-filename.jpg`

## Development

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or remote connection)

### Environment Variables
Currently, the app uses hardcoded MongoDB connection. For production, consider adding environment variables:

```javascript
// In config/db.js
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
```

### File Upload Configuration
- **Max file size**: 2MB
- **Allowed formats**: Images only
- **Storage**: Local `images/` directory
- **Naming**: UUID + original extension

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Future Enhancements

- [ ] User authentication and authorization
- [ ] Like and comment functionality
- [ ] Post search and filtering
- [ ] User profiles
- [ ] Real-time notifications
- [ ] Image optimization and CDN
- [ ] Admin panel
- [ ] API documentation with Swagger
