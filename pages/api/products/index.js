import Product from "../../../utils/models/Product";
import db from "../../../utils/db";

const handler = async (req, res) => {
  const { method } = req;
  db.connect();
  switch (method) {
    case "GET":
      try {
        const newProduct = await Product.find({});
        db.disconnect();
        return res.status(200).json({ data: newProduct });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;
  }
};

export default handler;
