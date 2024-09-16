// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";

const CategorySwiper = () => {
  const { categories } = useSelector((state) => state.products);

  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
      >
        {categories.slice(0, 11).map((cat, index) => (
          <SwiperSlide key={index} className="mb-12">
            <CategoryCard cat={cat} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySwiper;
