"use client";
import React, { useState } from "react";

const addOns = [
  { id: 1, name: "Online service", description: "Access to multiplayer games", priceMonth: 1, priceYear: 10 },
  { id: 2, name: "Larger storage", priceMonth: 2, description: "Extra 1TB of cloud save", priceYear: 20 },
  { id: 3, name: "Customizable profile", priceMonth: 2, description: "Custom theme on your profile", priceYear: 20 },
];

export default function Addons({ addons, setAddons, isYearly }) {
  const handlerAddons = (item) => {
    if (addons.some((addon) => addon.id === item.id)) {
      const newAddons = addons.filter((addon) => addon.id !== item.id);
      setAddons(newAddons);
    } else {
      const newAddons = [...addons, item];
      setAddons(newAddons);
    }
  };

  return (
    <section>
      <h2 className="font-bold text-2xl leading-7 text-denim lg:text-[32px] lg:leading-[37px]">Pick add-ons</h2>
      <p className="lg:mt-[11px] mt-[9px] font-normal text-base leading-[25px] text-grey ">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-3 lg:gap-4 mt-[22px] lg:mt-10">
        {addOns.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handlerAddons(item, index)}
            className={`flex items-center gap-4 hover:border-purple  cursor-pointer lg:gap-6 px-4 pt-[13px] pb-[10px] border  rounded-lg ${
              addons.some((addon) => addon.id === item.id) ? "border-purple bg-very-light-grey" : "border-border-color"
            }`}
          >
            <input
              type="checkbox"
              checked={addons.some((addon) => addon.id === item.id) ? true : false || false}
              className="w-5 h-5 rounded-[4px]  appearance-none border after:transition-colors relative checked:bg-purple checked:border-none flex items-center justify-center   border-light-grey "
              onChange={() => handlerAddons(item, index)}
            />
            <div className="flex flex-col gap-[3px] lg:gap-[7px]">
              <span htmlFor="plan" className="font-medium text-sm leading-4 text-denim lg:text-base lg:leading-[18px]">
                {item.name}
              </span>
              <span className="font-normal text-xs leading-5 text-grey lg:text-sm lg:leading-5">
                {item.description}
              </span>
            </div>
            {!isYearly && (
              <span className="font-normal text-xs leading-5 text-purple text-end ml-auto lg:text-sm lg:leading-5">
                +${item.priceMonth}/mo
              </span>
            )}
            {isYearly && (
              <span className="font-normal text-xs leading-5 text-purple text-end ml-auto lg:text-sm lg:leading-5">
                +${item.priceYear}/yr
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
