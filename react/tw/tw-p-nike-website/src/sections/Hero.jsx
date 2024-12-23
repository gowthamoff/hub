import { useState } from 'react'
import { bigShoe1, shoe4 } from '../assets/images'
import Button from '../components/Button'
import CountCard from '../components/CountCard'
import ShowCards from '../components/ShowCards'
import { products, shoes, statistics } from '../constants'

const Hero = () => {
  const [imageSelected, setImageSelected] = useState(bigShoe1)

  return (
    <section
      id="hero"
      className="flex h-screen max-lg:h-[150vh] w-full flex-col lg:flex-row relative"
    >
      <div className="pl-5 lg:w-[50%] w-full z-20">
        <div className="pt-28 text-2xl font-sans text-[#FF6452] ">
          Our Summer collections
        </div>
        <div className="pt-12 text-[80px] leading-none font-palanquin font-bold rounded-md bg-white lg:w-[110%]  relative">
          The New Arrival <span className="text-[#FF6452]">Nike</span> Shoes
        </div>
        <div className="text-xl text-gray-500 font-mono pt-16 px-10">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </div>
        <div className="mt-10">
          <Button label={'Shop now'} />
        </div>
        <div className="mt-16">
          <CountCard statistics={statistics} />
        </div>
      </div>
      <div className="flex bg-hero relative py-20 max-lg:mt-6 justify-center items-center bg-orange-200 lg:w-[50%] w-full max-md:my-10 h-[80%]">
        <img
          src={imageSelected}
          alt="main show"
          width={500}
          height={500}
          className="object-contain"
        />
        <ShowCards
          imageSelected={imageSelected}
          products={shoes}
          onChange={(e) => setImageSelected(e)}
        />
      </div>
    </section>
  )
}

export default Hero
