import { useState } from "react";
import { SiConvertio } from "react-icons/si";
import Dropdown from "./Dropdown";
const Finance = () => {
  const [cryptoAmount, setCryptoAmount] = useState<string>("");
  const [exchangeRate, setExchangeRate] = useState<string>("");
  const [usdValue, setUsdValue] = useState<number | null>(null);

  const handleCalculate = () => {
    if (cryptoAmount && exchangeRate) {
      const value = parseFloat(cryptoAmount) * parseFloat(exchangeRate);
      setUsdValue(parseFloat(value.toFixed(2)));
    }
  };
  const inputStyle = [
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  ];
  return (
    <div className="m-6">
      <a
        href="https://crypto-prices-react-sajad.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="bg-gradient-to-t from-indigo-900 to-blue-800 w-full rounded-full h-14 flex items-center justify-center hover:shadow-sm hover:from-indigo-700 hover:to-blue-500">
          <h1 className="p-10 text-white font-semibold text-2xl">
            My live Crypto Prices Website
          </h1>
        </div>
      </a>
      {/* simple calculator  */}

      <div className="max-w-sm mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Crypto Calculator</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Crypto Amount
          </label>
          <div className="flex">
            <input
              type="number"
              value={cryptoAmount}
              onChange={(e) => setCryptoAmount(e.target.value)}
              placeholder="Enter amount"
              className={`${inputStyle}`}
            />
            <Dropdown />
          </div>
        </div>
        <button className="mx-auto my-6 flex">
          <SiConvertio className=" text-blue-600 text-3xl" />
        </button>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Exchange Rate (USD)
          </label>
          <div className="flex">
            <input
              type="number"
              value={exchangeRate}
              onChange={(e) => setExchangeRate(e.target.value)}
              placeholder="Enter rate"
              className={`${inputStyle}`}
            />
            <Dropdown />
          </div>
        </div>
        <button
          onClick={handleCalculate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Calculate
        </button>
        {usdValue !== null && (
          <div className="mt-4">
            <p className="text-gray-700 text-lg">
              USD Value: <span className="font-bold">${usdValue}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Finance;
