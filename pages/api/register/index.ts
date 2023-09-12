import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { email, name, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await prisma.user.create({
        data: {
          email,
          name,
          hashedPassword,
        },
      });

      console.log(user)
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).end();
}
