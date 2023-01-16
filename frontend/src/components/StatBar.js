
import React from "react";
import fileTray from "../Assets/fileTray.png"
function StatBar(props) {
    return(
        <div
        class="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 w-64"
        >
        <span class="rounded-full bg-blue-100 p-3 text-blue-600">
            <img src={fileTray} alt="File SVG" class="w-6 h-6"></img>
        </span>

        <div>
            {props.shortfall ? <p class="text-xl font-medium text-red-600">{props.title[0]} {props.value[0]}</p>
                : <p class="text-xl font-medium text-gray-900">{props.title[0]} {props.value[0]}</p>
            }
            <p class="text-xs text-gray-500">{props.title[1]} {props.value[1]}</p>
        </div>
        </div>
    )
}
export default StatBar;