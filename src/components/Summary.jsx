import React from "react";

export default function Summary({ planDetail, addons, isYearly, setStep }) {
  function calculateSum(array, property) {
    const total = array.reduce((accumulator, object) => {
      return accumulator + object[property];
    }, 0);

    return total;
  }

  return (
    <section>
      <h2 className="font-bold text-2xl leading-7 text-denim lg:text-[32px] lg:leading-[37px]">Finishing up</h2>
      <p className="font-normal text-base leading-[25px] text-grey mt-[9px] lg:mt-[11px]">
        Double-check everything looks OK before confirming.
      </p>
      <div className="mt-[22px] p-4 bg-very-light-grey lg:mt-[35px] lg:px-6 lg:pt-4 lg:pb-6">
        <div
          className={`flex justify-between items-center   ${addons.length > 0 && "border-b border-grey pb-3 lg:pb-6"} `}
        >
          <div className="flex flex-col items-start gap-[3px]">
            <span className="font-medium text-sm leading-4 text-denim lg:text-base lg:leading-[18px]">
              {isYearly ? `${planDetail.name} (Yearly)` : `${planDetail.name} (Monthly)`}
            </span>
            <button
              onClick={() => setStep(2)}
              className="font-normal text-sm leading-5 cursor-pointer lg:hover:text-purple underline text-grey"
            >
              Change
            </button>
          </div>
          <span className="font-bold text-sm leading-5 text-denim lg:text-base">
            ${isYearly ? `${planDetail.priceYear}/yr` : `${planDetail.priceMonth}/mo`}
          </span>
        </div>
        {addons &&
          addons.map((item, index) => (
            <div key={index} className="flex items-center justify-between mt-3 lg:mt-4">
              <span className="font-normal text-sm leading-5 text-grey">{item.name}</span>
              <span className="font-normal text-sm leading-5 text-denim">
                +${isYearly ? `${item.priceYear}/yr` : `${item.priceMonth}/mo`}
              </span>
            </div>
          ))}
      </div>
      <div className="flex justify-between items-center px-4 mt-6">
        <span className="font-normal text-sm leading-5 text-grey">Total {!isYearly && "(per month)"}</span>
        <span className="font-bold text-base leading-5 text-purple lg:text-[20px] lg:leading-[20px]">
          +$
          {isYearly
            ? `${planDetail.priceYear + calculateSum(addons, "priceYear")}/yr`
            : `${planDetail.priceMonth + calculateSum(addons, "priceMonth")}/mo`}
        </span>
      </div>
    </section>
  );
}
