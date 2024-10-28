import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { travelData } from "../data/db";

function Card() {
  return (
    <>
      <div>
        {travelData.map((item, index) => (
          <div
            className="flex flex-col sm:flex-row items-center sm:gap-10 justify-center mb-10"
            key={index}
          >
            <div className="w-80 sm:w-52 h-72 rounded-2xl overflow-hidden">
              <img
                src={item.image}
                alt=""
                className="object-fill w-full h-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-1 mt-8 sm:mt-0">
                <IoLocationSharp className="text-red-500 text-xl" />
                <p className="tracking-widest font-semibold">{item.city}</p>
                <p className="pl-3">
                  <a
                    href={item.map}
                    target="_blank"
                    className="underline underline-offset-4 text-gray-500"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
              <div className="max-w-[340px] md:max-w-[470px]">
                <p className="text-3xl sm:text-4xl font-bold my-2">
                  {item.location}
                </p>
                <p className="mt-5 mb-3 font-bold text-lg">{item.date}</p>
                <p className=" leading-6">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
