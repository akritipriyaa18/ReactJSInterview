import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [liked, setLiked] = useState(false)

  const handleLikeUnLike = () => {
    setLiked(liked)
  }

  return (
    <div>
      <button className="likedtn" onClick={handleLikeUnLike}>
        <HeartIcon /> {liked ? "liked" : "like"}
      </button>
      {/* <button>
        <SpinnerIcon /> Like
      </button> */}
    </div>
  )
}

export default App
