
import React from "react";
import fileTray from "../Assets/fileTray.png"
function StatBar(props) {
    let shortfall = props.value[0] - props.value[1];
    if (shortfall < 0){
        props.setShortfall(true);
        props.setShortfallArr(oldarr=>[...oldarr,props.name]);
    }
    return(
        <div
        class="flex items-center gap-4 rounded-lg border border-gray-100 bg-white px-4 py-3 my-1.5 w-64"
        >
            <span class="rounded-full bg-blue-100 p-3 text-blue-600">
                <img src={fileTray} alt="File SVG" class="w-8 h-6"></img>
            </span>
            <div class="w-full">
                <div class="flex justify-between">
                    <p class="text-lg font-normal text-gray-900">{props.name}</p>
                    {props.value[1]==0? <p class="text-red-500 text-lg ">EOL</p>:null}
                </div>
                <p class="text-xs text-gray-500">{props.sku}</p>
                {shortfall < 0 ? <p class="text-lg font-normal text-red-600">{props.title[0]}: {props.value[0]}</p>
                    : <p class="text-lg font-normal text-gray-900">{props.title[0]}: {props.value[0]}</p>
                }
                <p class="text-xs text-gray-500">{props.title[1]}: {props.value[1]}</p>
            </div>
        </div>
    )
}
export default StatBar;