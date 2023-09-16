### **ByteByByte Blog**

Welcome to ByteByByte Blog - a modern blogging platform built for tech enthusiasts, developers, and writers. Hosted at **[bytebybyte-blog.com](http://bytebybyte-blog.com/)**, this platform offers an intuitive interface, seamless user experience, and powerful features tailored for the tech community.

### Features:

1. **User Authentication**: Sign in using your local account or with third-party providers like Google and GitHub.
2. **Rich Text Editor**: Write, edit, and publish articles with a markdown-based editor.
3. **Comment System**: Engage with the community by leaving comments on articles.
4. **Personalized Dashboard**: Manage your articles, drafts, and account settings in one place.
5. **Caching**: Experience faster load times with advanced caching mechanisms.
6. **Image Upload**: Enhance your articles with image uploads and processing.

### Technologies Used:

- **Frontend**: Next.js with Bootstrap and React-Bootstrap for UI components.
- **Backend**: Express using TypeScript for a structured and type-safe codebase.
- **Database**: MongoDB for storing user data and articles.
- **Caching**: Redis for session management and caching.
- **Authentication**: Passport with strategies for local, Google, and GitHub.

### Prerequisites:

- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- Redis (v6 or higher)

### Getting Started:

### **Clone the repository:**

```bash
git clone https://github.com/light-pro-grammer/bytebybyte-blog.git
cd bytebybyte-blog-main
```

### **Install dependencies:**

```bash
# For backend
cd backend && npm install

# For frontend
cd frontend && npm install
```

### **Setting up environment variables:**

- Copy **`.env.example`** to **`.env`** in both frontend and backend directories.
- Fill in your MongoDB and Redis connection details, authentication keys, and any other required environment variables.

### **Running locally:**

```bash
# For backend
npm start

# For frontend
npm run dev
```

### Deployment:

Please refer to official deployment guides for deploying Next.js applications and Node.js servers on your desired platform.

### Contributing:

We welcome contributors! If you find any bugs or wish to add features, please create an issue first. Pull requests should be made to the **`develop`** branch. Make sure to follow the code style and write tests if necessary.

### License:

MIT

### Acknowledgments:

- Thanks to all contributors and testers who have helped shape ByteByByte Blog.
- Special shoutout to the open-source libraries and tools used in this project.
