import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Sam Smith</span>
                            <span className="userShowUserJob">Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">Sam1970</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">1970.03.06</span>
                        </div>
                        <span className="userShowTitle">Contact details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+23 345424243</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">Sam1970@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">London | UK</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>
                                    Username
                                </label>
                                <input type="text" placeholder="sam1970" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>
                                    Full Name
                                </label>
                                <input type="text" placeholder="Sam Smith" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>
                                    Birthday
                                </label>
                                <input type="text" placeholder="1970.03.06" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>
                                    Phone Number
                                </label>
                                <input type="text" placeholder="+23 345424243" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>
                                    E-mail
                                </label>
                                <input type="text" placeholder="sam1970@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>
                                    Address
                                </label>
                                <input type="text" placeholder="London | UK" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar"/>
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display: "none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
