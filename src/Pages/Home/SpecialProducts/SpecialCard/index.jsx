import React from "react";
import { useNavigate } from "react-router-dom";

export default function SpecialCard({
  title,
  image,
  price,
  finalPrice,
  maxPrice,
  minPrice,
  discountPercent,
  avgRating,
  slug,
  id,
}) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`product-details/${id}/${slug}`)}>
      <div>
        <img src={import.meta.env.VITE_BASE_FILE_URL + image} alt={title} />
        <span>{discountPercent}%</span>
      </div>
      <div>
        <h2>{title}</h2>
        <div>
          <p>price: ${price}</p>
          <p>{finalPrice}</p>
        </div>
        <div>
          <p>Rating : ${avgRating}</p>
          <p>
            {minPrice} {maxPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
