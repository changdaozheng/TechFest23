import React from 'react'

const Tablehead = () => {
    return (
        <thead className="bg-gray-50">
        <tr>
            
            <th
                scope="col"
                className="top-0 sticky px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1 "
            >
                date
            </th>
            <th
                scope="col"
                className="top-0 sticky px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1 "
            >
                make
            </th>
            <th
                scope="col"
                className="top-0 sticky px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1 "
            >
                device_name
            </th>
            <th
                scope="col"
                className="top-0 sticky px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1 "
            >
                forecasted_qty
            </th>
            <th
                scope="col"
                className="top-0 sticky px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1 "
            >
                actual_qty
            </th>
            <th
                scope="col"
                className="top-0 sticky px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1 "
            >
                status
            </th>
            <th
                scope="col"
                className="top-0 sticky px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1 "
            >
                status_note
            </th>
     
        </tr>
    </thead>
    )
}

export default Tablehead
