
import React from "react";
import fileTray from "../assets/fileTray.png"
function StatBar(props) {
    let shortfall = props.value[0] - props.value[1];
    if (shortfall < 0){
        props.setShortfall(true);
        props.setShortfallArr(oldarr=>[...oldarr,props.name]);
    }
    return(
        <div
        class="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 my-2 w-64"
        >
            <span class="rounded-full bg-blue-100 p-3 text-blue-600">
                <img src={fileTray} alt="File SVG" class="w-6 h-6"></img>
            </span>
            <div>
                <p class="text-lg font-medium text-gray-900">{props.name}</p>
                <p class="text-xs text-gray-500">{props.sku}</p>
                {shortfall < 0 ? <p class="text-lg font-medium text-red-600">{props.title[0]}: {props.value[0]}</p>
                    : <p class="text-lg font-medium text-gray-900">{props.title[0]}: {props.value[0]}</p>
                }
                <p class="text-xs text-gray-500">{props.title[1]}: {props.value[1]}</p>
            </div>
        </div>
    )
}
export default StatBar;