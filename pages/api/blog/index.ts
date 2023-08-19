// api/products.js
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import prisma from "@/app/libs/prismadb";

export const config = {
  api: {
    bodyParser: false,
  },
};

const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: (req, file, cb) => {
    const uniqueSuffix = uuidv4();
    const fileExtension = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${fileExtension}`);
  },
});

const upload = multer({ storage });

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    try {
      const blogs = await prisma.blog.findMany();
      return res.status(200).json({ blogs });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "POST") {
    // Xử lý phần tạo sản phẩm và tải lên ảnh ở đây...
    try {
      await upload.single("imageUrl")(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ error: "Error uploading image" });
        }

        const { title, description } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

        // console.log(imageUrl);
        const createdBlog = await prisma.blog.create({
          data: {
            title,
            description,
            imageUrl,
          },
        });

        return res.status(201).json({ blog: createdBlog });
      });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res.status(405).end(); // Method Not Allowed
  }
}
