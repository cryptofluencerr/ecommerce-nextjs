// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import connectDb, { disconnectDb } from "../../utils/db";

const handler = async (req, res) => {
  // await disconnectDb();
  res.status(200).json({ name: "John Doe" });
};

export default connectDb(handler);
