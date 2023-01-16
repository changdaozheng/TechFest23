import React from 'react'

const Tablerow = (props) => {
    
    return (
        <tr>

        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap flex-col">
            <div>{props.item.start_date} <span>-</span></div>
            <div>{props.item.end_date}</div>
            
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
            {props.item.make}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
            {props.item.device_name}
        </td>
        <td className="px-6 py-4 text-sm text-left whitespace-nowrap">
            {props.item.forecast_qty}
        </td>
        <td className="px-6 py-4 text-sm text-left whitespace-nowrap">
            {props.item.actual_qty}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
            {props.item.status}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
            {props.item.status_note}
        </td>
        
        </tr>
    )
}

export default Tablerow
