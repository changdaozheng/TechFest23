import React, {  useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios"

function MLPage() {
    const [data,setData] = useState({
        isApple:-1,
        week_of_interest:"",
        week_to_launch:"",
        offer:-1,
        week_to_eol:-1
    });
    const [isApple, setIsApple] = useState(""); // 0/1
    const [weekInterest, setWeekInterest] = useState(""); //YYYY,WW
    const [weekLaunch, setWeekLaunch] = useState(""); //YYYY,WW
    const [offer, setOffer] = useState(); // int
    const [weekEol, setWeekEol] = useState(""); // YYYY,
    const [res, setRes] = useState("")//

    const appleHandler = (event) =>{
        setIsApple(event.target.value);
    }
    const weekInterestHandler = (event) =>{
        setWeekInterest(event.target.value);
    }
    const weekLaunchHandler = (event) =>{
        setWeekLaunch(event.target.value);
    }
    const offerHandler = (event) =>{
        setOffer(event.target.value);
    }
    const weekEolHandler = (event) =>{
        setWeekEol(event.target.value);
    }

    const submitHandler = async (event) =>{
        event.preventDefault();
        setData({
            isApple:isApple,
            week_of_interest:weekInterest,
            week_to_launch:weekLaunch,
            offer:offer,
            week_to_eol:weekEol
        })
    }


    useEffect(()=>{

        async function fetch(){
            if (data.isApple!==-1&&data.week_of_interest!==""&&data.week_to_launch!=="" && data.offer!==-1 && data.week_to_eol!==""){
                console.log(data)
            
            try{
                const response = await axios.post("https://SYDMTechFest23.ranchu2000.repl.co/predict", data);
                setRes(response); 
                console.log("triggered");
            } catch (e) {
                console.log(e);
            } finally {
                console.log(res)
            }}
        }
        fetch();
        
    }, [data])

    return(
        <div>
            <Header />
            <div class="flex-col w-screen h-screen pt-20 ">
                <form class="flex flex-col bg-red-200 h-full items-center p-4" >

                    <label>isApple</label>
                    <input class="w-32 mb-2" type="number" value={isApple} placeholder={isApple} onChange={appleHandler}/>
                    <label>Week of Interest</label>
                    <input class="w-32 mb-2" value={weekInterest} onChange={weekInterestHandler}/>
                    <label>Weeks to Launch</label>
                    <input class="w-32 mb-2" value={weekLaunch} onChange={weekLaunchHandler}/>
                    <label>Offer</label>
                    <input class="w-32 mb-2" type="number" value={offer} onChange={offerHandler}/>
                    <label>Weeks to EOL</label>
                    <input class="w-32 mb-2" value={weekEol} onChange={weekEolHandler}/>
                    <button type="submit" onClick={submitHandler} class="rounded-full px-2 py-1 text-white bg-red-400 hover:bg-red-500">Submit</button>
                    
                    <div className="m-6">
                         {res === "" ? "" : <p> Forecasted Demand : {res.data.output}</p>}
                    </div>

                </form>
                
            </div>
        </div>
    )
}
export default MLPage;