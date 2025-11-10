"use client";
import { use, useState } from "react";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

interface HeaderProps {
  onToggleSidebar: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false);

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b bg-card">
      {/* Esquerda - logo e botão menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-muted lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="bg-white relative block rounded-lg items-center w-[310px] h-[40px]">
          <svg className="absolute inset-y-[11px] ml-2 left-0 flex items-center cursor-pointer" width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1879 15.9746C15.8264 14.4284 17.5225 10.2257 15.9762 6.5875C14.4298 2.94933 10.2267 1.25343 6.58814 2.79962C2.94961 4.34581 1.25355 8.54857 2.79989 12.1867C4.34623 15.8249 8.54939 17.5208 12.1879 15.9746Z" stroke="#787e8dff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.4473 14.4486L19.9991 20.0007" stroke="#787e8dff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>

          <input type="search" placeholder="Search..."

            className="p-2 w-[310px] h-[40px] bg-zinc-100 rounded-lg ring-1 ring-[#EDEFF6] focus:ring-1 focus:ring-zinc-400 
            w-full focus:outline-none text-sm text-[#8998B1] pl-8" />
        </div>
      </div>

      {/* Direita - ações */}
      <div className="flex items-center gap-4">

        <div className="flex h-7 text-zinc-400 items-center space-x-2 rounded-lg p-2 ring-1 ring-zinc-200 cursor-pointer">
          <span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.75 12C19.75 12.414 19.414 12.75 19 12.75H12.75V19C12.75 19.414 12.414 19.75 12 19.75C11.586 19.75 11.25 19.414 11.25 19V12.75H5C4.586 12.75 4.25 12.414 4.25 12C4.25 11.586 4.586 11.25 5 11.25H11.25V5C11.25 4.586 11.586 4.25 12 4.25C12.414 4.25 12.75 4.586 12.75 5V11.25H19C19.414 11.25 19.75 11.586 19.75 12Z" fill="currentColor" stroke="currentColor" stroke-width="0.8" />
          </svg>
          </span>
          <p className="text-sm text-zinc-500 font-semibold">Add</p>
        </div>

        <div className="bg-zinc-400 grid place-items-center font-seminold text-md rounded-full w-6 h-6 text-white cursor-pointer">?</div>
        <div className="bg-zinc-400 grid place-items-center rounded-full w-6 h-6 cursor-pointer"><svg width="25" height="25" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="46" height="46" rx="12" fill-opacity="0.1" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2353 33.212C20.8086 32.8795 21.5429 33.0746 21.8754 33.6479C21.9897 33.8449 22.1537 34.0084 22.3511 34.1221C22.5484 34.2357 22.7722 34.2956 22.9999 34.2956C23.2277 34.2956 23.4514 34.2357 23.6488 34.1221C23.8461 34.0084 24.0101 33.8449 24.1244 33.6479C24.4569 33.0746 25.1913 32.8795 25.7645 33.212C26.3378 33.5445 26.5329 34.2789 26.2004 34.8521C25.8752 35.4128 25.4083 35.8782 24.8466 36.2018C24.2849 36.5253 23.6481 36.6956 22.9999 36.6956C22.3517 36.6956 21.7149 36.5253 21.1532 36.2018C20.5915 35.8782 20.1247 35.4128 19.7994 34.8521C19.4669 34.2789 19.662 33.5445 20.2353 33.212Z" fill="#ffffffff" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9999 9.2998C20.6925 9.2998 18.4796 10.2164 16.8481 11.848C15.2165 13.4795 14.2999 15.6924 14.2999 17.9998C14.2999 22.198 13.4019 24.8089 12.5714 26.3314C12.1545 27.0958 11.7481 27.598 11.4647 27.8972C11.3227 28.0471 11.2108 28.1468 11.1428 28.2034C11.1088 28.2318 11.0858 28.2493 11.0754 28.257L11.0709 28.2604C10.6403 28.5558 10.4497 29.0966 10.6014 29.5975C10.7546 30.1037 11.2211 30.4498 11.7499 30.4498H34.2499C34.7787 30.4498 35.2452 30.1037 35.3984 29.5975C35.5501 29.0966 35.3595 28.5558 34.9289 28.2604L34.9244 28.257C34.914 28.2493 34.891 28.2318 34.857 28.2034C34.789 28.1468 34.6771 28.0471 34.5351 27.8972C34.2517 27.598 33.8453 27.0958 33.4284 26.3314C32.7763 25.136 32.0826 23.2696 31.8147 20.4907C31.1111 20.8175 30.3269 21 29.5 21C29.4847 21 29.4695 20.9999 29.4542 20.9998C29.7697 23.9267 30.526 26.0224 31.3214 27.4807C31.4318 27.683 31.5426 27.8725 31.6527 28.0498H14.347C14.4572 27.8725 14.568 27.683 14.6784 27.4807C15.7229 25.5658 16.6999 22.5516 16.6999 17.9998C16.6999 16.3289 17.3636 14.7265 18.5451 13.545C19.7266 12.3636 21.329 11.6998 22.9999 11.6998C23.7526 11.6998 24.4913 11.8345 25.184 12.0905C25.7456 11.3805 26.4787 10.8124 27.3208 10.4486C26.0164 9.7023 24.5289 9.2998 22.9999 9.2998Z" fill="#ffffffff" />
          <circle cx="29.5" cy="15.5" r="4.5" fill="#BF181D" />
        </svg>
        </div>

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center space-x-3 p-2 hover:bg-muted rounded-md transition-colors cursor-pointer border-0">
              <Image
                src="/foto.jpeg"
                alt="foto"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div className="hidden md:block text-left">
                <div className="text-sm font-medium text-[14px]">Feliciano Rodino</div>
                <div className="text-xs text-muted-foreground text-[12px]">Admin</div>
              </div>

            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="pb-2">

              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Feliciano Rodino</p>
                <p className="text-xs leading-none text-muted-foreground">Admin</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setOpen(true)} className="text-error">

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /></svg>
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Dialog open={open} onOpenChange={setOpen}>

          <DialogContent className="sm:max-w-md md:w-[400px] p-3">

            <div className="w-full flex justify-center mt-2">
              <div className=" w-[50px] h-[50px] grid place-items-center  rounded-lg  text-white bg-[#FF00001A] duration-300">

                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.0822 7.95855V20.7919C23.0822 22.2397 21.905 23.4169 20.4572 23.4169H18.7072C18.2242 23.4169 17.8322 23.0249 17.8322 22.5419C17.8322 22.0589 18.2242 21.6669 18.7072 21.6669H20.4572C20.9402 21.6669 21.3322 21.2749 21.3322 20.7919V7.95855C21.3322 7.47555 20.9402 7.08355 20.4572 7.08355H18.7072C18.2242 7.08355 17.8322 6.69155 17.8322 6.20855C17.8322 5.72555 18.2242 5.33355 18.7072 5.33355H20.4572C21.905 5.33355 23.0822 6.51072 23.0822 7.95855ZM16.2665 3.57771C16.8907 4.07821 17.2489 4.82489 17.2489 5.62522V23.1252C17.2489 23.9256 16.8907 24.6722 16.2665 25.1727C15.7952 25.5507 15.22 25.7502 14.6297 25.7502C14.4384 25.7502 14.2459 25.7292 14.0557 25.6872L7.05569 24.1321C5.84469 23.8626 5 22.809 5 21.5689V7.18157C5 5.9414 5.84586 4.88788 7.05569 4.61838L14.0557 3.0632C14.8385 2.88937 15.6424 3.07838 16.2665 3.57771ZM15.4989 5.62522C15.4989 5.35805 15.3787 5.10956 15.171 4.94273C15.0135 4.81673 14.8222 4.75022 14.625 4.75022C14.5608 4.75022 14.4978 4.75723 14.4337 4.77123L7.43366 6.3264C7.03 6.41623 6.74886 6.76739 6.74886 7.18039V21.5677C6.74886 21.9807 7.03116 22.3319 7.43366 22.4217L14.4337 23.9769C14.695 24.0352 14.9634 23.9722 15.171 23.8054C15.3787 23.6386 15.4989 23.39 15.4989 23.1229V5.62522ZM12.3139 13.2086H12.3022C11.6582 13.2086 11.1414 13.7312 11.1414 14.3752C11.1414 15.0192 11.6699 15.5419 12.3139 15.5419C12.9579 15.5419 13.4805 15.0192 13.4805 14.3752C13.4805 13.7312 12.9579 13.2086 12.3139 13.2086Z" fill="#E02E2E" />
                </svg>


              </div>
            </div>
            <div className=" p-4 space-y-6  ">
              <div className="font-semibold text-center text-[#143163] ">
                <p>Tem certeza que pretende<br /> encerrar a sessão?</p>
              </div>
              <div className="flex space-x-6">
                <DialogClose asChild>
                  <button type="button"
                    className="bg-[#F2F2F2] hover:bg-[#e8e6e6] font-semibold cursor-pointer duration-300
                                              text-[#616161] rounded-md p-2 w-full">
                    Cancelar
                  </button>
                </DialogClose>
                <button type="button" onClick={() => router.push('/auth/login')} className="bg-[#E02E2E] hover:bg-[#bf2626] cursor-pointer
                                                  ml-2  duration-300 font-semibold text-[#fff]  rounded-md p-2 w-full">
                  Sair
                </button>
              </div>


            </div>

          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
