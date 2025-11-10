"use client";

import { ChartAreaStacked } from "@/components/dashboard/chartsPrincipal";
import { Component } from "@/components/dashboard/graficoSecundario";
import { ChartBarDefault } from "@/components/dashboard/graficoTerceiro";

//import Image from "next/image";

export default function Home() {



  return (
    <>

      <h2 className="p-2 text-2xl font-bold text-zinc-700"> Hi, Feliciano</h2>
      <p className="text-sm text-zinc-500 p-2">Confira abaixo os dados gerais da aplicação em tempor real</p>
      <div className="flex w-full items-center space-x-4">
        <div className="w-full"><ChartAreaStacked /></div>
        <div className="w-full"><ChartBarDefault /></div>
      </div>
      <div className="flex w-full items-center space-x-4 mt-10">
        <div className="w-full"><ChartAreaStacked /></div>
        <div className="w-full rounded-lg ring-1 ring-zinc-200"><Component /></div>
      </div>

    </>
  );
}
