import { star } from '../assets/icons'
import { products } from '../constants'

const PopularProducts = () => {
  return (
    <div>
      <div className="  text-[60px] leading-none font-palanquin font-bold ">
        Our <span className="text-coral-red">Popular</span> Products
      </div>
      <div className="text-2xl text-gray-500 font-mono py-16 ">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {products.map((product) => (
          <div className="flex flex-col hover:scale-95 transition">
            <img src={product.imgURL} alt="product img" />
            <div className="flex gap-2 my-2">
              {/* <img src={star} alt="star img" /> */}
              {/* <div>4.2</div> */}
            </div>
            <div className="text-3xl font-mono">{product.name}</div>
            <div className="my-2 text-3xl font-mono font-bold">
              {product.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularProducts
