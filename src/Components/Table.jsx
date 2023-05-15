import React from 'react'
import './Sass/Table.scss'
// import  Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
import { Row, Skeleton } from 'antd'

const Table = ({ posts, comments, sceleton, setSceleton }) => {
    return (
        <div className='table'>
            <div className='table-header'>
                <h3>Example Title</h3>
                <div className='check-table'>
                    <div><span>All</span><input type="checkbox" /></div>
                    <div><span>ID</span><input type="checkbox" /></div>
                    <div><span>Name</span><input type="checkbox" /></div>
                    <div><span>Email</span><input type="checkbox" /></div>
                    <div><span>Test</span><input type="checkbox" /></div>
                </div>
            </div>

            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        posts.map((item, key) => (


                            sceleton ?


                                <tr>

                                    <td ><Skeleton active title={false} /></td>
                                    <td><Skeleton active title={false} /></td>
                                    <td><Skeleton active title={false} /></td>
                                    <td><Skeleton active title={false} /></td>

                                </tr>
                                : <>
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                    </tr>
                                </>
                        ))
                    }
                    {/* {
                        comments.map((item,key)=>(
                            sceleton ?
                                <tr>
                                    <td><Skeleton active="active" paragraph={{ rows: 1 }} /></td>
                                    <td><Skeleton active="active" paragraph={{ rows: 1 }} /></td>
                                    <td><Skeleton active="active" paragraph={{ rows: 1 }} /></td>
                                    <td><Skeleton active="active" paragraph={{ rows: 1 }} /></td>

                                </tr>
                                :
                            <>
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.body}</td>
                                    </tr>
                                </>
                        ))
                    } */}

                </tbody>
            </table>
        </div>
    )
}

export default Table