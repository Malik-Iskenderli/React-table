import React, { useEffect, useState } from 'react'
import './Sass/Sidebar.scss'
import Table from './Table.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
  const [posts, setPosts] = useState([]) //API den gelen melumatlar bunda saxlanilir
  const [inputValue, setInputValue] = useState("") // inputumuza daxil etdiklerimiz burda
  const [tableHeads, setTableHeads] = useState([]) //API den gelen melumatlari objeckt keyse cevirmek



  const getRequestApi = async () => {
    const url = `https://jsonplaceholder.typicode.com/${inputValue}`
    const response = await fetch(url)
    const data = await response.json()
    try {
      setPosts(data)
      setTableHeads(Object.keys(data[0]))
    }

    catch {
      if (posts != url) {
        toast("melumat yoxdur")
      }

    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getRequestApi();
    setInputValue("");
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
        tableHeads={tableHeads}
      />
      <ToastContainer />
    </div>
  )
}

export default Sidebar