import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import Chart from '../../Components/chart/Chart'
import { productData } from '../../data'
import { Publish } from '@material-ui/icons'


export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="avatar" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">id:</div>
                            <div className="productInfoValue">123</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">sales:</div>
                            <div className="productInfoValue">1233</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">active:</div>
                            <div className="productInfoValue">yes</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">in stock:</div>
                            <div className="productInfoValue">345</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpods" />
                        <label>In Stock</label>
                        <select name="instock" id="idStock">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="avatar" className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display: "none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
