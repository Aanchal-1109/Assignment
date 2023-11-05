import Image from "next/image";
import { Button } from "@/components/ui/button";
import Table from "@/components/Table/Table";
import axios from "axios";

export default async function Home() {
  const prizeData = await axios.get("http://api.nobelprize.org/v1/prize.json");
  const prizeJson = prizeData.data.prizes;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Table data={prizeJson} />
      </div>
    </main>
  );
}
