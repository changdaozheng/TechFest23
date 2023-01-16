import React, { useState, useEffect } from "react";
import Choice from "../Components/Choice";
import StatBar from "../Components/StatBar";
// import { Link } from "react-router-dom";
import DoughnutChart from "../Components/DoughtnutChart";

function Dashboard(){
    const items = ["Apple", "Samsung"];
    const [curStock, setCurStock] = useState();
    const [forecastStock, setForecastStock] = useState();
    const [shortfall, setShortfall] = useState(false);
    const [make, setMake] = useState("");
    
    const appleStock = 20000;
    const samStock = 30000;
    const appleFore = 10000;
    const samFore = 40000;

    useEffect(()=>{
        if (make === "Apple"){
            setCurStock(appleStock);
            setForecastStock(appleFore);
        }
        else if (make === "Samsung"){
            setCurStock(samStock);
            setForecastStock(samFore);
        }
        
        if (curStock >= forecastStock){
            setShortfall(false);
        }
        else{
            setShortfall(true);
        }
    }, [make,curStock,forecastStock])


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
                            <StatBar title={["In-Stock", "Forecasted Demand"]} value={[curStock, forecastStock]} shortfall={shortfall}/>
                        </>
                    }
                    {shortfall && make !== "" ?
                        <button
                        class="inline-block rounded-md px-4 py-2 mt-4 text-base text-gray-700 bg-red-400 hover:text-gray-800 hover:bg-rose-300 active:text-gray-900 active:bg-red-400 active:shadow-sm"
                        >
                            Resupply
                        </button>
                        :null}
            </div>
        </div>
    )
}

export default Dashboard;
