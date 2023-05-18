"use client";
import Addons from "@/components/Addons";
import Feedback from "@/components/Feedback";
import Info from "@/components/Info";
import Plan from "@/components/Plan";
import Summary from "@/components/Summary";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";

const stepList = [
  { id: 1, name: "Your Info" },
  { id: 2, name: "Select Plan" },
  { id: 3, name: "ADD-ONS" },
  { id: 4, name: "SUMMARY" },
];

export default function Home() {
  const [step, setStep] = useState(1);
  const [nextStep, setNextStep] = useState(true);

  /* --------------------------------
  Global
    - Current Step [step, setStep]
    - Is Next Step [nextStep, setNextStep]

  Personal Info
    - Name Input [name, setName]
    - Name Error Input [errName, setErrName]

    - Email Input [email, setEmail]
    - Email Error Input [errEmail, setErrEmail]

    - Phone Number Input [phone, setPhone]
    - Phone Number Error Input [errPhone, setErrPhone]

  Select Your Plan
    - Is Yearly Plan ?  [isYearly, setIsYearly]
    - Plan Details [planDetail, setPlanDetail] {name: Arcade, price:100}

  Pick Add-ons
    - Add-ons Objects of Array [{name: "Online service", price: 1}, {name: "Larger storage", price: 2}]
   -------------------------------- */

  const [name, setName] = useState("");
  const [errName, setErrName] = useState("");

  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState("");

  const [phone, setPhone] = useState("");
  const [errPhone, setErrPhone] = useState("");

  // Select Your Plan
  const [isYearly, setIsYearly] = useState(false);
  const [planDetail, setPlanDetail] = useState({
    id: 1,
    name: "Arcade",
    src: "/images/icon-arcade.svg",
    priceMonth: 9,
    priceYear: 90,
  });

  // Pick Add-ons
  const [addons, setAddons] = useState([]);

  const handlePrev = (val) => {
    setNextStep(false);
    setTimeout(() => {
      setStep(val - 1);
    }, 10);
  };

  const handleNext = (val) => {
    if (val === 1) {
      if (name.length <= 0) {
        setErrName("This field is required");
      }

      if (email.length <= 0) {
        setErrEmail("This field is required");
      } else if (!isEmail(email)) {
        setErrEmail("Enter a valid email");
      }

      if (phone.length <= 0) {
        setErrPhone("This field is required");
      } else if (!isMobilePhone(phone, "en-US")) {
        setErrPhone("Enter a valid phone number");
      }

      if (name.length > 0 && email.length > 0 && isEmail(email) && phone.length > 0 && isMobilePhone(phone, "en-US")) {
        setNextStep(true);
        setTimeout(() => {
          setStep(val + 1);
        }, 10);
      } else {
        return;
      }
    } else if (val === 2 || val === 3 || val === 4) {
      setNextStep(true);
      setTimeout(() => {
        setStep(val + 1);
      }, 10);
    }
  };

  return (
    <>
      <main className="bg-background-color min-h-screen  flex flex-col items-center justify-between   lg:flex-row  lg:bg-white lg:min-h-[600px] lg:w-[940px] lg:rounded-[15px] lg:shadow-[0px_25px_40px_-20px_rgba(0,0,0,0.0951141);]  lg:p-4">
        <div className="steps_mobile w-full h-[172px] absolute top-0 left-0 lg:hidden" />
        <div className="z-10 flex flex-col items-center lg:flex-row">
          <section className="z-10 mt-8 mb-[34px] steps_desktop lg:h-[632px] lg:flex-[0_0_274px] lg:mb-0 lg:mt-0 lg:rounded-[10px]">
            <ul className="flex gap-4 lg:flex-col lg:px-8 lg:py-10 lg:gap-8">
              {stepList.map((item) => (
                <li key={item.id} className="lg:flex lg:gap-4">
                  <span
                    className={`w-[33px] h-[33px] rounded-full transition-colors duration-200 flex items-center justify-center  ${
                      step === item.id || (step === 5 && item.id === 4)
                        ? "bg-sky-blue text-denim"
                        : "border border-white text-white"
                    }`}
                  >
                    {item.id}
                  </span>
                  <div className="hidden lg:flex lg:flex-col lg:gap-1">
                    <span className="font-normal text-xs leading-[14px] text-light-blue">STEP {item.id}</span>
                    <span className="font-bold text-sm leading-4 tracking-[1px] uppercase text-white">{item.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <div className="z-10 lg:flex-[0_0_634px]  lg:h-[632px] lg:flex lg:flex-col lg:pt-14 lg:pb-8 lg:px-[100px] lg:justify-between">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={step}
                initial={nextStep ? { x: 20, opacity: 0 } : { x: -20, opacity: 0 }}
                animate={nextStep ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
                exit={nextStep ? { x: -20, opacity: 0 } : { x: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="z-10 w-[343px] lg:w-full  bg-white rounded-[10px] shadow-[0px_25px_40px_-20px_rgba(0,0,0,0.0951141)] lg:shadow-none px-6 py-8 lg:px-0 lg:py-0">
                  {step === 1 && (
                    <Info
                      name={name}
                      setName={setName}
                      errName={errName}
                      setErrName={setErrName}
                      email={email}
                      setEmail={setEmail}
                      errEmail={errEmail}
                      setErrEmail={setErrEmail}
                      phone={phone}
                      setPhone={setPhone}
                      errPhone={errPhone}
                      setErrPhone={setErrPhone}
                    />
                  )}
                  {step === 2 && (
                    <Plan
                      isYearly={isYearly}
                      setIsYearly={setIsYearly}
                      planDetail={planDetail}
                      setPlanDetail={setPlanDetail}
                    />
                  )}
                  {step === 3 && <Addons addons={addons} setAddons={setAddons} isYearly={isYearly} />}
                  {step === 4 && (
                    <Summary planDetail={planDetail} addons={addons} isYearly={isYearly} setStep={setStep} />
                  )}
                  {step === 5 && <Feedback />}
                </div>
              </motion.div>
            </AnimatePresence>

            {step < 5 && (
              <div
                className={`mt-auto bg-white hidden w-full lg:flex items-center lg:w-[450px]  ${
                  step === 1 ? "justify-end" : "justify-between"
                }  z-10 h-[72px] p-4  lg:h-12 lg:mt-0`}
              >
                {step !== 1 && (
                  <button
                    className="font-medium text-sm leading-4  text-grey lg:text-base lg:leading-[18px] lg:hover:text-denim"
                    onClick={() => handlePrev(step)}
                  >
                    Go Back
                  </button>
                )}

                {step !== 4 && (
                  <button
                    className="h-10 bg-denim px-4 py-3 lg:hover:bg-hover-color transition-colors flex items-center text-white rounded-[8px]"
                    onClick={() => handleNext(step)}
                  >
                    Next Step
                  </button>
                )}
                {step === 4 && (
                  <button
                    className="bg-purple h-12 w-[123px] font-medium  text-base leading-[18px]  flex items-center justify-center lg:hover:bg-hover-confirm text-white rounded-[8px]"
                    onClick={() => setStep(step + 1)}
                  >
                    Confirm
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        {step < 5 && (
          <div
            className={` bg-white lg:hidden  w-full flex items-center lg:w-[450px] mt-6 ${
              step === 1 ? "justify-end" : "justify-between"
            } z-10 h-[72px] p-4  lg:h-12 lg:mt-0`}
          >
            {step !== 1 && (
              <button className="font-medium text-sm leading-4 text-grey" onClick={() => handlePrev(step)}>
                Go Back
              </button>
            )}

            {step !== 4 && (
              <button
                className="h-10 bg-denim px-4 py-3 flex items-center text-white rounded-[4px]"
                onClick={() => handleNext(step)}
              >
                Next Step
              </button>
            )}
            {step === 4 && (
              <button
                className="bg-purple  h-12 w-[123px] font-medium  text-base leading-[18px]  flex items-center justify-center text-white rounded-[8px]"
                onClick={() => setStep(step + 1)}
              >
                Confirm
              </button>
            )}
          </div>
        )}
      </main>
      <footer>
        <p class="hidden lg:block text-sm sm:text-base whitespace-nowrap font-barlow font-semibold text-neutral-700">
          Challenge by&nbsp;
          <a
            class="text-cyan-950 hover:text-cyan-400"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by&nbsp;
          <a class="text-cyan-950 hover:text-cyan-400" href="https://www.frontendmentor.io/profile/ardaeker">
            Arda Eker
          </a>
          .
        </p>
      </footer>
    </>
  );
}
