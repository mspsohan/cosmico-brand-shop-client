import Rating from "react-rating";

// eslint-disable-next-line react/prop-types
const ShopSlick = ({ shopData }) => {
   // eslint-disable-next-line react/prop-types
   const { name, brand, type, price, description, rating, image } = shopData;
   return (
      <div>
         <div className="bg-gray-50 drop-shadow-2xl hover:shadow-2xl dark:bg-gray-900 mb-10 md:mb-0  hover:shadow-pink-400">
            <figure className="">
               <img src={image} alt="Product" className="h-72 w-full border rounded-md" />
            </figure>
            <div className="card-body px-3 drop-shadow-2xl border-b-4 border-pink-300 dark:border-r-2 dark:border-b-4  dark:border-l-2 dark:border-pink-500">
               <div className="h-14">
                  <h2 className="card-title">{name}</h2>
               </div>
               <div className="flex items-center justify-between">
                  <h3 className="text-lg text-pink-500">{brand}</h3>
                  <h3 className="text-lg text-pink-500 capitalize">{type}</h3>
               </div>
               <div className="h-16">
                  <p className="text-[14px]">{description}</p>
               </div>

               <div className="flex justify-between">
                  <p className="text-lg">${price}</p>
                  <p className="flex justify-end">
                     <Rating
                        initialRating={rating}
                        emptySymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-grey.png" className="icon w-5 h-5" />}
                        // placeholderSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-red.png" className="icon w-full h-full" />}
                        fullSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-yellow.png" className="icon w-5 h-5" />}
                     />
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShopSlick;