import React, { useEffect, useState } from "react";
import { fetchData } from "../../../Utils/fetchData";
import Skeleton from "./Skeleton";
import { Swiper,SwiperSlide } from "swiper/react";
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
        "products?sort=-maxDiscountPercent&limit=10",
      );
      setProducts(result.data);
    })();
  }, []);
  if (!products) return <Skeleton />;
  const items = products?.map((item) => (
    <SwiperSlide key={item._id}>
      <SpecialCard
        image={item.images?.at(0)}
        id={item._id}
        price={item.defaultProductVariantId.price}
        finalPrice={item.defaultProductVariantId.finalPrice}
        discountPercent={item.defaultProductVariantId.discountPercent}
        minPrice={item.minPrice}
        maxPrice={item.maxPrice}
        title={item.title}
        avgRating={item.avgRating}
      />
    </SwiperSlide>
  ));
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">Special Products</h2>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {items}
      </Swiper>
    </div>
  );
}
