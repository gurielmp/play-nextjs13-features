import { retriveData, retriveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike Mercurial Vapor 15 Academy",
    price: 1279000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/04afe781-1619-4957-bc77-12c26e1e3b25/mercurial-vapor-15-academy-indoor-court-football-shoes-kjqhHM.png"
  },
  {
    id: 2,
    title: "Nike Waffle Debut",
    price: 1149000,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b3d516c8-4838-46ec-8169-bace2b99298a/waffle-debut-shoes-SGn7tB.png"
  },
  {
    id: 3,
    title: `Nike Pegasus 40 "Eliud Kipchoge"`,
    price: 2099000,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ff2e824-a8e5-482a-aedf-8a7604c0a401/pegasus-40-eliud-kipchoge-road-running-shoes-cRbXTK.png"
  },
  {
    id: 4,
    title: "Nike Zoom Mercurial Vapor 15 Academy KM MG",
    price: 1379000,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/43ad888e-1305-437a-abbf-5f888a31daca/zoom-mercurial-vapor-15-academy-km-mg-multi-ground-football-boot-9m3LDc.png"
  },
  {
    id: 5,
    title: "Giannis Immortality 2",
    price: 1149000,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/818b1b8f-31de-4af5-873f-b012c1d6d700/giannis-immortality-2-basketball-shoes-vBxGdT.png"
  }
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (id) {
    const detailProduct = await retriveDataById("products", id)
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

  const products = await retriveData("products")

  return (
    NextResponse.json({
      status: 200,
      message: "Success",
      data: products
    })
  )

}