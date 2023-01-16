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
                    class="rounded-full bg-rose-600 p-0.5 text-white hover:bg-rose-700"
                    onClick={()=>props.setChange(amount)}
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
export {Textbox,TextboxTwo};