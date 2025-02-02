import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './index.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { db } from './data/db'
import { Guitar } from './components/Guitar'

function App() {

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  return (
    <>
      <Header/>
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {data.map((guitar)=> (
            <Guitar guitar={guitar} key={guitar.id} setCart = {setCart} cart= {cart} />
          
          ))}

        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App;