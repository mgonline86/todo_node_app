// Import the mongoose module
import mongoose from "mongoose";

// // Set up default mongoose connection
// const mongoDB = process.env.MONGODB_URL;


// constconnect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// // Get the default connection
// const db = connection;

// // Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

const connectMongo = async () => mongoose.connect(process.env.MONGODB_URL);

export default connectMongo;
