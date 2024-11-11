// src/app.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskSchema = require('./schema/taskSchema');

dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Setup GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: taskSchema,
  graphiql: true
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


MONGO_URI=mongodb+srv://cbt123:cbt123@task-management.eknkg.mongodb.net/?retryWrites=true&w=majority&appName=task-management
PORT=5000
