import ListA from "@/components/ListA";
import { ReactNode, useState } from "react";
import ListB from "@/components/ListB";
import Lists from "@/components/Lists";

export default async function Home() {
  return (
    <div className="min-h-screen max-h-full w-full flex flex-col gap-4 items-center justify-center bg-[#FCFCFC] p-10">
      <h1 className="text-4xl font-bold text-center">
        ProximaHQ Coding Challenge
      </h1>
      <div className="flex gap-2 justify-between items-center">
        <p>Check out the instructions in the README.md</p>
      </div>
      <Lists>
        {/* <ListA /> */}
        <ListB />
      </Lists>
    </div>
  );
}
