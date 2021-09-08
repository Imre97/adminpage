import React from 'react'
import './newproduct.css'


export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New User</h1>
            <form className="newProductForm">
                <div className="newProductItem">
                    <label>Username</label>
                    <input type="text" placeholder="David" />
                </div>
                <div className="newProductItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className="newProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="1243" />
                </div>
                <div className="newProductItem">
                    <label>Active</label>
                    <select className="newProductSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newProductButton">Add New Product</button>
            </form>

            
        </div>
    )
}
