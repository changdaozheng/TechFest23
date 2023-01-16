import React, { useCallback, useEffect, useState } from "react";
import Header from "../Components/Header";

function Datalogger() {
    const [data,setData] = useState({
        make: "",
        device:"",
        demand:0,
        week:0,
        start_date:"",
    });
    const [make, setMake] = useState("-");
    const [device, setDevice] = useState("-");
    const [demand, setDemand] = useState();
    const [week, setWeek] = useState();
    const [startDate, setStartDate] = useState("");
    const [renderArr, setRenderArr] = useState([]);

    const devicesRender = useCallback(() => {
        let render = [];
        if (make === "Apple"){
            render.push(
                <select class="w-32 mb-2" value={device} onChange={deviceHandler}>
                    <option value="">-</option>
                    <option value="iPhone 13">iPhone 13</option>
                    <option value="iPhone 14">iPhone 14</option>
                </select>
            )
        }
        else if (make === "Samsung"){
            render.push(
                <select class="w-32 mb-2" value={device} onChange={deviceHandler}>    
                    <option value="">-</option>                
                    <option value="Galaxy S21">Galaxy S21</option>
                    <option value="Galaxy S22">Galaxy S22</option>
                    <option value="Galaxy S23">Galaxy S23</option>
                </select>
            )
        }
        else{
            render.push(
                <select class="w-32 mb-2" value={device} onChange={deviceHandler}>    
                    <option value="">-</option>
                </select>
            )
        }
        return render;
    }, [make,device])
    
    useEffect(()=>{
        setRenderArr(devicesRender());
    },[make,device,devicesRender])

    const makeHandler = (event) =>{
        setMake(event.target.value);
    }
    const deviceHandler = (event) =>{
        setDevice(event.target.value);
    }
    const demandHandler = (event) =>{
        setDemand(event.target.value);
    }
    const weekHandler = (event) =>{
        setWeek(event.target.value);
    }
    const startHandler = (event) =>{
        setStartDate(event.target.value);
    }

    const submitHandler = (event) =>{
        // console.log(make,device,demand,week,startDate)
        setData({
            make:make,
            device:device,
            demand:demand,
            week:week,
            start_date:startDate
        })
    }

    useEffect(()=>{
        if (data.make!==""&&data.device!==""&&data.demand!==0 && data.week!==0 && data.start_date!==""){
            console.log(data)
        }
    }, [data])

    return(
        <div>
            <Header />
            <div class="flex-col w-screen h-screen pt-20 ">
                <form class="flex flex-col bg-red-200 h-full items-center p-4" onSubmit={submitHandler}>
                    <label>Make</label>
                    <select class="w-32 mb-2" value={make} onChange={makeHandler}>
                        <option value="-">-</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                    </select>
                    <label>Device</label>
                    {renderArr}
                    <label>Demand</label>
                    <input class="w-32 mb-2" value={demand} onChange={demandHandler}/>
                    <label>Week</label>
                    <input class="w-32 mb-2" value={week} onChange={weekHandler}/>
                    <label>Start Date</label>
                    <input class="w-32 mb-2" value={startDate} onChange={startHandler}/>
                    <button type="submit" onClick={submitHandler} class="rounded-full px-2 py-1 text-white bg-red-400 hover:bg-red-500">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Datalogger;