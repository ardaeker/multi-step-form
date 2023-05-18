import React from "react";

export default function Feedback() {
  return (
    <section className="flex flex-col items-center min-h-[400px] justify-center">
      <img src="/images/icon-thank-you.svg" alt="Thank You" className="w-14 h-14 lg:w-20 lg:h-20" />
      <h2 className="font-bold text-2xl leading-7 text-center text-denim mt-6 lg:mt-8 lg:text-[32px] lg:leading-[37px]">
        Thank you!
      </h2>
      <p className="font-normal text-base leading-[25px] text-center text-grey mt-[9px] lg:mt-[14px]">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </section>
  );
}
