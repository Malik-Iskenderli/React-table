 import React, { useEffect, useState } from 'react'
import './Sass/Table.scss'
const Table = ({ posts, tableHeader, setPosts, setTableHeader }) => {

    const [checkedAll, setcheckedAll] = useState(true)
    const [checked, setChecked] = useState(true)
    const [checkboxNames, setCheckboxNames] = useState([...tableHeader])

    console.log(checkboxNames);


    const deleteRowsAll = (e) => {
        if (e.target.checked) {
            setcheckedAll(false)

        } else {
            setcheckedAll(true)
        }
    }

    const deleteRows = (item, e, key) => {
        if(e.target.checked){
            setChecked(true)
            const updateHeading = tableHeader.filter((d) => d !== item)
            setTableHeader(updateHeading)
        }else{
            setChecked(false)
            setPosts([...posts, item])
        }
    }
    //   const checkInput = (item) => {
    //     if(checked){
    //         setChecked(false)
    //         tableHeader.filter(product => product.id).includes(item)
    //     }
    //   }

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
                              <input type="checkbox"
                               checked={tableHeader.includes(item)} 
                               onChange={(e) => deleteRows(item, e, key)}/>
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
                                         return  <td key={key}>
                                            {heading === "url" || heading === "thumbnailUrl" ? <img src={item[heading]} style={{ width: "150px", height: "150px" }} /> : item[heading] }
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





// const Table = ({ posts, tableHeader, setPosts, setTableHeader }) => {
//     const [checkedAll, setCheckedAll] = useState(true);
    
//     const [checkedHeaders, setCheckedHeaders] = useState({});

//     useEffect(() => {
//         const initialCheckedHeaders = tableHeader.reduce((acc, header) => {
//             acc[header] = true;
//             return acc;
//         }, {});
//         setCheckedHeaders(initialCheckedHeaders);
//     }, [tableHeader]);

//     const deleteRowsAll = (e) => {
//         const isChecked = e.target.checked;
//         setCheckedAll(isChecked);

//         const updatedCheckedHeaders = { ...checkedHeaders };
//         for (const header in updatedCheckedHeaders) {
//             updatedCheckedHeaders[header] = isChecked;
//         }
//         setCheckedHeaders(updatedCheckedHeaders);
//     };

//     const deleteRows = (header, e) => {
//         const isChecked = e.target.checked;

//         const updatedCheckedHeaders = {
//             ...checkedHeaders,
//             [header]: isChecked
//         };
//         setCheckedHeaders(updatedCheckedHeaders);
//     };

//     const complete = (item) => {
//         const updatedPosts = posts.filter((post) => post !== item);
//         setPosts(updatedPosts);
//     };

//     return (
//         <div className='table'>
//             <div className='table-header'>
//                 <h3>Example Title</h3>
//                 <div className='check-table'>
//                     <div>
//                         <span>All</span>
//                         <input type='checkbox' checked={checkedAll} onChange={deleteRowsAll} />
//                     </div>
//                     {tableHeader.map((item, key) => (
//                         <div key={key}>
//                             <span>{item}</span>
//                             <input
//                                 type='checkbox'
//                                 checked={checkedHeaders[item] || false}
//                                 onChange={(e) => deleteRows(item, e)}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {checkedAll && (
//                 <table className='table table-bordered text-center'>
//                     <thead>
//                         <tr>
//                             {tableHeader?.map((heading, key) => {
//                                 return checkedHeaders[heading] ? <th key={key}>{heading}</th> : null;
//                             })}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {posts?.map((item, key) => (
//                             <tr key={key}>
//                                 {tableHeader &&
//                                     tableHeader.map((heading, key) => {
//                                         return checkedHeaders[heading] ? (
//                                             <td key={key}>
//                                                 {heading === 'url' || heading === 'thumbnailUrl' ? (
//                                                     <img src={item[heading]} style={{ width: '150px', height: '150px' }} alt={heading} />
//                                                 ) : (
//                                                     item[heading]
//                                                 )}
//                                             </td>
//                                         ) : null;
//                                     })}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default Table;



