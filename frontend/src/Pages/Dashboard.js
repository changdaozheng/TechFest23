import React, { useState, useEffect } from "react";
import Dropdown from "../Components/Dropdown";
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
        if (make == "Apple"){
            setCurStock(appleStock);
            setForecastStock(appleFore);
        }
        else if (make == "Samsung"){
            setCurStock(samStock);
            setForecastStock(samFore);
        }
        if (curStock >= forecastStock){
            setShortfall(false);
        }
        else{
            setShortfall(true);
        }
    }, [make])


    return (
        <div class="relative bg-gray-100 h-screen">
            <div class="h-min pb-20">
                <h1 class="text-center mb-2">Basic Dashboard</h1>
            </div>
            <div id="Inventory" class="flex flex-col w-1/4 h-screen bg-slate-300 absolute top-0 left-0 items-center">
                <h2 class="text-lg bg-slate-200 rounded-lg px-4 py-1">Inventory</h2>
                <Dropdown item={items} setMake={make=>setMake(make)}/>
                <StatBar title={["In-Stock", "Forecasted Demand"]} value={[curStock, forecastStock]} shortfall={shortfall}/>
            </div>
        </div>
    )
}

export default Dashboard;
