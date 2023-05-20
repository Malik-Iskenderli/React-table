import React, { useEffect, useState } from 'react'
import './Sass/Table.scss'
import { Skeleton } from 'antd'
// import  Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

const Table = ({ posts,setPosts, tableHeads, checked }) => {

    return (
        <div className='table'>
            <div className='table-header'>
                <h3>Example Title</h3>
                <div className='check-table'>
                    <div>
                        <span>All</span>
                        <input type="checkbox" id='check' />
                    </div>
                    <div>
                        <span>ID</span>
                        <input type="checkbox"/>
                    </div>
                    <div>
                        <span>Name</span><input type="checkbox" /></div>
                    <div>
                        <span>Email</span>
                        <input type="checkbox" /></div>
                    <div>
                        <span>Test</span>
                        <input type="checkbox" /></div>
                </div>
            </div>
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        {
                            tableHeads?.map((heading, key) => {
                                return <th key={heading.id}>{heading}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        posts?.map((item, key) => (
                            <tr>
                                {
                                    tableHeads && tableHeads.map((heading, key) => {
                                        return <td key={item.id}>{item[heading]}</td>
                                    })
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table