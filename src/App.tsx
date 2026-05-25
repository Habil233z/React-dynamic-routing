import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import './App.css'
import { Button } from "@/components/ui/button"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import { AuthProvier } from './context/AuthProvider'
import { useAuth } from './hooks/useAuth'
import Login from './pages/Login'
import PrivateRoute from './lib/PrivateRoute'
import ThemeToggle from './components/ThemeToggle'


function Header() {
  const {token, logout} = useAuth()

  return (
    <div className='w-full gap-8 p-4 flex justify-center border-b bg-blue-900'>
          <Button asChild variant='outline'>
            <Link to="/">Home</Link>
          </Button>
          {token && (
            <>
            <Button asChild variant='outline'>
              <Link to="/cart">Cart</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link to="/products">Products</Link>
            </Button>
            </>
          )}


          {token? (
            <Button onClick={logout} variant={'destructive'}>logout</Button>
          ): (
            <Button asChild variant={'outline'}>
              <Link to="/login">Login</Link>
            </Button>
          )}
          <ThemeToggle />
      </div>
  )
}

function App() {

  return (
    <AuthProvier>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/products' element={
              <PrivateRoute>
                <Products/>
              </PrivateRoute>
            }/>
            <Route path='/cart' element={
              <PrivateRoute>
                <Cart/>
              </PrivateRoute>
            }/>
          </Routes>
        </BrowserRouter>
      </AuthProvier>
  )
}

export default App
