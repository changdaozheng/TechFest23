import React from "react";
import fileTray from "../assets/fileTray.png"
import {Textbox} from "../components/Textbox";

const ResupplyModal = props => {
    let render = [];
    for (let i=0;i<props.shortfallArr.length;i++)
    {
        render.push(
            <div class="w-2/3 py-2 my-2 h-16 flex justify-evenly items-center justify-self-center bg-slate-200 rounded-full">
                <p class="text-center">{props.shortfallArr[i]}</p>
                <Textbox setChange={c=>props.setStockChange(c)} name={props.shortfallArr[i]}/>
            </div>
        )
    }

    if (!props.show){
        return null;
    }
    else {
        return(
            <div class="fixed left-0 top-0 right-0 bottom-0 bg-black/5 z-30" onClick={props.onClose}>
                <div onClick={e=>e.stopPropagation()}
                class="fixed left-1/4 w-1/2 top-1/4 h-1/2 block rounded-xl border bg-gray-100 border-gray-100 p-8 shadow-xl"
                >
                    <span
                        class="absolute right-4 top-4 rounded-full bg-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                        {props.make}
                    </span>

                    <div class="flex-col relative mt-4 h-full w-full items-center">
                        <div class="rounded-full bg-blue-100 py-4 flex justify-center align-middle">
                            <img src={fileTray} alt="File SVG" class="w-10 h-10"></img>
                            <h3 class="text-xl ml-4 mt-2 font-bold text-gray-900">Resupply</h3>
                        </div>
                        <div class="flex w-full h-44 flex-col items-center">
                            {render}
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
export default ResupplyModal;