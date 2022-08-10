import mongoose from "mongoose";

const connection = {};

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return handler(req, res);
  }

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("New Connection");
  return handler(req, res);
};

const disconnectDb = async () => {
  if (mongoose.connections[0].readyState) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("Not Disconnected");
    }
  }
};

function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

export default connectDb;
export { disconnectDb, convertDocToObj };
