import { Visibility } from '@material-ui/icons'
import React from 'react'
import './widgetsm.css'

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/4307688/pexels-photo-4307688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">John Smith</span>
                        <span className="widgetSmUserJob">Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/4307688/pexels-photo-4307688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">John Smith</span>
                        <span className="widgetSmUserJob">Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/4307688/pexels-photo-4307688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">John Smith</span>
                        <span className="widgetSmUserJob">Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/4307688/pexels-photo-4307688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">John Smith</span>
                        <span className="widgetSmUserJob">Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/4307688/pexels-photo-4307688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">John Smith</span>
                        <span className="widgetSmUserJob">Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
