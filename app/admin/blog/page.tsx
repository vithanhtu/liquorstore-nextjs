// pages/index.js
"use client";

import ClientOnly from "@/app/components/OnlyClient";
import Header from "@/app/components/header/Header";
import { useState } from "react";

export default function Blog() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [blogData, setblogData] = useState({
    title: "",
    description: "",
  });

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setblogData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddBlog = async () => {
    const formData = new FormData();
    formData.append("title", blogData.title || ""); // Thêm dấu || '' để đảm bảo giá trị không bị null
    formData.append("description", blogData.description || "");

    if (selectedFile) {
      formData.append("imageUrl", selectedFile);
    }

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Added blog:", data.blog);
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div>
      <ClientOnly>
        <Header heading="blog admin" />
      </ClientOnly>

      <div>
        <h1>Add Blog</h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={blogData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={blogData.description}
          onChange={handleInputChange}
        />

        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleAddBlog}>Add Blog</button>
      </div>
    </div>
  );
}
