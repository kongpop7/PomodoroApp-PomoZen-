export const PackagesComponent = () => {
  return (
    <div className="mt-8">
      <p className="text-center text-green-400 font-bold text-xl">ZenPro Pricing</p>
      <h1 className="text-center text-4xl max-sm:text-3xlxl font-bold">
        Subscribe to unlock all the features
      </h1>
      <p className="text-center mt-2 text-gray-400">Choose the right plan</p>
      <div className="flex sm:space-x-4 max-sm:space-y-4 max-sm:flex-col">
        <div className="flex-1 text-xl mt-14 rounded-xl border border bg-black p-8 w-full">
          <div className="text-white font-bold">Free Plan</div>
          <div className="text-5xl mt-5 font-bold">$0</div>
          <button
            className="mt-5 mb-2 w-full border whitespace-nowrap font-bold px-12 py-5 lg:px-16 max-sm:px-4 max-sm:py-2 rounded-xl bg-black text-white text-xl max-sm:text-lg hover:bg-white hover:text-black transition-all"
          >
            Choose plan
          </button>
          <p className = "flex align-center justify-center text-sm mb-4">*No credit card required</p>
          <ul className="text-[14px]">
            <li>What you will get:</li>
            <li>Pomodoro Timer</li>
            <li>Focus Our Recorded</li>
          </ul>
        </div>
        <div className="relative flex-1 text-xl mt-14 rounded-xl border border-green-600 bg-black p-8 w-full">
        <div className="absolute top-0 left-0 right-0 border border-green-600 bg-green-600 text-white font-light text-[15px] text-center whitespace-nowrap px-4 py-1 rounded-t-xl">
          Most Popular
        </div>
          <div className="text-white font-bold mt-4">Pro Zen</div>
          <div className="text-5xl mt-5 font-bold">$0.99</div>
          <button
            className="mt-5 mb-2 w-full borde border-green-400 whitespace-nowrap font-bold px-12 py-5 lg:px-16 max-sm:px-4 max-sm:py-2 rounded-xl bg-green-600 text-white text-xl max-sm:text-lg hover:bg-green-800 transition-all"
          >
            Choose plan
          </button>
          <p className = "flex align-center justify-center text-sm mb-4">Cancel anytime</p>
          <ul className="text-[14px]">
            <li>What you will get:</li>
            <li>Pomodoro Timer</li>
            <li>Focus Our Recorded</li>
          </ul>
        </div>
        <div className="flex-1 text-xl mt-14 rounded-xl border border bg-black p-8 w-full">
          <div className="text-white font-bold">Lite Zen</div>
          <div className="text-5xl mt-5 font-bold">$0.99</div>
          <button
            className="mt-5 mb-2 w-full border whitespace-nowrap font-bold px-12 py-5 lg:px-16 max-sm:px-4 max-sm:py-2 rounded-xl bg-black text-white text-xl max-sm:text-lg hover:bg-white hover:text-black transition-all"
          >
            Choose plan
          </button>
          <p className = "flex align-center justify-center text-sm mb-4">*Upgrade anytime</p>
          <ul className="text-[14px]">
            <li>What you will get:</li>
            <li>Pomodoro Timer</li>
            <li>Focus Our Recorded</li>
          </ul>
        </div>

      </div>
    </div>
  );
};