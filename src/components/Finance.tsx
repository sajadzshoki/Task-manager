// import { AiFillDollarCircle } from "react-icons/ai";

const Finance = () => {
  return (
    <div className="m-6">
      {/* <div className="">
        <p>overview : </p>
        <div className="flex justify-between">
          <div className="text-xl">
            <p className="font-thin">Balance :</p>
            <p className="font-semibold">34052 $</p>
          </div>
          <div className="text-xl">
            <p className="font-thin">total expenses :</p>
            <p className="font-semibold">2650 $</p>
          </div>
          <div className="text-xl">
            <p className="font-thin">withdraws</p>
            <p className="font-semibold">6700 $</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Finance;


// import React, { useState } from 'react';

// const PercentageCalculator = () => {
//   const [ , setAmount] = useState('');
//   const [percentage, setPercentage] = useState('');
//   const [iterations, setIterations] = useState('');
//   const [result, setResult] = useState(null);

//   const handleCalculate = () => {
//     let initialAmount = parseFloat(amount);
//     const percentageValue = parseFloat(percentage) / 100;
//     const iterationCount = parseInt(iterations, 10);

//     if (isNaN(initialAmount) || isNaN(percentageValue) || isNaN(iterationCount)) {
//       setResult('Invalid input');
//       return;
//     }

//     for (let i = 0; i < iterationCount; i++) {
//       initialAmount += initialAmount * percentageValue;
//     }

//     setResult(initialAmount.toFixed(2));
//   };

//   return (
//     <div>
//       <h2>Percentage Calculator</h2>
//       <div>
//         <label>
//           Amount of Money:
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Percentage:
//           <input
//             type="number"
//             value={percentage}
//             onChange={(e) => setPercentage(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Iterations:
//           <input
//             type="number"
//             value={iterations}
//             onChange={(e) => setIterations(e.target.value)}
//           />
//         </label>
//       </div>
//       <button onClick={handleCalculate}>Calculate</button>
//       {result !== null && (
//         <div>
//           <h3>Result: {result}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PercentageCalculator;
