import './App.css'
import './index.css'
import Blog from './components/Blogs/Blog'
import Header from './components/Header/Header'
import Bookmark from './components/Bookmarks/Bookmark'
import { useState } from 'react'


function App() {

  const [bookMark, setBookMark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const addToBookmark = blog =>{
    const newBookmark = [...bookMark, blog]
    setBookMark(newBookmark)
  }

  const handleReadingTime = (time, id) =>{
    const totalReadingTime = readingTime + time;
    setReadingTime(totalReadingTime)

    const removeFromBookmark = bookMark.filter(book => book.id !== id)
    setBookMark(removeFromBookmark)
  }
 

  return (
    <>
      <Header></Header>

      <main>
        <div className='mx-auto md:w-5/6 md:flex gap-5 mt-8'>
          <Blog addToBookmark={addToBookmark} handleReadingTime={handleReadingTime}></Blog>
          <Bookmark bookMark={bookMark} readingTime={readingTime}></Bookmark>
        </div>
          
      </main>
     
     
    </>
  )
}

export default App
