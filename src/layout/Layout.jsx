import React from "react";
import { RiHome7Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { FaRegBell, FaRegEnvelope } from "react-icons/fa";

const Layout = (props) => {
  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <ul className="space-y-7">
            <li className="">
              <div className="relative">
                <RiHome7Fill size={28} />
                <div className="bg-[#1d9bf0] w-1.5 h-1.5 rounded-full absolute top-0 left-5" />
              </div>
            </li>
            <li>
              <BiHash color="#0f1419" size={28} />
            </li>
            <li>
              <FaRegBell size={28} />
            </li>
            <li>
              <FaRegEnvelope size={28} />
            </li>
          </ul>
        </div>
        <div className="col-span-11">{props.children}</div>
      </div>
   
    </div>
  );
};

export default Layout;
