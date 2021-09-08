import React, { useState } from 'react'
import './userlist.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import {userrows} from '../../data'
import {Link} from 'react-router-dom'


export default function UserList() {


    const [data, setData] = useState(userrows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'user',
          headerName: 'Username',
          width: 150,
          renderCell: (params) =>{
              return (
                  <div className="userListUser">
                      <img className="userListImg" src={params.row.avatar} alt=""/>
                      {params.row.username}
                  </div>
              )
          }
        },
        {
          field: 'email',
          headerName: 'E-mail',
          width: 150,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160,
        },
        {
            field:"action",
            headerName:"Action",
            width:150,
            renderCell: (params)=>{
                return(
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline onClick={() => handleDelete(params.row.id)} className="userListDelete"/>
                    </>
                )
            }
        }
      ];
        

    return (
        <div className="userList">
            <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={7}
            checkboxSelection
            />
        </div>
    )
}
