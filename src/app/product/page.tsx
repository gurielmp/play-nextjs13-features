import { getData } from "@/services/products"
import Image from "next/image"
import Link from "next/link"

type ProductPageProps = {
  params: { slug: string[] }
}

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props
  const products = await getData("http://localhost:3000/api/product")

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-5 place-items-center">
      {/* <h1>{params.slug ? "Detail Product" : "Product Page"}</h1> */}
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <Link
            href={`/product/detail/${product.id}`}
            key={product.id}
            className="w-11/12 max-w-sm my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Image
              className="object-cover w-full p-8 rounded-t-lg h-96"
              src={product.image}
              alt="product image"
              width={500}
              height={500}
            />

            <div className="px-5 pb-5">
              <h5 className="text-xl mb-4 font-semibold tracking-tight text-gray-900 truncate dark:text-white">
                {product.name}
              </h5>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </span>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      {params.slug && (
        <>
          <ul>
            <li>Categoty : {params.slug[0]}</li>
            <li>Merk : {params.slug[1]}</li>
            <li>Tipe : {params.slug[2]}</li>
          </ul>
        </>
      )}
    </div>
  )
}
