import React from "react";
import { IoHome } from "react-icons/io5";
import { LuLayers } from "react-icons/lu";
import { RiBarChartBoxLine } from "react-icons/ri";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { LiaChartPieSolid } from "react-icons/lia";
import { BsPeople } from "react-icons/bs";
import { TbWheel } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import DeploymentForm from "./DeploymentForm";
import GithubStatusPage from "./GithubStatusPage";
import GotoHome from "./GotoHome";
import "./index.css";
import { CiCircleInfo } from "react-icons/ci";
import { GiThreeLeaves } from "react-icons/gi";

function Layout() {
  return (
    <div className=" flex  bg-gray-900">
      <div className=" min-h-screen px-5 w-[6%] border-r-2  border-gray-800">
        <div className="mb-7  mt-4 text-green-500 ps-2">
        <GiThreeLeaves style={{fontSize:"30px"}}/>
        </div>
        <div className="flex flex-col">
          <div>
            <div className="h-[48px] w-[48px] rounded-md flex justify-center items-center hover:border-2 cursor-pointer">
              <IoHome className="text-2xl text-gray-100" />
            </div>
            <div className="h-[48px] w-[48px] rounded-md flex justify-center items-center hover:border-2 cursor-pointer">
              <LuLayers className="text-2xl text-gray-100 " />
            </div>
            <div className="h-[48px] w-[48px] rounded-md flex justify-center items-center hover:border-2 cursor-pointer">
              <RiBarChartBoxLine className="text-2xl text-gray-100 " />
            </div>
            <div className="h-[48px] w-[48px] rounded-md flex justify-center items-center hover:border-2 cursor-pointer">
              <RiCheckboxMultipleLine className="text-2xl text-gray-100 " />
            </div>
            <div className="h-[48px] w-[48px] rounded-md flex justify-center items-center hover:border-2 cursor-pointer">
              <LiaChartPieSolid className="text-2xl text-gray-100 " />
            </div>
            <div className="h-[48px] w-[48px] rounded-md flex justify-center items-center hover:border-2 cursor-pointer">
              <BsPeople className="text-2xl text-gray-100 " />
            </div>
          </div>

          <div className="mt-52 ">
            <div className="h-[48px] w-[48px] rounded-md flex justify-center items-center hover:border-2 cursor-pointer">
              <TbWheel className="text-2xl text-gray-100 " />
            </div>
            <div className="h-[48px] w-[48px] rounded-md flex justify-center items-center hover:border-2 cursor-pointer ">
              <IoSettingsOutline className="text-2xl text-gray-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full">
      <div className="flex justify-between items-center bg-gray-900 border-b-2  border-gray-800 p-4 ">
                    <span className="text-white text-lg font-semibold">Welcome, Shubhi</span>
                
                    <div className="flex items-center space-x-2">
                        <div className="px-3 py-2 rounded-md text-sm font-bold bg-green-400 bg-opacity-45 flex items-center">
                            <span className="text-green-500 text-2xl mr-1">&bull;</span>    
                            <span className="text-white">Credits:</span>
                            <span className="ml-1" style={{ color: '#19FB9B' }}>5 USD</span>
                            <span className="ml-2 text-lg font-bold text-white">
                            <CiCircleInfo/>
                            </span>
                        </div>

                        <a href="#" className="text-white hover:text-gray-300">
                            Docs
                        </a>
                    </div>
                </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "red",
            height: "88vh",
            overflowY: "scroll",
          }}
          className="rm-scroll"
        >
          <GotoHome />
          <div className="min-h-screen bg-gray-900 text-white flex justify-around items-center">
            <GithubStatusPage />
            <DeploymentForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
