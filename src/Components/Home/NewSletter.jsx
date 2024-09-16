import { Google, Amazon, PH, Toshiba, Samsung } from "@/Utils/icons.util";

const NewsLetter = () => {
  return (
    <div className="py-[72px] px-6 bg-[#1B6392] flex justify-center items-center">
      <div className="container flex flex-col justify-center items-center gap-[32px] max-w-xl text-center">
        <h1 className="text-white text-[32px] font-semibold">
          Subscribe to our newsletter
        </h1>
        <p className="text-white/70">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
        </p>

        <div className="input bg-white rounded-[3px] w-full max-w-xl px-[12px] py-[10px] flex flex-col sm:flex-row sm:gap-[12px]">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="flex-grow px-2 py-1 focus:outline-none"
          />
          <button className="bg-[#FA8232] px-[24px] py-[12px] text-white font-medium rounded-[3px] mt-2 sm:mt-0">
            Subscribe
          </button>
        </div>

        <div className="logos pt-6 border-t border-white/20 w-full max-w-xl mx-auto flex flex-wrap justify-center gap-[24px]">
          <div className="w-1/5 sm:w-auto">
            <Google className="w-12 h-12" />
          </div>
          <div className="w-1/5 sm:w-auto">
            <Amazon className="w-12 h-12" />
          </div>
          <div className="w-1/5 sm:w-auto">
            <PH className="w-12 h-12" />
          </div>
          <div className="w-1/5 sm:w-auto">
            <Toshiba className="w-12 h-12" />
          </div>
          <div className="w-1/5 sm:w-auto">
            <Samsung className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
