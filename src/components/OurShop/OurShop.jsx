import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ShopSlick from "./ShopSlick";
import "./ourshop.css";
import useAllProducts from "../../hooks/useAllProducts";

const OurShop = () => {
   const { data: ourShop } = useAllProducts()

   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1025,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               dots: true,
               slidesToShow: 1,
               slidesToScroll: 2
            }
         }
      ]
   };

   return (
      <div className="overflow-hidden bg-pink-50 py-12 dark:bg-gray-900 dark:text-white">
         <h4 className="text-xl text-center tracking-[15px] uppercase">Our Shop</h4>
         <h2 className="text-5xl uppercase tracking-[10px] mt-6 mb-12 text-center">Product</h2>
         <div>
            <div className="container mx-auto">
               <Slider {...settings}>
                  {
                     ourShop?.result?.map(shopData => <ShopSlick key={shopData?._id} shopData={shopData}></ShopSlick>)
                  }
               </Slider>
            </div>
         </div>
      </div>
   );
};

export default OurShop;
