import React, { useContext, useEffect, useState } from 'react'
import './Sass/Sidebar.scss'
import Table from './Table.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComondContext from './Context/ComondContext';

const Sidebar = () => {
  // C O N T E X T
  const { theme, setTheme } = useContext(ComondContext)

  const [posts, setPosts] = useState([]) //API den gelen melumatlar bunda saxlanilir
  const [inputValue, setInputValue] = useState("") // inputumuza daxil etdiklerimiz burda
  const [tableHeader, setTableHeader] = useState([]) //API den gelen melumatlari objeckt keyse cevirmek

  // I N P U T    V A L U E 
  const [post, setPost] = useState("posts")
  const [comment, setComment] = useState("comments")
  const [photo, setPhoto] = useState("photos")
  const [album, setAlbum] = useState("albums")
  const [todo, setTodo] = useState("todos")


  // A P I
  const getRequestApi = async () => {
    const url = `https://jsonplaceholder.typicode.com/${inputValue}`
    const response = await fetch(url)
    const data = await response.json()
    try {
      setPosts(data)
      setTableHeader(Object.keys(data[0]))
    }

    catch {
      setPosts([])
      toast.warn("Belə bir APİ yoxdur", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme ? "dark" : "light",
      })
    }
  }

  // C L I C K   B U T T O N
  const handleSubmit = (e) => {
    e.preventDefault();
    getRequestApi();
    setInputValue("");
    if (inputValue === post) {
      toast.success("Məlumat tapıldı", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme ? "dark" : "light",
      })
    } else if (inputValue === comment) {
      toast.success("Məlumat tapıldı", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme ? "dark" : "light",
      })
    } else if (inputValue === photo) {
      toast.success("Məlumat tapıldı", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme ? "dark" : "light",
      })
    }
    else if (inputValue === album) {
      toast.success("Məlumat tapıldı", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme ? "dark" : "light",
      })
    } else if (inputValue === todo) {
      toast.success("Məlumat tapıldı", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme ? "dark" : "light",
      })
    }
  }



  return (
    <div className='sidebar-table'>
      <div className='sidebar'>
        <h1>Sorgu</h1>
        <form onSubmit={handleSubmit} className="inpt">
          <input
            type="text"
            placeholder='daxil et'
            className='input'
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
            value={inputValue}
          />
          <button
            className='btnn'
            onClick={handleSubmit}
          >Axtar</button>
        </form>
        <div className="message">
          <p>Axtaris etmek ucun asagida qeyd olunmus sozleri yazaraq baxa bilersiz...</p><br />
          <ul>
            <li>posts</li>
            <li>comments</li>
            <li>photos</li>
            <li>albums</li>
            <li>todos</li>
          </ul>
        </div>

      </div>
      <Table
        posts={posts}
        setPosts={setPosts}
        tableHeader={tableHeader}
        setTableHeader={setTableHeader}
      />
      <ToastContainer
      />
    </div>
  )
}

export default Sidebar