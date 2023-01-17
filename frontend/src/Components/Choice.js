import React from "react";

function Choice(props) {
    let buttonRender = [];

    for (let i=0;i<3;i++){
        if (props.item[i] != null){
            buttonRender.push(
                <button
                    class="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 
                    focus:bg-white focus:text-blue-500 focus:shadow-sm"
                    onClick={()=>props.setMake(props.item[i])}
                >
                    {props.item[i]}
                </button>
            )
        }
    }
    return (
        <div class="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1 my-2">
            {buttonRender}
        </div>
    );    
};

export default Choice;