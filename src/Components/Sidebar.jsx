import React, { useEffect, useState } from 'react'
import './Sass/Sidebar.scss'
import Table from './Table.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
  const [posts, setPosts] = useState([])
  console.log("gelen melumat:", posts)
  const [tableHeads,setTableHeads] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [sceleton, setSceleton] = useState(false)

  // const textChange = (e) => {
  //   if (e.target.value === "posts") {
  //     setSceleton(false)
  //     setTarget(e.target.value)
  //     const error = document.querySelector('.message p')
  //     error.innerHTML = ("Axtardiginiz netice tapildi:")
  //   } else if (e.target.value === "") {
  //     setSceleton(false)
  //     toast.warning("Axtardiginiz melumatin adini daxil edin:")
  //     const error = document.querySelector('.message p')
  //     error.innerHTML = ("Axtardiginiz melumatin adini daxil edin:")
  //   }
  //   else {
  //     setSceleton(true)
  //     toast.error("Zehmet olmasa duzgun adi daxil edin....")
  //     const error = document.querySelector('.message p')
  //     error.innerHTML = ("Zehmet olmasa duzgun adi daxil edin....")
  //   }
  // }

  const getRequestApi =  async () => {
    const url = `https://jsonplaceholder.typicode.com/${inputValue}`
    const response = await fetch(url)
    const data = await response.json()
      try{
        setPosts(data) 
        setTableHeads(Object.keys(data[0]))
      }
  
      catch{
        toast("Melumat tapilmadi")
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
            value={ inputValue }
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
        tableHeads={tableHeads}
        sceleton={sceleton} 
        setSceleton={setSceleton} 
        />
      <ToastContainer />
    </div>
  )
}

export default Sidebar