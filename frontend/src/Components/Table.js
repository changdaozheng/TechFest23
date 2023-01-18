import React, {useState, useEffect, useRef} from "react";
import Tablehead from "./Tablehead";
import Tablerow from "./Tablerow";
import { CSVLink } from 'react-csv'
import axios from 'axios';


export default function Table({sortBy}) {

    const [sorted, setSorted] = useState([{}]);
    const [data, setData] = useState([{}]);
    const csvLink = useRef()

    const headers = [
        {label: "id", key: "id"},
        {label: "sku", key: "sku"},
        {label: "make", key: "make"},
        {label: "device_name", key: "device_name"},
        {label: "start_date", key: "start_date"},
        {label: "end_date", key: "end_date"},
        {label: "week", key: "week"},
        {label: "forecast_qty", key: "forecast_qty"},
        {label: "actual_qty", key: "actual_qty"},
        {label: "status", key: "status"},
        {label: "status_note", key: "status_note"}
    ];

    useEffect(() => {
        async function fetchData (){
            const res = await axios.get("https://TechFest23.changdaozheng.repl.co/forecast");
            const dbData = await res.data;

            console.log("READING FROM DB");
            setData(dbData);
        }
        fetchData();
    }, [])

    useEffect(() => {
        async function sortData() {
            try{
                switch (sortBy){
                    case "model":
                        console.log("model sort");
                        data.sort((a,b)=>{
                            return a.device_name.localeCompare(b.device_name)
                        })
                        break;
                    case "date":
                        console.log("date sort");
                        data.sort((a,b)=>{
                            const dateA = new Date(a.start_date).getTime();
                            const dateB = new Date(b.start_date).getTime();
                            return dateB-dateA
                        })
                        break;
                    case "company":
                        console.log("company sort");
                        data.sort((a,b)=>{
                            return a.make.localeCompare(b.make)
                        })
                        break;
                    default:
                }
                setSorted(data);
                
            } catch (e) {
                console.log(e);
            }
        }
        sortData();
    },[sortBy, data])

    const downloadHandler = () => {
        csvLink.current.link.click()
    }

    return (
        <div className="flex flex-col my-20">
            <div className="download-button flex-row my-4 mr-4 ml-auto ">
                <button type="button" onClick={downloadHandler} className="flex-end py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Download as CSV</button>
                <CSVLink headers={headers} data={sorted} filename='sales_data.csv' className='hidden' ref={csvLink} target='_blank'/>

            </div>
            <div className="flex flex-col h-[500px]">
                <div className="overflow-x-auto w">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-auto border-0 border-black rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 border-collapse">
                                <Tablehead />
                                <tbody className="divide-y divide-gray-200 ">
                                    {sorted.map(item => (
                                        <Tablerow key={item.id} item={item}/>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}