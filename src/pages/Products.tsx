import { Link, Outlet } from "react-router-dom";
import products from "@/api/product";

export default function Products() {

        return (
        <div className="flex flex-col items-center pt-20 h-screen bg-blue-400">
            <div className="flex flex-col items-center justify-center productCard">
                <h1 className="text-4xl font-bold mb-4 p-3">Products</h1>
                <div className="flex gap-20 mb-10">
                        {products.map((product)=> {
                            return (
                            <div key={product.id} className="text-2xl">
                                <Link to={product.id.toString()} className="">{product.name}</Link>
                            </div>)
                        })}
                </div>
            </div>
            <Outlet />
        </div>
        )
}