import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    document.body.classList.add("dark:bg-black");
  }, []);

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="border border-gray-700 w-screen m-10 md:w-[70vw] lg:w-[60vw] rounded-lg">
          <h1 className="dark:text-white font-bold text-3xl text-center pt-10">
            Your Device<span className="text-gray-400">.</span>
          </h1>
          <div className="p-10 md:grid md:grid-cols-3">
            <div className="text-center py-5">
              <p className="dark:text-white">Device Temperature</p>
              <p className="dark:text-white font-bold text-5xl">
                52<span className="text-gray-400">°C</span>
              </p>
            </div>
            <div className="text-center py-5">
              <p className="dark:text-white">CPU Load</p>
              <p className="dark:text-white font-bold text-5xl">
                100<span className="text-gray-400">%</span>
              </p>
            </div>
            <div className="text-center py-5">
              <p className="dark:text-white">RAM Usage</p>
              <p className="dark:text-white font-bold text-5xl">
                2048<span className="text-base text-gray-400">MB</span>
              </p>
              <p className="dark:text-white font-bold text-base">
                / 5120<span className="text-xs text-gray-400"> MB</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
