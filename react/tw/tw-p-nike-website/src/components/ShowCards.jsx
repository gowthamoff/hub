import { shoe4 } from '../assets/images'

const ShowCards = ({ products, onChange, imageSelected }) => {
  return (
    <div className="flex w-[100px] md:w-[140px] scale-140 absolute -bottom-16 max-lg:-bottom-10 gap-10 justify-center items-center ">
      {products.map((product) => (
        <img
          className={`drop-shadow-[10px_0px_20px_gray] object-contain flex-1 ${
            imageSelected == product?.bigShoe ? 'scale-125' : ''
          }`}
          src={product?.thumbnail}
          alt="show"
          width={130}
          height={100}
          onClick={() => {
            onChange(product?.bigShoe)
          }}
        />
      ))}
    </div>
  )
}

export default ShowCards
