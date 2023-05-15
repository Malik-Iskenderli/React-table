import React, { useEffect, useState } from 'react'
import './Sass/Sidebar.scss'
import Table  from './Table.jsx'

const Sidebar = () => {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [albums, setAlbums] = useState([])
  const [photos, setPhotos] = useState([])
  const [todos, setTodos] = useState([])
  const [users, setUsers] = useState([])
  const [sceleton,setSceleton]= useState(false)
  const [target, setTarget] = useState("")
  // console.log("valueden gelen",target)

  // console.log("postsdan gelen melumat:", posts)
  // console.log("commentsden gelen melumat:", comments)
  // console.log("albumsdan gelen melumat:", albums)
  // console.log("photosdan gelen melumat:", photos)
  // console.log("todosdan gelen melumat:", todos)
  // console.log("usersden gelen melumat:", users)

  useEffect(() => {
    //-----------------------------------------------------------------------------------
    const posts = ('https://jsonplaceholder.typicode.com/posts')
    fetch(posts)
      .then(product =>
        product.json()
      )
      .then(product => setPosts([...product]))
      .catch(err => console.log("gelmedi:", err))
    //-----------------------------------------------------------------------------------
    const comments = ('https://jsonplaceholder.typicode.com/comments')
    fetch(comments)
      .then(product =>
        product.json()
      )
      .then(product => setComments([...product]))
      .catch(err => console.log("gelmedi:", err))

    //-----------------------------------------------------------------------------------
    const albums =('https://jsonplaceholder.typicode.com/albums') 
    fetch(albums)
      .then(product =>
        product.json()
      )
      .then(product => setAlbums([...product]))
      .catch(err => console.log("gelmedi:", err))

    //-----------------------------------------------------------------------------------
    const photos = ('https://jsonplaceholder.typicode.com/photos')
    fetch(photos)
      .then(product =>
        product.json()
      )
      .then(product => setPhotos([...product]))
      .catch(err => console.log("gelmedi:", err))

    //-----------------------------------------------------------------------------------
    const todos = ('https://jsonplaceholder.typicode.com/todos')
    fetch(todos)
      .then(product =>
        product.json()
      )
      .then(product => setTodos([...product]))
      .catch(err => console.log("gelmedi:", err))

    //-----------------------------------------------------------------------------------
    const users = ('https://jsonplaceholder.typicode.com/users')
    fetch(users)
      .then(product =>
        product.json()
      )
      .then(product => setUsers([...product]))
      .catch(err => console.log("gelmedi:", err))
  }, [])
  const textChange = (e) => {
    // console.log(e.target.value) 
    if(e.target.value === "posts"){
      setSceleton(false)
      setTarget(e.target.value)
      
      // console.log("tapildi", posts)
      // document.body.classList.remove("sil")

    }else{
      setSceleton(true)
      const error = document.querySelector('.message p')
      error.innerHTML=("Zehmet olmasa duzgun adi daxil edin....")
      // console.log("tapilmadi")
      // document.body.classList.add("sil")

    }
  }
  return (
    <div className='sidebar-table'>
    <div className='sidebar'>
      <h1>Sorgu</h1>
      <div className="inpt">
        <input type="text" placeholder='daxil et' className='input' onChange={(e) => {
          textChange(e)
        }} />
        <button className='btnn'>Axtar</button>
      </div>
      <div className="message">
        <p></p>
      </div>
      

    </div>
    <Table posts={posts} comments={comments} sceleton={sceleton} setSceleton={setSceleton}/>
    </div>
  )
}

export default Sidebar