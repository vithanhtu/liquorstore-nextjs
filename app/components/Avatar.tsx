"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full cursor-pointer"
      height="22"
      width="22"
      alt="Avatar"
      src={src || "/images/kind-1.jpg.webp"}
    />
  );
};

export default Avatar;
