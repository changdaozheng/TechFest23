import React, { useState } from "react";
import fileTray from "../Assets/fileTray.png"
import { Textbox, TextboxThree } from "../Components/Textbox";

const NewCampaign = props => {

    const [data, setData] = useState({
        make: "",
        offerDays: 0,
        offerAmount: 0,
        start_date: "",
    });
    const [maker, setMaker] = useState("-");
    const [offerDays, setOfferDays] = useState("-");
    const [offerAmount, setOfferAmount] = useState();
    const [startDate, setStartDate] = useState("");

    const makeHandler = (event) => {
        setMaker(event.target.value);
    }
    const offerDaysHandler = (event) => {
        setOfferDays(event.target.value);
    }
    const offerAmountHandler = (event) => {
        setOfferAmount(event.target.value);
    }

    const startHandler = (event) => {
        setStartDate(event.target.value);
    }

    const submitHandler = (event) => {
        // console.log(make,device,demand,week,startDate)
        setData({
            maker: maker,
            offerDays: offerDays,
            offerAmount: offerAmount,
            start_date: startDate
        })
    }

    if (!props.show) {
        return null;
    }
    else {
        return (
            <div class="fixed left-0 top-0 right-0 bottom-0 bg-black/5 z-30" onClick={props.onClose}>
                <div onClick={e => e.stopPropagation()}
                    class="fixed left-1/4 w-1/2 top-1/4 h-1/2 block rounded-xl border bg-gray-100 border-gray-100 p-8 shadow-xl"
                >
                    <span
                        class="absolute right-4 top-4 rounded-full bg-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                        Device Offer
                    </span>

                    <div class="flex-col relative mt-4 h-full w-full items-center">
                        <div class="rounded-full bg-blue-100 py-4 flex justify-center align-middle">
                            <img src={fileTray} alt="File SVG" class="w-10 h-10"></img>
                            <h3 class="text-xl ml-4 mt-2 font-bold text-gray-900">New Campaign</h3>
                        </div>
                        <div class="flex w-full h-44 flex-col items-center">
                            <form class="flex flex-col items-left" onSubmit={submitHandler}>
                                <div>
                                    <label class="mr-1">Make</label>
                                    <select class="w-32 m-2 ml-16" value={maker} onChange={makeHandler}>
                                        <option value="-">-</option>
                                        <option value="Apple">Apple</option>
                                        <option value="Samsung">Samsung</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Offer Days</label>
                                    <input class="w-32 m-2 ml-8" value={offerDays} onChange={offerDaysHandler} />
                                </div>
                                <div>
                                    <label>Offer Amount</label>
                                    <input class="w-32 m-2" value={offerAmount} onChange={offerAmountHandler} />
                                </div>
                                <div>
                                    <label class="mr-1">Start Date</label>
                                    <input class="w-32 m-2 ml-8" value={startDate} onChange={startHandler} />
                                </div>
                                <button type="submit" onClick={submitHandler} class="rounded-full px-2 text-white bg-red-400 hover:bg-red-500">Submit</button>
                            </form>
                        </div>
                        <button onClick={props.onClose} class=" absolute bottom-4 rounded-full bg-red-100 px-3 py-1.5 text-xs font-medium text-red-600">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewCampaign;