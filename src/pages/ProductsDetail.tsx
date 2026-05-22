import products from "@/api/product"
import { useParams } from "react-router-dom"

export default function ProductsDetail() {
    const {productsId} = useParams()
    const selectedProduct = products[productsId-1]

    return (
        <div className="detailCard mt-20 p-10">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold ">Product Detail Page</h1>
                <p className="text-2xl mb-5 font-bold">Product name: {selectedProduct.name}</p>
                <p className="text-2xl">{selectedProduct.description}</p>
            </div>
        </div>
    )
}