import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { LineStyle, Timeline, TrendingUp, Person, Storefront, AttachMoney, Mail, DynamicFeed, Forum, WorkOutline, Error } from '@material-ui/icons'

export default function Sidebar() {
    return (
        <div className="sidebar">
          <div className="sidebarWrapper">
              <div className="siderbarMenu">
                  <h3 className="sidebarTitle">Dashboard</h3>
                  <ul className="sidebarList">
                    <Link to="/" className="link">
                      <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home
                      </li>
                    </Link>
                    <li className="sidebarListItem">
                      <Timeline className="sidebarIcon"/>
                      Analytics
                    </li>
                    <li className="sidebarListItem">
                      <TrendingUp className="sidebarIcon"/>
                      Sales
                    </li>
                  </ul>
              </div>
              <div className="siderbarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                  <Link to="/users" className="link">
                    <li className="sidebarListItem">
                      <Person className="sidebarIcon"/>
                      User
                    </li>
                  </Link>
                  <Link to="/products" className="link">
                    <li className="sidebarListItem">
                    < Storefront className="sidebarIcon"/>
                      Products
                    </li>
                  </Link>
                  <li className="sidebarListItem">
                    <AttachMoney className="sidebarIcon"/>
                    Transactions
                  </li>
                </ul>
              </div>
              <div className="siderbarMenu">
                  <h3 className="sidebarTitle">Notifications</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem">
                        <Mail className="sidebarIcon"/>
                        E-mail
                      </li>
                      <li className="sidebarListItem">
                        <DynamicFeed className="sidebarIcon"/>
                        Feedback
                      </li>
                      <li className="sidebarListItem">
                        <Forum className="sidebarIcon"/>
                        Messages
                      </li>
                  </ul>
              </div>
              <div className="siderbarMenu">
                  <h3 className="sidebarTitle">Staff</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        Manage
                      </li>
                      <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                      </li>
                      <li className="sidebarListItem">
                        <Error className="sidebarIcon"/>
                        Reports
                      </li>
                  </ul>
              </div>
          </div>
        </div>
    )
}
