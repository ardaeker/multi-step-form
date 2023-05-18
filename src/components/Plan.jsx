"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const plans = [
  { id: 1, name: "Arcade", src: "/images/icon-arcade.svg", priceMonth: 9, priceYear: 90 },
  { id: 2, name: "Advanced", src: "/images/icon-advanced.svg", priceMonth: 12, priceYear: 120 },
  { id: 3, name: "Pro", src: "/images/icon-pro.svg", priceMonth: 15, priceYear: 150 },
];

export default function Plan({ isYearly, setIsYearly, planDetail, setPlanDetail }) {
  const isMobileOrDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <section>
      <h2 className="font-bold text-2xl leading-7 text-denim">Select your plan</h2>
      <p className="font-normal text-base leading-[25px] text-grey mt-[9px]">
        You have the option of monthly or yearly billing.
      </p>
      <div className="mt-[22px] flex flex-col gap-3 lg:flex-row ">
        {plans.map((item) => (
          <motion.div
            key={item.id}
            initial={false}
            animate={isMobileOrDesktop ? { height: isYearly ? 183 : 160 } : { height: isYearly ? 100 : 74 }}
            transition={{ duration: 0.1 }}
            onClick={() => setPlanDetail(item)}
            className={`flex transition-all cursor-pointer  lg:flex-col lg:items-start lg:justify-between lg:pt-[20px] lg:pb-4  items-center gap-[14px] pl-[16px] pt-[14px] pb-[18px] w-full border  rounded-lg ${
              planDetail.id === item.id ? "border-purple bg-very-light-grey" : "border-border-color"
            }`}
          >
            <img src={item.src} alt="" aria-label="true" className="h-10 w-10" />
            <div className="flex flex-col transition-all gap-[7px] lg:gap-[6px]">
              <span className="font-medium text-base leading-[18px] text-denim">{item.name}</span>
              {!isYearly && (
                <motion.span
                  key={item.id}
                  layout={false}
                  initial={isYearly ? { x: 10, opacity: 0 } : { x: -10, opacity: 0 }}
                  animate={isYearly ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
                  exit={isYearly ? { x: -10, opacity: 0 } : { x: 10, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-normal text-sm leading-[14px] text-grey"
                >
                  ${item.priceMonth}/mo
                </motion.span>
              )}
              {isYearly && (
                <motion.span
                  key={item.id + 1}
                  layout={false}
                  initial={isYearly ? { x: 10, opacity: 0 } : { x: -10, opacity: 0 }}
                  animate={isYearly ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
                  exit={isYearly ? { x: -10, opacity: 0 } : { x: 10, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-normal text-sm leading-[14px] text-grey"
                >
                  ${item.priceYear}/yr
                </motion.span>
              )}
              {isYearly && (
                <motion.span
                  key={item.id + 2}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={isMobileOrDesktop ? { duration: 0.8 } : { duration: 0.5 }}
                  className="font-normal text-xs leading-5 text-denim"
                >
                  2 months free
                </motion.span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <label className="relative inline-flex items-center justify-center w-full gap-6 pt-[13px] bg-very-light-grey mt-6 pb-[14px] cursor-pointer focus:hig">
        <input
          type="checkbox"
          defaultChecked={isYearly}
          onChange={(e) => setIsYearly(!isYearly)}
          className="sr-only peer"
        />
        <span className={`font-medium text-sm transition-colors leading-4 ${isYearly ? "text-grey" : "text-denim"} `}>
          Monthly
        </span>
        <div className="w-[38px] h-[20px] bg-denim relative peer-focus:outline-none rounded-[10px]  peer-checked:after:left-[22px]  after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white  after:border after:rounded-[10px] after:h-3 after:w-3 after:transition-all "></div>
        <span className={`font-medium text-sm transition-colors leading-4 ${isYearly ? "text-denim" : "text-grey"} `}>
          Yearly
        </span>
      </label>
    </section>
  );
}
