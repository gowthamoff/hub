async function getProducts() {
  const response = await fetch(
    'https://h2xemo5hia.execute-api.ap-south-1.amazonaws.com/dev/api/v1/lookup?type=product_sub_category'
  )
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const products = await response.json()
  return products
}

const EcomLandingPage = async () => {
  const productList = await getProducts()

  return (
    <div>
      {productList?.length !== 0 && (
        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid justify-center items-center">
          {productList?.map((data) => (
            <div
              key={data.id}
              className="justify-center items-center flex flex-col py-4 hover:scale-105 transition duration-100"
            >
              <h3 className="font-sans font-semibold text-2xl">
                {data.category_name}
              </h3>
              <img
                className="object-cover w-[200px] h-[200px] rounded-2xl"
                src={data.sub_category_image_path}
                alt={data.category_name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default EcomLandingPage
