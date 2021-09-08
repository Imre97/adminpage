import React from 'react'
import './widgetlg.css'

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={"widgetLgButton "  + type} >{type}</button>
    }


    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tbody>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="WidgetLgUser">
                            <img src="https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar" className="widgetLgImg" />
                            <span className="widgetLgName">Samantha Jhonson</span>
                        </td>
                        <td className="widgetLgDate">23 July 2021</td>
                        <td className="widgetLgAmount">$134,56</td>
                        <td className="widgetLgStatus"><Button type="Approved"/></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="WidgetLgUser">
                            <img src="https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar" className="widgetLgImg" />
                            <span className="widgetLgName">Samantha Jhonson</span>
                        </td>
                        <td className="widgetLgDate">23 July 2021</td>
                        <td className="widgetLgAmount">$134,56</td>
                        <td className="widgetLgStatus"><Button type="Declined"/></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="WidgetLgUser">
                            <img src="https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar" className="widgetLgImg" />
                            <span className="widgetLgName">Samantha Jhonson</span>
                        </td>
                        <td className="widgetLgDate">23 July 2021</td>
                        <td className="widgetLgAmount">$134,56</td>
                        <td className="widgetLgStatus"><Button type="Pending"/></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="WidgetLgUser">
                            <img src="https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar" className="widgetLgImg" />
                            <span className="widgetLgName">Samantha Jhonson</span>
                        </td>
                        <td className="widgetLgDate">23 July 2021</td>
                        <td className="widgetLgAmount">$134,56</td>
                        <td className="widgetLgStatus"><Button type="Approved"/></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="WidgetLgUser">
                            <img src="https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="avatar" className="widgetLgImg" />
                            <span className="widgetLgName">Samantha Jhonson</span>
                        </td>
                        <td className="widgetLgDate">23 July 2021</td>
                        <td className="widgetLgAmount">$134,56</td>
                        <td className="widgetLgStatus"><Button type="Approved"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
