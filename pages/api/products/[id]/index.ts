// api/products.js
import prisma from "@/app/libs/prismadb";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    try {
      const productId = req.query.id; // Use req.query.id to access query parameter
      const product = await prisma.product.findFirst({
        where: {
          id: productId,
        },
      });
      return res.status(200).json({ product }); // Change "products" to "product"
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
