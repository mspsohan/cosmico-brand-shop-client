import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import Advertisement from "../../components/Advertisement/Advertisement";


const BrandProduct = () => {
   const allProduct = useLoaderData()
   const { brand } = useParams()

   const brandMatch = allProduct.filter(products => products.brand === brand)
   // const { name, type, price, description, rating, image } = brandMatch;

   return (
      <div>
         <div className="relative flex justify-center items-center">
            <img className="h-80 w-full" src="https://i.ibb.co/RB1zrhK/cosmico-footer-bg.webp" alt="" />
            <div className="w-full h-full absolute bg-green-500 bg-opacity-30"></div>
            <h2 className="absolute text-6xl text-gray-500 tracking-widest uppercase">{brandMatch[0].type}</h2>
         </div>
         <Advertisement></Advertisement>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto gap-6">
            {
               brandMatch.map(brandProduct =>
                  <div key={brandProduct._id}>
                     <div className="card bg-base-100 shadow-xl">
                        <figure>
                           <img src={brandProduct.image} alt="Product" className="h-72 w-full" />
                        </figure>
                        <div className="card-body px-3">
                           <h2 className="card-title">{brandProduct.name}</h2>
                           <div className="flex items-center justify-between">
                              <h3 className="text-lg text-pink-500">{brand}</h3>
                              <h3 className="text-lg text-pink-500 capitalize">{brandProduct.type}</h3>
                           </div>
                           <p className="text-[14px]">{brandProduct.description}</p>

                           <div className="flex justify-between">
                              <p className="text-lg">${brandProduct.price}</p>
                              <p className="flex justify-end">
                                 <Rating
                                    initialRating={brandProduct.rating}
                                    emptySymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-grey.png" className="icon w-5 h-5" />}
                                    // placeholderSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-red.png" className="icon w-full h-full" />}
                                    fullSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-yellow.png" className="icon w-5 h-5" />}
                                 />
                              </p>
                           </div>
                           <div className="flex justify-center  gap-8">
                              <button className="badge text-xl py-4 hover:bg-purple-500 hover:text-white w-full badge-outline">Details</button>
                              <button className="badge text-xl py-4 hover:bg-pink-500 hover:text-white w-full badge-outline">Update</button>
                           </div>
                        </div>
                     </div>
                  </div>)
            }
         </div>
      </div>
   );
};

export default BrandProduct;