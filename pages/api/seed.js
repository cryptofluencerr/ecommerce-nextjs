import Product from "../../utils/models/Product";
import connectDB, { disconnectDb, convertDocToObj } from "../../utils/db";
import data from "../../utils/data";

const handler = async (req, res) => {
  const { method } = req;

  // await Product.deleteMany();
  // await Product.insertMany(data.products);
  res.send({ message: "Seeded Successfully" });

  //   switch (method) {
  //     case "GET":
  //       try {
  //         const newProduct = await Product.find({});

  //         return res.status(200).json({ data: newProduct });
  //       } catch (error) {
  //         res.status(400).json({ success: false });
  //       }

  //       break;
  //   }
};

export default connectDB(handler);
