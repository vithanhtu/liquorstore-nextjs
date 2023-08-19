// pages/index.js
"use client";

import { useState } from "react";

export default function Product() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    salePrice: "",
    sold: "",
    stock: "",
    manufactured: "",
  });

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddProduct = async () => {
    const formData = new FormData();
    formData.append("name", productData.name || ""); // Thêm dấu || '' để đảm bảo giá trị không bị null
    formData.append("description", productData.description || "");
    formData.append("category", productData.category || "");
    formData.append("price", productData.price || "");
    formData.append("salePrice", productData.salePrice || "");
    formData.append("sold", productData.sold || "");
    formData.append("stock", productData.stock || "");
    formData.append("manufactured", productData.manufactured || "");

    if (selectedFile) {
      formData.append("imageUrl", selectedFile);
    }

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Added product:", data.product);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={productData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={productData.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={productData.category}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={productData.price}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="salePrice"
        placeholder="Sale Price"
        value={productData.salePrice}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="sold"
        placeholder="Sold"
        value={productData.sold}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={productData.stock}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="manufactured"
        placeholder="Manufactured"
        value={productData.manufactured}
        onChange={handleInputChange}
      />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}
