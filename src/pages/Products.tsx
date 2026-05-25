import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { api } from "@/services/api";
import type { ProductType } from "@/types/ProductType";

export default function Products() {
    const [products, setProducts]= useState<ProductType[]>([])
    const [loading, setLoading]= useState(true)
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get("/products")
                setProducts(res.data.data)
                console.log(res.data.data)
            } catch (error) {
                console.error("Fail to fetch product", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

        return (
        <div className="flex flex-col items-center pt-20 h-screen bg-blue-400">
            <div className="flex flex-col items-center justify-center productCard">
                <h1 className="text-4xl font-bold mb-4 p-3">Products</h1>
                {loading ? (
                    <p>Loading ...</p>
                ) : (
                <div className="flex gap-20 mb-10">
                    {products.map((product) => {
                        return (
                            <Card key={product.id}>
                                <CardHeader>
                                    <CardTitle>{product.name}</CardTitle>
                                    <CardDescription>{product.price}</CardDescription>
                                </CardHeader>
                            </Card>)
                    })}
                </div>
                )}
            </div>
        </div>
        )
}