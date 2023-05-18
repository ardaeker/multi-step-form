"use client";
import React, { useState } from "react";

export default function Info({
  name,
  setName,
  errName,
  setErrName,
  email,
  setEmail,
  errEmail,
  setErrEmail,
  phone,
  setPhone,
  errPhone,
  setErrPhone,
}) {
  return (
    <section className="lg:w-full">
      <h2 className="font-bold text-2xl leading-7 text-denim lg:text-[32px] lg:leading-[37px]">Personal info</h2>
      <p className="font-normal text-base leading-[25px] text-grey mt-[9px] lg:mt-[11px]">
        Please provide your name, email, address, and phone number.
      </p>
      <form className="mt-[22px] flex flex-col gap-4 lg:mt-[35px] lg:gap-6">
        <div className="flex flex-col gap-[3px] lg:gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="name" className="font-normal lg:text-sm lg:leading-4 text-xs leading-[14px] text-denim">
              Name
            </label>
            <p
              className={`mt-[11px] hidden lg:block font-bold transition-opacity pb-[3px] duration-200 text-sm leading-4 text-red-errors ${
                errName ? "opacity-1" : "opacity-0"
              } `}
            >
              {errName}
            </p>
          </div>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={name}
            onFocus={() => setErrName("")}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Stephen King"
            className={`border lg:w-full  transition-[outline-color_.7s_ease-out] h-10 lg:h-12 lg:text-base lg:leading-[18px] lg:rounded-lg rounded   font-medium text-[15px]  leading-[17px] px-4 border-border-color focus:outline-purple ${
              errName && "border-red-errors focus:outline-red-errors"
            }`}
          />
        </div>
        <div className="flex flex-col gap-[3px] lg:gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="email" className="font-normal text-xs leading-[14px] text-denim lg:text-sm lg:leading-4">
              Email Address
            </label>
            <p
              className={`mt-[11px] font-bold hidden lg:block transition-opacity pb-[3px] duration-200 text-sm leading-4 text-red-errors ${
                errEmail ? "opacity-1" : "opacity-0"
              } `}
            >
              {errEmail}
            </p>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={email}
            onFocus={() => setErrEmail("")}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. stephenking@lorem.com"
            className={`border  transition-[outline-color_.7s_ease-out] h-10 lg:h-12 lg:text-base lg:leading-[18px] lg:rounded-lg rounded   font-medium text-[15px] leading-[17px] px-4 border-border-color focus:outline-purple ${
              errEmail && "border-red-errors focus:outline-red-errors"
            }`}
          />
        </div>
        <div className="flex flex-col gap-[3px] lg:gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="phone" className="font-normal text-xs leading-[14px] text-denim lg:text-sm lg:leading-4">
              Phone Number
            </label>
            <p
              className={`mt-[11px] font-bold hidden lg:block transition-opacity pb-[3px] duration-200 text-sm leading-4 text-red-errors ${
                errPhone ? "opacity-1" : "opacity-0"
              } `}
            >
              {errPhone}
            </p>
          </div>
          <input
            type="tel"
            name="phone"
            id="phone"
            onFocus={() => setErrPhone("")}
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +1 234 567 890"
            className={`border  transition-[outline-color_.7s_ease-out] h-10 lg:h-12 lg:text-base lg:leading-[18px] lg:rounded-lg rounded   font-medium text-[15px] leading-[17px] px-4 border-border-color focus:outline-purple ${
              errPhone && "border-red-errors focus:outline-red-errors"
            }`}
          />
        </div>
      </form>
    </section>
  );
}
