import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Product 1",
    price: 100000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/92dd96ba-7653-4f93-86bf-01e41c7490eb/zoom-vomero-5-shoes-KxjTbk.png"
  },
  {
    id: 2,
    title: "Product 2",
    price: 200000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21c3babe-60fb-46fb-8327-319c21107f37/air-max-1-shoes-h0SzNM.png"
  },
  {
    id: 3,
    title: "Product 3",
    price: 300000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/63c3d532-d82f-4dfd-ac86-5e0eea991a7b/air-jordan-1-low-shoes-6Q1tFM.png"
  },
  {
    id: 4,
    title: "Product 4",
    price: 400000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a576a457-055e-40ff-911d-f148529e97e2/air-jordan-1-low-se-shoes-KKFsH5.png"
  },
  {
    id: 5,
    title: "Product 5",
    price: 500000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e3d0c449-a732-4b11-9430-c80fd3cbf2fd/air-jordan-1-low-se-shoes-fQgpsv.png"
  }
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id))
    if (detailProduct) {
      return (
        NextResponse.json({
          status: 200,
          message: "Success",
          data: detailProduct
        })
      )
    } return NextResponse.json({
      status: 404,
      message: "Not Found"
    })
  }
  return (
    NextResponse.json({
      status: 200,
      message: "Success",
      data: data
    })
  )

}