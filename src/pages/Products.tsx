import { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { api } from "@/services/api";
import type { ProductType } from "@/types/ProductType";

export default function Products() {
    const [products, setProducts]= useState<ProductType[]>([])
    const [loading, setLoading]= useState(true)

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
        <div className="flex flex-col items-center pt-20 h-screen text-gray-800 dark:text-stone-300">
            <div className="flex flex-col items-center justify-center productCard">
                <h1 className="text-4xl font-bold mb-4 p-3">Products</h1>
                {loading ? (
                    <p>Loading ...</p>
                ) : (
                <div className="grid grid-flow-col grid-rows-3 gap-4">
                    {products.map((product) => {
                        return (
                            <Card key={product.id} className="h-20 w-50">
                                <CardHeader>
                                    <CardTitle>{product.name.charAt(0).toLocaleUpperCase() + product.name.slice(1)}</CardTitle>
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