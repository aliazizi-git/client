import React, { useEffect, useState } from "react";
import { fetchData } from "../../../Utils/fetchData";
import Skeleton from "./Skeleton";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import SpecialCard from "./SpecialCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function SpecialProducts() {
  const [products, setProducts] = useState();
  useEffect(() => {
    (async () => {
      const result = await fetchData(
        "products?sort=-maxDiscountPrice&limit=10",
      );
      setProducts(result.json());
    })();
  }, []);
  if (!products) return <Skeleton />;
  const items = products?.map((item) => (
    <SwiperSlide key={item._id}>
      <SpecialCard
        image={item.image}
        id={item._id}
        price={item.defaultProductVariant.price}
        finalPrice={item.defaultProductVariant.finalPrice}
        discountPercent={item.defaultProductVariant.discountPercent}
        minPrice={item.minPrice}
        maxPrice={item.maxPrice}
        title={item.title}
        avgRating={item.avgRating}
      />
    </SwiperSlide>
  ));
  return (
    <div>
      <Swiper
        Autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        module={[Autoplay, Pagination, Navigation]}
        Navigation={true}
        Pagination={{ clickable: true }}
        breakPoint={{
          320: {
            slidePerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidePerView: 2,
            spaceBetween: 30,
          },
          960: {
            slidePerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidePerView: 4,
            spaceBetween: 40,
          },
          1400: {
            slidePerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {items}
      </Swiper>
    </div>
  );
}
