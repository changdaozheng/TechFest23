import React, { useState, useEffect, useMemo, useCallback } from "react";
import Choice from "../Components/Choice";
import StatBar from "../Components/StatBar";
import ResupplyModal from "../Modals/ResupplyModal";
// import { Link } from "react-router-dom";
import DoughnutChart from "../Components/DoughtnutChart";

function Dashboard(){
    const [showModal, setShowModal] = useState(false);
    const items = ["Apple", "Samsung"];
    const [make, setMake] = useState("");
    const [arr, setArr] = useState([]); // for rendering
    const [shortfallArr, setShortfallArr] = useState([]);
    const [shortfall, setShortfall] = useState(false);
    const [stockChange, setStockChange] = useState(["",0]);
    const [update, setUpdate] = useState(false);

    const devices = useMemo(()=>({
        "Apple" : [["APPLMD211000", "iPhone 13", 20000, 10000], ["APPLMD221000", "iPhone 14", 40000, 50000]],
        "Samsung" : [["SAMGSMD211000", "Galaxy S21", 10000, 5000], ["SAMGSMD221000", "Galaxy S22", 12000,8000], ["SAMGSMD231000", "Galaxy S23", 50000, 70000]],
        "":[]
    }),[]);

    const renderChange = useCallback(() => {
        let render = [];
        setShortfall(false);
        setUpdate(false);
        for (let i=0;i<devices[make].length;i++){
            render.push(
                <StatBar title={["In-Stock", "Demand Forecast"]} setShortfall={shortfall=>setShortfall(shortfall)} setShortfallArr={shortfallArr=>setShortfallArr(shortfallArr)}
                    sku={devices[make][i][0]} name={devices[make][i][1]} value={[devices[make][i][2], devices[make][i][3]]}
                />
            )
        }
        return render;
    }, [devices,make]);
    
    useEffect(()=>{
        setShortfallArr([]); 
        setArr(renderChange()); // for rendering
    },[make, renderChange, update]);

    const changeStockHandler = useCallback(()=> {
        for (let i=0;i<devices[make].length;i++){
            if (devices[make][i][1] === stockChange[0]){
                devices[make][i][2] += parseInt(stockChange[1]);
                setStockChange(["",0]);
                setUpdate(true);
            }
        }
    },[devices,make,stockChange])

    useEffect(()=>{
        changeStockHandler();
    }, [stockChange,changeStockHandler]);

    return (
        <div class="relative bg-gray-100 h-screen">
            <div class="h-min pb-20">
                <h1 class="text-center mb-2">Basic Dashboard</h1>
            </div>
            <div id="Inventory" class="flex flex-col w-1/4 h-screen bg-slate-200 absolute top-0 left-0 items-center">
                <h2 class="text-lg bg-slate-100 text-center w-full py-1 mt-4 ">Inventory</h2>

                    <Choice item={items} setMake={make=>setMake(make)}/>
                    <span class="h-1 w-3/5 mt-1 rounded bg-slate-400"/>
                    {make === "" ? null :
                        <>
                            <h3 class="text-base ">{make}</h3>
                            {arr}
                        </>
                    }
                    {shortfall && make !== "" ?
                        <button
                        class="inline-block rounded-md px-4 py-2 mt-4 text-base text-gray-700 bg-red-400 hover:text-gray-800 hover:bg-rose-300 active:text-gray-900 active:bg-red-400 active:shadow-sm"
                        onClick={()=>setShowModal(true)}
                        >
                            Resupply
                        </button>
                        :null}
                <ResupplyModal onClose={()=>setShowModal(false)} show={showModal} make={make} shortfallArr={shortfallArr}
                    setStockChange={c=>setStockChange(c)}
                />
            </div>
        </div>
    )
}

export default Dashboard;
