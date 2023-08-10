"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
        container
        max-w-[2520px]
        mx-auto
        xl:w-[84%]
        w-full
        h-full
        xl:px-24 
        md:px-10
        sm:px-2
        px-4
      "
    >
      {children}
    </div>
  );
};

export default Container;
