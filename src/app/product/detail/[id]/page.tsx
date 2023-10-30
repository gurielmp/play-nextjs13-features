import { getData } from "@/services/products"
import Image from "next/image"

export default async function DetailProductPage(props: any) {
  const { params } = props
  const product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  )

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/3 mx-auto border-gray-700">
        <Image
          src={product.data.image}
          alt=""
          className="w-full object-cover aspect-square col-span-2"
          width={600}
          height={600}
        />
        <div className="bg-white p-4 px-6">
          <h3>{product.data.title}</h3>
          <p>Price : ${product.data.price}</p>
        </div>
      </div>
    </div>
  )
}
