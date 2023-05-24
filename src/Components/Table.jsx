import React, { useEffect, useState } from 'react'
import './Sass/Table.scss'
const Table = ({ posts, tableHeader, setPosts, setTableHeader }) => {

    const [checkedAll, setcheckedAll] = useState(true)
    const [checked, setChecked] = useState(true)


    const deleteRowsAll = (e) => {
        if (e.target.checked) {
            setcheckedAll(true)
        } else {
            setcheckedAll(false)
        }
    }

    const deleteRows = (item,e) => {
      if(e.target.checked){

      } 
    }

   
    return (
        <div className='table'>
            <div className='table-header'>
                <h3>Example Title</h3>
                <div className='check-table'>
                    <div>
                        <span>All</span>
                        <input type="checkbox" checked={checkedAll} onChange={(e) => deleteRowsAll(e)}/>
                    </div>
                     {
                        tableHeader.map((item, key) => (
                            <div key={key}>
                                <span>{item}</span>
                                <input type="checkbox" checked={checked}  onChange={(e)=>deleteRows(item,e)}/>
                            </div >
                        ))
                    }

                </div>
            </div>
            {checkedAll && <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        {
                            tableHeader?.map((heading, key) => {
                                return <th key={key}>{heading}</th>
                            })
                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        posts?.map((item, key) => (
                            <tr key={key}>
                                {
                                    tableHeader && tableHeader.map((heading, key) => {
                                        return <td key={key}>
                                            {heading === "url" || heading === "thumbnailUrl" ? <img src={item[heading]} style={{ width: "150px", height: "150px" }} /> : item[heading]}
                                        </td>
                                    })
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>}
        </div>
    )
}

export default Table