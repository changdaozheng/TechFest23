import { ArcherContainer, ArcherElement } from 'react-archer';
import DoughnutChart from "./DoughtnutChart";

function DataViz(props) {
    const dateSortHandler = () =>{
        props.sortByHandler("date");
        props.tableRef.current?.scrollIntoView({behavior:'smooth'});
    } 
    const companySortHandler = () =>{
        props.sortByHandler("company");
        props.tableRef.current?.scrollIntoView({behavior:'smooth'});
    } 
    const modelSortHandler = () =>{
        props.sortByHandler("model")
        props.tableRef.current?.scrollIntoView({behavior:'smooth'});
    }
    return (
        <div class="grow basis-3/4">
            <div class="grow mt-12">
                <ArcherContainer strokeColor="red">
                    <div class="flex flex-row">
                        <div class="basis-1/3 content-center">
                            <ArcherElement
                                id="root"
                                relations={[
                                    {
                                        targetId: 'element1',
                                        targetAnchor: 'left',
                                        sourceAnchor: 'right',
                                        style: {
                                            strokeWidth: 2,
                                            endMarker: false,
                                        },
                                    },
                                    {
                                        targetId: 'element2',
                                        targetAnchor: 'left',
                                        sourceAnchor: 'right',
                                        style: {
                                            strokeWidth: 2,
                                            endMarker: false,
                                        },
                                    },
                                    {
                                        targetId: 'element3',
                                        targetAnchor: 'left',
                                        sourceAnchor: 'right',
                                        style: {
                                            strokeWidth: 2,
                                            endMarker: false,
                                        },
                                    },
                                ]}
                            >
                                <div class="">
                                    <DoughnutChart />
                                </div>
                            </ArcherElement>
                        </div>
                        <div class="basis-1/3">
                            <div class="flex flex-col content-center justify-center items-center">
                                <ArcherElement
                                    id="element1"
                                    relations={[
                                        {
                                            targetId: '',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: 2,
                                                endMarker: false,
                                            },
                                        },
                                    ]}
                                >
                                    <button type="button" onClick={dateSortHandler}>
                                        <div class="w-16 h-16 m-5 bg-gradient-to-r from-[#E30000] to-[#760000] rounded-full border-2 shadow-[0_0px_0px_5px_rgb(255,0,0)] text-center flex">
                                            <div class="text-white m-auto">
                                                Date
                                            </div>
                                        </div>
                                    </button>
                                </ArcherElement>
                                <ArcherElement
                                    id="element2"
                                    relations={[
                                        {
                                            targetId: 'col3elem1',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: 2,
                                                endMarker: false,
                                            },
                                        },
                                        {
                                            targetId: 'col3elem2',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: 2,
                                                endMarker: false,
                                            },
                                        },
                                    ]}
                                >
                                    <button type="button" onClick={companySortHandler}>
                                        <div class="w-20 h-20 m-5 bg-gradient-to-r from-[#E30000] to-[#760000] rounded-full border-2 shadow-[0_0px_0px_5px_rgb(255,0,0)] text-center flex">
                                            <div class="text-white m-auto">
                                                Company
                                            </div>
                                        </div>
                                    </button>
                                </ArcherElement>
                                <ArcherElement
                                    id="element3"
                                    relations={[
                                        {
                                            targetId: 'col4elem1',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: 2,
                                                endMarker: false,
                                            },
                                        },
                                        {
                                            targetId: 'col4elem2',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: 2,
                                                endMarker: false,
                                            },
                                        },
                                        {
                                            targetId: 'col4elem3',
                                            targetAnchor: 'left',
                                            sourceAnchor: 'right',
                                            style: {
                                                strokeWidth: 2,
                                                endMarker: false,
                                            },
                                        },
                                    ]}
                                >
                                    <button type="button" onClick={modelSortHandler}>
                                        <div class="w-16 h-16 m-5 bg-gradient-to-r from-[#E30000] to-[#760000] rounded-full border-2 shadow-[0_0px_0px_5px_rgb(255,0,0)] text-center flex">
                                            <div class="text-white m-auto">
                                                Model 
                                            </div>
                                        </div>
                                    </button>
                                </ArcherElement>
                            </div>
                        </div>
                        <div class="basis-1/3">
                            <div class="flex flex-col content-center space-y-12 justify-center items-center">
                                <div class="space-y-12">
                                    <ArcherElement
                                        id="col3elem1"
                                        relations={[
                                            {
                                                targetId: '',
                                                targetAnchor: 'left',
                                                sourceAnchor: 'right',
                                                style: {
                                                    strokeWidth: 2,
                                                    endMarker: false,
                                                },
                                            },
                                        ]}
                                    >
                                        <div id="mini-bubble" class="flex flex-row">
                                            <div class="w-12 h-12 mr-2 rounded-full border-2 border-red-700 text-sm text-center flex flex-col justify-center">
                                            65.6%
                                            </div>
                                            <div>
                                                <p>Apple</p>
                                                <p>3,746,710</p>
                                            </div>
                                        </div>
                                    </ArcherElement>
                                    <ArcherElement
                                        id="col3elem2"
                                        relations={[
                                            {
                                                targetId: '',
                                                targetAnchor: 'left',
                                                sourceAnchor: 'right',
                                                style: {
                                                    strokeWidth: 2,
                                                    endMarker: false,
                                                },
                                            },
                                        ]}
                                    >
                                        <div id="mini-bubble" class="flex flex-row">
                                            <div class="w-12 h-12 mr-2 rounded-full border-2 border-red-700 text-sm text-center flex flex-col justify-center">
                                                34.4%
                                            </div>
                                            <div>
                                                <p>Samsung</p>
                                                <p>1,968,590</p>
                                            </div>
                                        </div>
                                    </ArcherElement>
                                </div>
                                <div class="space-y-12 justify-center items-center">
                                    <ArcherElement
                                        id="col4elem1"
                                        relations={[
                                            {
                                                targetId: '',
                                                targetAnchor: 'left',
                                                sourceAnchor: 'right',
                                                style: {
                                                    strokeWidth: 2,
                                                    endMarker: false,
                                                },
                                            },
                                        ]}
                                    >
                                        <div id="mini-bubble" class="flex flex-row">
                                            <div class="w-12 h-12 mr-2 rounded-full border-2 border-red-700 text-sm text-center flex flex-col justify-center">
                                                37.4%
                                            </div>
                                            <div>
                                                <p>Apple Iphone 13</p>
                                                <p>2,138,410</p>
                                            </div>
                                        </div>
                                    </ArcherElement>
                                    <ArcherElement
                                        id="col4elem2"
                                        relations={[
                                            {
                                                targetId: '',
                                                targetAnchor: 'left',
                                                sourceAnchor: 'right',
                                                style: {
                                                    strokeWidth: 2,
                                                    endMarker: false,
                                                },
                                            },
                                        ]}
                                    >
                                        <div id="mini-bubble" class="flex flex-row">
                                            <div class="w-12 h-12 mr-2 rounded-full border-2 border-red-700 text-sm text-center flex flex-col justify-center">
                                            28.1%
                                            </div>
                                            <div>
                                                <p>Apple Iphone 14</p>
                                                <p>1,608,300</p>
                                            </div>
                                        </div>
                                    </ArcherElement>
                                    <ArcherElement
                                        id="col4elem3"
                                        relations={[
                                            {
                                                targetId: '',
                                                targetAnchor: 'left',
                                                sourceAnchor: 'right',
                                                style: {
                                                    strokeWidth: 2,
                                                    endMarker: false,
                                                },
                                            },
                                        ]}
                                    >
                                        <div id="mini-bubble" class="flex flex-row">
                                            <div class="w-12 h-12 mr-2 rounded-full border-2 border-red-700 text-sm text-center flex flex-col justify-center">
                                                30.9%
                                            </div>
                                            <div>
                                                <p>Galaxy S22</p>
                                                <p>1,768,260</p>
                                            </div>
                                        </div>
                                    </ArcherElement>
                                </div>
                            </div>
                        </div>
                    </div>
                </ArcherContainer>
            </div >
        </div>

    )
};

export default DataViz;