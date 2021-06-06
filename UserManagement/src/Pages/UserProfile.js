import React, {useState, useEffect} from 'react'
import {getDataRequest} from "../api/index"

function UserProfile() {
    const [state, setState] = useState({
        data:[],
        totalPages:0,
        currentPage:1,
    });

    const [display, setDisplay] = useState("flex")

    const getData = (pageNo) => {

        if(pageNo){
            getDataRequest(
                'GET',
                `https://reqres.in/api/users?page=${pageNo}`,
            ).then((res) => {
                setState({
                    ...state, 
                    data: res.data,
                    totalPages: res.total_pages,
                    currentPage : res.page
                });
            }).catch((err) => {
                console.log(err);
            })
        }else{
            getDataRequest(
                'GET',
                `https://reqres.in/api/users?page=${pageNo}`,
            ).then((res) => {
                setState({
                    ...state, 
                    data: res.data,
                    totalPages: res.total_pages,
                    currentPage : res.page
                });
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    useEffect(() => {
        getData();
    }, [])

    function onClick(){
        getData(state.currentPage += 1)
    }

    useEffect(() => {
        if(state.currentPage === state.totalPages){
            setDisplay("none");
        }
    })

    // function onSort(event, field){
    //     const displayedValues = state.data
    //     displayedValues.sort((a, b) => a[field].localeCompare(b[field]))
    //     setState({...state, })
    // }

    console.log(state);
    console.log("Current Page", state.currentPage)
    console.log("Total Page", state.totalPages)

    return (
        <div className="homepageWrapper">
            <table className="userList">
                <thead>
                    <tr className="tableRow">
                        <th className="header">First Name </th>
                        <th className="header"> Last Name </th>
                        <th className="header"> Email ID </th>
                    </tr>
                </thead>
            {/* </table> */}
                {state.data && state.data.map((item, index) => {
                    return(
                        // <table className="userList">
                            <tr className="tableRow">
                                <td className="tableData">{item.first_name}</td>
                                <td className="tableData">{item.last_name}</td>
                                <td className="tableData">{item.email}</td>
                            </tr>
                        // {/* </table> */}
                        )
                    }) 
                }
            </table>
            <button className="loadMoreButton" onClick={onClick} style={{display:`${display}`}}> 
                Load More 
            </button>
        </div>
    )
}

export default UserProfile
