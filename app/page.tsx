import Client from "@/components/Client";
import Expierence from "@/components/Expierence";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/Floatingnav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero/>
        <Grid/>
        <RecentProject/>
        <Client/>
        <Expierence/>
        <Process/>
        <Footer/>
      </div>
    </main>
  );
}
