import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ChartAreaInteractive } from "./chart"

export default function CastFlowPage() {
    return (
        <div>
            <div className="p-5 flex justify-between w-full items-center">
                <p className="text-2xl text-zinc-700 font-bold w-full">Cash Flow </p>
            </div>
            <div className=" p-4 rounded-lg">
                <div className="p-5 flex justify-between w-full items-center bg-white">

                    <p className="text-lg text-zinc-700 font-bold w-full">Project balance from invoices and bills </p>

                    <div className="flex justify-end w-full items-center space-x-4">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a items" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="business">Business Bank Account</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a items" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="all">Some datas</SelectItem>
                                    <SelectItem value="30">Next 30 days</SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                </div>

                <div className="flex space-x-4 bg-white p-5 rounded-lg dhadow">
                    <div className=" w-[50%] ring-1 ring-zinc-300 rounded-lg relative">
                        <div className="space-y-4 p-4">
                            <p className="font-semibold text-zinc-700 ">30 days summary</p>
                            <div className="flex justify-between w-full items-center">
                                <p>Today's</p>
                                <p className="font-semibold">12500</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p>Today's</p>
                                <p className="font-semibold">12500</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p>Today's</p>
                                <p className="font-semibold">12500</p>
                            </div>
                        </div>
                        <footer className="flex justify-between bg-zinc-100 absolute top-[73%] w-full p-4 rounded-b-lg">
                            <div>
                                <p>Project balance</p>
                                <p className="text-zinc-400">In Mar 2 </p>
                            </div>
                            <div><p className="font-bold text-3xl">43.200</p></div>
                        </footer>
                    </div>
                    <div className="w-full">
                        <ChartAreaInteractive />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-5">
                    <div className=" ring-1 ring-zinc-300 rounded-lg relative">
                        <div className="space-y-4 p-4">
                            <p className="font-semibold text-zinc-700 ">30 days summary</p>
                            <div className="flex justify-between w-full items-center">
                                <p>Today's</p>
                                <p className="font-semibold">12500</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p>Today's</p>
                                <p className="font-semibold">12500</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p>Today's</p>
                                <p className="font-semibold">12500</p>
                            </div>
                        </div>
                        <footer className="flex justify-between bg-zinc-100 absolute top-[73%] w-full p-4 rounded-b-lg">
                            <div>
                                <p>Project balance</p>
                                <p className="text-zinc-400">In Mar 2 </p>
                            </div>
                            <div><p className="font-bold text-3xl">43.200</p></div>
                        </footer>
                    </div>
                    <div className=" ring-1 ring-zinc-300 rounded-lg relative">
                        <div className="space-y-4 p-4">
                            <p className="font-semibold text-zinc-700 ">30 days summary</p>
                            <div className="flex justify-between w-full items-center">
                                <p>Today's</p>
                                <p className="font-semibold">12500</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p>Today's</p>
                                <p className="font-semibold">12500</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p>Today's</p>
                                <p className="font-semibold">12500</p>
                            </div>
                        </div>
                        <footer className="flex justify-between bg-zinc-100 absolute top-[73%] w-full p-4 rounded-b-lg">
                            <div>
                                <p>Project balance</p>
                                <p className="text-zinc-400">In Mar 2 </p>
                            </div>
                            <div><p className="font-bold text-3xl">43.200</p></div>
                        </footer>
                    </div>
                    <div className=" ring-1 ring-zinc-300 rounded-lg relative">
                        <div className="space-y-4 p-4">
                            <p className="font-semibold text-zinc-700 ">30 days summary</p>
                            <div className="flex justify-between w-full items-center">
                                <p>Today's</p>
                                <p className="font-semibold">12500</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p>Today's</p>
                                <p className="font-semibold">12500</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p>Today's</p>
                                <p className="font-semibold">12500</p>
                            </div>
                        </div>
                        <footer className="flex justify-between bg-zinc-100 absolute top-[73%] w-full p-4 rounded-b-lg">
                            <div>
                                <p>Project balance</p>
                                <p className="text-zinc-400">In Mar 2 </p>
                            </div>
                            <div><p className="font-bold text-3xl">43.200</p></div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}