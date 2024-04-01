import ListA from "@/components/ListA";
import ListB from "@/components/ListB";

export default async function Home() {
  return (
    <div className="min-h-screen max-h-full w-full flex flex-col gap-4 items-center justify-center bg-[#FCFCFC] p-10">
      <h1 className="text-4xl font-bold text-center">
        ProximaHQ Coding Challenge
      </h1>
      <div className="flex gap-2 justify-between items-center">
        <p>Check out the instructions in the README.md</p>
      </div>
      <div className="container w-full grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        {/* LIst A Component */}
        <ListA
          fontFamily="Inter"
          headerSize="md"
          paragraphSize="sm"
          backgroundColor="#f0f0f0"
          fontColor="#333"
        />
        {/* List B component */}
        <ListB
          fontFamily="Poppins"
          headerSize="lg"
          paragraphSize="md"
          backgroundColor="#e0e0e0"
          fontColor="#444"
        />
      </div>
    </div>
  );
}
