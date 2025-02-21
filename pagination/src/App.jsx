import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [products, setProducts] = useState([])
  const [pages, setPages] = useState(1)
  
  const fetchProducts = async() => {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    
    if(data && data.products){
      setProducts(data.products)
    }
    

    console.log(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const selectPageHandlerKey = (selectedPage) => {
    if(selectedPage >= 1 && selectedPage <= products.length/10 && selectedPage !== pages)
    setPages(selectedPage)
  }

  return (
    <div>
      {
        products.length > 0 && (<div className='products'>
          {
            products.slice(pages * 10 - 10,pages * 10).map((prod) => {
              return <span className='products__single' key={prod}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            })
          }
        </div>)
      }
      {
        products.length > 0 && (<div className='pagination'>
        <span onClick={()=> selectPageHandlerKey(pages - 1)}>➡️</span>
        {
          [...Array(products.length / 10)].map((_, i) => {
            return <span className={pages === i+1 ? "pagination__selected":""}
            onClick={()=> selectPageHandlerKey(i + 1)} key={i}>{i + 1}</span>
          })
        }
        <span onClick={()=> selectPageHandlerKey(pages + 1)}>⬅️</span>
        </div>)
      }
    </div>
  )
}

export default App
