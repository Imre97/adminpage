import React, { useState } from 'react'
import './products.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import {productrows} from '../../data'
import {Link} from 'react-router-dom'


export default function Products() {

    const [data, setData] = useState(productrows) 

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'product',
          headerName: 'Product',
          width: 150,
          renderCell: (params) =>{
              return (
                  <div className="productListItem">
                      <img className="productListImg" src={params.row.img} alt=""/>
                      {params.row.name}
                  </div>
              )
          }
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 150,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
            field:"action",
            headerName:"Action",
            width:150,
            renderCell: (params)=>{
                return(
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline onClick={() => handleDelete(params.row.id)} className="productListDelete"/>
                    </>
                )
            }
        }
      ];

    return (
        <div className="productList">
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
