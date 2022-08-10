import productSchema from "../../../utils/models/Product";
import connectDB from "../../../utils/db";

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const newProduct = await productSchema.find({});

        return res.status(200).json({ data: newProduct });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;
  }
};

export default connectDB(handler);
