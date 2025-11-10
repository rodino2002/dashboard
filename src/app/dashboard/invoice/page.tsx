import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import invoice from "./invoice.json"

export default function InvoicePage() {

    return (
        <div>
            <div className="p-5 flex justify-between w-full items-center">
                <p className="text-2xl text-zinc-700 font-bold w-full">Invoices </p>
                <div className="flex justify-end w-full items-center space-x-4">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a items" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="30">30</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="80">80</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <button className="p-2 ring-1 ring-[#6f0480] rounded-lg text-[#6f0480] w-[25%] text-sm cursor-pointer">Send Statments</button>
                    <button className="p-2 ring-1 ring-[#6f0480] rounded-lg text-[#6f0480] w-[20%] text-sm cursor-pointer">Export</button>
                    <button className="p-2 ring-1 ring-[#6f0480] rounded-lg text-[#6f0480] w-[20%] text-sm cursor-pointer">Import</button>
                    <button className="p-2 text-white bg-[#6f0480] rounded-lg w-[20%] text-sm cursor-pointer">New Import</button>
                </div>
            </div>
            <div className="mt-5 p-2">
                <Table className="bg-white rounded-lg p-4">
                    <TableHeader className="bg-white ">
                        <TableRow>
                            <TableHead className="text-zinc-400">Number</TableHead>
                            <TableHead className="text-zinc-400">Ref</TableHead>
                            <TableHead className="text-zinc-400">To</TableHead>
                            <TableHead className="text-zinc-400">Date</TableHead>
                            <TableHead className="text-zinc-400">Due Date</TableHead>
                            <TableHead className="text-zinc-400" >Paid</TableHead>
                            <TableHead className="text-zinc-400">Due</TableHead>
                            <TableHead className="text-zinc-400">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoice.map((item, index) => (
                            <TableRow
                                key={item.number}
                                className={`transition-colors ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } hover:bg-muted/60`}
                            >
                                <TableCell className="font-medium">{item.number}</TableCell>
                                <TableCell>{item.ref}</TableCell>
                                <TableCell className="font-medium">
                                    <div className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" className="cursor-pointer lucide lucide-file-spreadsheet-icon lucide-file-spreadsheet">
                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M8 13h2" /><path d="M14 13h2" /><path d="M8 17h2" /><path d="M14 17h2" /></svg>
                                        <p>{item.to}</p>
                                    </div>
                                </TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>{item.due_date}</TableCell>
                                <TableCell className="text-right">{item.paid.toFixed(2)}</TableCell>
                                <TableCell className="text-right">{item.due.toFixed(2)}</TableCell>
                                <TableCell>
                                    <span
                                        className={`px-2 py-1 text-xs font-semibold rounded-full ${item.status === "Paid"
                                            ? "bg-green-100 text-green-700"
                                            : item.status === "Awaiting Payment"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </div>
        </div>
    )
}