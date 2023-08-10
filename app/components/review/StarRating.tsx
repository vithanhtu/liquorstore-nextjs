import React from "react";
import Rating from "react-rating-stars-component";

interface StarRatingProps {
  value?: number; // Sửa thành "number"
  onChange?: (value: number) => void; // Thêm kiểu dữ liệu đúng cho hàm onChange
}

// Sửa cú pháp định nghĩa hàm
const StarRating: React.FC<StarRatingProps> = ({ value, onChange }) => {
  return (
    <Rating
      count={5}
      value={value}
      onChange={onChange}
      size={22}
      activeColor="#b7472a"
    />
  );
};

export default StarRating;
