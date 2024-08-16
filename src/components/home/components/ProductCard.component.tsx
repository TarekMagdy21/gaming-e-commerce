import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface ProductCardProps {
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  originalPrice,
  discount,
  imageUrl,
  rating,
  reviewsCount,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -{discount}%
          </div>
        )}
        {/* Product Image */}
        <Image
          src={imageUrl}
          alt={title}
          layout="responsive"
          width={400}
          height={400}
          className="object-cover rounded"
        />
        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex space-x-2">
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            ❤️
          </button>
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            👁️
          </button>
        </div>
      </div>
      <h2 className="mt-4 text-gray-800 text-lg font-semibold">{title}</h2>
      <div className="mt-2 flex items-center">
        <span className="text-red-500 text-xl font-bold">${price}</span>
        {originalPrice > price && (
          <span className="ml-2 text-gray-500 line-through">
            ${originalPrice}
          </span>
        )}
      </div>
      <div className="mt-2 flex items-center space-x-1">
        {/* Star Rating */}
        <div className="flex items-center text-yellow-500">
          {"★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating))}
        </div>
        <span className="text-gray-600 text-sm">({reviewsCount})</span>
      </div>
    </div>
  );
};

export const ProductCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div>
      <Slider {...settings}>
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
        <ProductCard
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount={40}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.5}
          reviewsCount={88}
        />
        <ProductCard
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          discount={35}
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          rating={4.2}
          reviewsCount={75}
        />
      </Slider>
    </div>
  );
};

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow slick-next bg-red-500 w-10 rounded-full`}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow slick-prev bg-gray-300 rounded-full`}
      onClick={onClick}
    />
  );
};
