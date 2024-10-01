Here's a step-by-step guide to setting up an Express.js app with MongoDB (using Mongoose) that includes environment setup, GET/POST requests, and an introduction to Mongoose schemas.

### **1. Set Up the Project**

#### Step 1: Initialize the Project
- First, create a new directory for your project and navigate into it.

```bash
mkdir express-mongo-tutorial
cd express-mongo-tutorial
```

- Initialize the project using npm:

```bash
npm init -y
```

#### Step 2: Install Dependencies
- You'll need to install `express`, `mongoose`, and `dotenv` (for environment variables):

```bash
npm install express mongoose dotenv
```

- Additionally, install `nodemon` as a development dependency to automatically restart the server on changes:

```bash
npm install --save-dev nodemon
```

#### Step 3: Set Up Project Structure
- Create the following folders and files in the root of your project:

```
express-mongo-tutorial/
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── .env
├── .gitignore
├── app.js
└── package.json
```

#### Step 4: Configure `.gitignore` and Environment Variables
- In the `.gitignore` file, add:

```
node_modules
.env
```

- In the `.env` file, add your MongoDB connection string (replace `<your-mongo-uri>` with your actual MongoDB URI):

```
MONGO_URI=<your-mongo-uri>
PORT=5000
```

### **2. Create the Express App**

#### Step 5: Set Up `app.js`
This is the entry point of your application.

```javascript
// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import routes
app.use('/api/users', userRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### Step 6: Add `nodemon` Script
To run the server with `nodemon`, update the `scripts` section in `package.json`:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

You can now run the server in development mode with:

```bash
npm run dev
```

### **3. Create a Mongoose Schema**

#### Step 7: Create `User` Schema
In the `models/` directory, create a file called `User.js`:

```javascript
// models/User.js
const mongoose = require('mongoose');

// Define the schema for a User
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
```

This schema defines a basic user with a name, email, and age.

### **4. Create Routes for API Requests**

#### Step 8: Create Routes for Users
In the `routes/` directory, create a file called `userRoutes.js`:

```javascript
// routes/userRoutes.js
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// @route   GET /api/users
// @desc    Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/users
// @desc    Create a new user
router.post('/', async (req, res) => {
  const { name, email, age } = req.body;

  // Create a new user object
  const newUser = new User({
    name,
    email,
    age,
  });

  try {
    // Save the user to the database
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
```

### **5. Test the API**

#### Step 9: Run the Server
Ensure that your MongoDB instance is running. Then, run the server:

```bash
npm run dev
```

#### Step 10: Use Postman or cURL to Test the API

- **Get all users:**
  
  ```
  GET http://localhost:5000/api/users
  ```

- **Create a new user:**
  
  ```
  POST http://localhost:5000/api/users
  Content-Type: application/json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
  }
  ```

If everything is set up correctly, you should be able to fetch and create users in your MongoDB database.

---