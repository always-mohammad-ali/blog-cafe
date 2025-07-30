import './App.css'
import './index.css'
import Blog from './components/Blogs/Blog'
import Header from './components/Header/Header'
import Bookmark from './components/Bookmarks/Bookmark'
import { useState } from 'react'


function App() {

  const [bookMark, setBookMark] = useState([]);

  const addToBookmark = blog =>{
    console.log('blog is adding')
  }
 

  return (
    <>
      <Header></Header>

      <main>
        <div className='mx-auto md:w-5/6 md:flex '>
          <Blog addToBookmark={addToBookmark}></Blog>
          <Bookmark></Bookmark>
        </div>
          
      </main>
     
     
    </>
  )
}

export default App
