import React from "react";
import { ChartBarOverview } from "./graficoTerceiro";

export default function SalesOverviewPage() {
    const costumer = [
        {
            name: "Ridde University",
            ValueIn: 12000,
            valueOut: 3400
        },
        {
            name: "City Lomeoutes",
            ValueIn: 12000,
            valueOut: 3400
        },
        {
            name: "Mary System",
            ValueIn: 12000,
            valueOut: 3400
        },
        {
            name: "Tecnology Home",
            ValueIn: 12000,
            valueOut: 3400
        },
        {
            name: "Fintech",
            ValueIn: 12000,
            valueOut: 3400
        },
        {
            name: "ZXC Marketplace",
            ValueIn: 12000,
            valueOut: 3400
        },
    ]
    return (
        <React.Fragment>
            c
            <div className="bg-white rounded-lg shadow mt-4 p-6">
                <div className="flex justify-beteen items-center w-full">
                    <p className="text-xl text-zinc-700 font-bold w-full">Invoices</p>
                    <p className="text-[#6f0480] w-full text-end">See all</p></div>
                <div className="grid grid-cols-4 gap-4 mt-5">
                    <div>
                        <p className="text-zinc-400">Draft (2)</p>
                        <p className="text-lg font-bold">1,103.02</p>
                    </div>
                    <div>
                        <p className="text-zinc-400">Awaiting Payment</p>
                        <p className="text-lg font-bold">9,111.02</p>
                    </div>
                    <div>
                        <p className="text-zinc-400">Awaiting Approval</p>
                        <p className="text-lg font-bold">-</p>
                    </div>
                    <div>
                        <p className="text-zinc-400">Overdue (5)</p>
                        <p className="text-lg font-bold text-red-400">6,103.02</p>
                    </div>

                </div>
            </div>
            <div className="bg-white rounded-lg shadow mt-4 p-6">
                <div className="flex justify-beteen items-center w-full">
                    <p className="text-xl text-zinc-700 font-bold w-full">Quotes</p>
                    <p className="text-[#6f0480] w-full text-end">See all</p></div>
                <div className="grid grid-cols-4 gap-4 mt-5">
                    <div>
                        <p className="text-zinc-400">Draft (2)</p>
                        <p className="text-lg font-bold">198.02</p>
                    </div>
                    <div>
                        <p className="text-zinc-400">Sent</p>
                        <p className="text-lg font-bold">4,450.02</p>
                    </div>
                    <div>
                        <p className="text-zinc-400">Accepted</p>
                        <p className="text-lg font-bold text-sky-500">5,311.00</p>
                    </div>
                    <div>
                        <p className="text-zinc-400">Expired</p>
                        <p className="text-lg font-bold text-red-400">-</p>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-lg shadow  p-6">
                    <p className="text-zinc-700 font-bold text-xl">MoneyComing in</p>
                    <div className="w-full p-10"><ChartBarOverview /></div>
                </div>
                <div className="bg-white rounded-lg shadow  p-6">
                    <div className="flex justify-between items-center w-full">
                        <p className="text-zinc-700 font-bold text-xl">Costumer Owing the most</p>
                        <p className="text-[#6f0480] ">See all</p></div>
                    {costumer?.map((item, key) =>
                        <div key={key} className="grid grid-cols-3 gap-2 p-5">
                            <p className="text-zinc-400 font-semibold">{item?.name}</p>
                            <p className="text-zinc-700 font-bold">{item?.ValueIn}</p>
                            <p className="text-zinc-700 font-bold">{item?.valueOut}</p>
                        </div>
                    )}
                </div>


            </div>
        </React.Fragment>
    )
}