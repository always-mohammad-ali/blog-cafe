import './App.css'
import './index.css'
import Blog from './components/Blogs/Blog'
import Header from './components/Header/Header'
import Bookmark from './components/Bookmarks/Bookmark'


function App() {
 

  return (
    <>
      <Header></Header>

      <main>
        <div className='mx-auto md:w-5/6 md:flex '>
          <Blog></Blog>
          <Bookmark></Bookmark>
        </div>
          
      </main>
     
     
    </>
  )
}

export default App
