import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import './App.css'
import { Button } from "@/components/ui/button"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import ProductsDetail from './pages/ProductsDetail'


function App() {

  return (
      <BrowserRouter>
        <div className='w-full gap-8 p-4 flex justify-center border-b bg-blue-900'>
          <Button asChild variant='outline'>
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant='outline'>
            <Link to="/products">Products</Link>
          </Button>
          <Button asChild variant='outline'>
            <Link to="/cart">Cart</Link>
          </Button>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/' element={<Products/>}>
            <Route path=':productsId' element={<ProductsDetail/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
