import React, { useState } from "react";

function Textbox(props) {
    const [amount, setAmount] = useState(0);

    const onChangeHandler = event => {
       setAmount(event.target.value);
    };

    return(
        <div class="relative">
            <label for="number" class="sr-only"> Amount </label>
            <input
            type="number"
            id="number"
            value={amount}
            onChange={onChangeHandler}
            class="w-full text-center rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm"
            />
        
            <span class="absolute inset-y-0 right-0 grid w-10 place-content-center">
                <button
                    type="button"
                    class="rounded-full bg-rose-600 p-0.5 text-white hover:bg-rose-700"
                    onClick={()=>props.setChange([props.name,amount])}
                >
                    <span class="sr-only">Submit</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-4 w-4"
                    >
                    <path
                        d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                    />
                    </svg>
                </button>
            </span>
        </div>
    )
}
function TextboxTwo(props) {
    const [amount, setAmount] = useState(2);

    const onChangeHandler = event => {
        if (event.target.value > 10)
        {
            setAmount(10);
        }
        else if (event.target.value < 2)
        {
            setAmount(2);
        }
        else{
            setAmount(event.target.value);
        }
    };

    return(
        <div class="relative">
            <label for="number" class="sr-only"> Amount </label>
            <input
            type="number"
            id="number"
            value={amount}
            onChange={onChangeHandler}
            class="w-full text-center rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm"
            />
        
            <span class="absolute inset-y-0 right-0 grid w-10 place-content-center">
                <button
                    type="button"
                    class="rounded-full bg-rose-300  text-white hover:bg-rose-400"
                    onClick={()=>props.setChange(amount)}
                >
                    <svg fill="#000000" height="800px" width="800px" version="1.1" id="XMLID_122_" xmlns="http://www.w3.org/2000/svg"  
                        viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve" class="h-6 w-6">
                        <g id="upgrade">
                            <g>
                                <path d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10
                                    S17.5,2,12,2z M13,18h-2V9.4l-3.3,3.3l-1.4-1.4L12,5.6l5.7,5.7l-1.4,1.4L13,9.4V18z"/>
                            </g>
                        </g>
                    </svg>
                </button>
            </span>
        </div>
    )
}

function TextboxThree(props) {
    const [amount, setAmount] = useState(0);

    const onChangeHandler = event => {
       setAmount(event.target.value);
    };

    return(
        <div class="relative">
            <label for="number" class="sr-only"> Amount </label>
            <input
            type="number"
            id="number"
            value={amount}
            onChange={onChangeHandler}
            class="w-full text-center rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm"
            />
        
            <span class="absolute inset-y-0 right-0 grid w-10 place-content-center">
                <button
                    type="button"
                    class="rounded-full bg-rose-600 p-0.5 text-white hover:bg-rose-700"
                    onClick={()=>props.setChange([props.name,amount])}
                >
                    <span class="sr-only">Submit</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-4 w-4"
                    >
                    <path
                        d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                    />
                    </svg>
                </button>
            </span>
        </div>
    )
}
export {Textbox,TextboxTwo, TextboxThree};