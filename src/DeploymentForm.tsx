// import { useState } from 'react';
import React from "react";
import Swal from 'sweetalert2'

// const priceOptions = [
//   { id: 'micro', label: 'Micro', cpu: '1 CPU', ram: '1 GB RAM', price: 0.002777 },
//   { id: 'small', label: 'Small', cpu: '2 CPU', ram: '2 GB RAM', price: 0.027777 },
//   { id: 'large', label: 'Large', cpu: '4 CPU', ram: '4 GB RAM', price: 0.077777 },
// ];

// const DeploymentForm = () => {
//   const [port, setPort] = useState('');
//   const [selectedPrice, setSelectedPrice] = useState('');
//   const [error, setError] = useState('');

//   const handleDeploy = () => {
//     if (!port || !selectedPrice) {
//       setError('Port and Price configuration are required.');
//       return;
//     }
//     setError('');
//     alert('Successfully deployed.');
//   };

//   return (
//     <div className="max-w-md mx-auto bg-gray-800 text-white p-6 rounded">
//       <h2 className="text-xl mb-4">Configure Deployment</h2>

//       <div className="mb-4">
//         <label className="block mb-1">Port</label>
//         <input
//           type="text"
//           value={port}
//           onChange={(e) => setPort(e.target.value)}
//           className="w-full p-2 rounded bg-gray-700"
//           placeholder="8080"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1">Price Configuration</label>
//         <div className="grid grid-cols-3 gap-4">
//           {priceOptions.map((option) => (
//             <div
//               key={option.id}
//               className={`p-4 rounded cursor-pointer ${selectedPrice === option.id ? 'bg-blue-600' : 'bg-gray-700'}`}
//               onClick={() => setSelectedPrice(option.id)}
//             >
//               <p>{option.label}</p>
//               <p>{option.cpu}</p>
//               <p>{option.ram}</p>
//               <p>${option.price.toFixed(6)}/hour</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       <button
//         onClick={handleDeploy}
//         className="bg-green-500 px-4 py-2 rounded w-full"
//       >
//         Deploy
//       </button>
//     </div>
//   );
// };

// export default DeploymentForm;
import { useState } from "react";

const priceOptions = [
  {
    id: "micro",
    label: "Micro",
    cpu: "1 CPU",
    ram: "1 GB RAM",
    price: 0.002777,
  },
  {
    id: "small",
    label: "Small",
    cpu: "2 CPU",
    ram: "2 GB RAM",
    price: 0.027777,
  },
  {
    id: "large",
    label: "Large",
    cpu: "4 CPU",
    ram: "4 GB RAM",
    price: 0.077777,
  },
];

const DeploymentForm = () => {
  const [port, setPort] = useState("8080");
  const [command, setCommand] = useState("My-deployment");
  const [args, setArgs] = useState("My-deployment");
  const [envVars, setEnvVars] = useState("ENV_NAME=ENV_VALUE");
  const [selectedPrice, setSelectedPrice] = useState("micro");
  const [error, setError] = useState("");

  const handleDeploy = () => {
    if (!port || !selectedPrice || !args || !envVars || !command) {
      setError("configuration are required.");
      return;
    }
    setError("");

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Successfully deployed.",
      showConfirmButton: false,
      timer: 1500
    });
    // alert("Successfully deployed.");
  };



  return (
    <div className=" min-h-screen flex flex-col justify-center items-center text-white">
      <div className=" p-4 rounded-lg shadow-lg w-[600px] border-2 border-gray-800">
        <h2 className="text-2xl font-semibold mb-4">
          Configure Deployment (optional)
        </h2>
        <p>Please follow the steps to configure your Project and deploy it.</p>

        <div className="mb-4">
          <label className="block text-sm mb-2">Port</label>
          <input
            type="text"
            value={port}
            onChange={(e) => setPort(e.target.value)}
            className="w-full p-2 bg-transparent border-2 border-gray-800 rounded"
            placeholder="8080"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">Command</label>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="w-full p-2 bg-transparent border-2 border-gray-800 rounded"
            placeholder="My-deployment"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">Arguments</label>
          <input
            type="text"
            value={args}
            onChange={(e) => setArgs(e.target.value)}
            className="w-full p-2 bg-transparent border-2 border-gray-800 rounded"
            placeholder="My-deployment"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">Environment Variables</label>
          <input
            type="text"
            value={envVars}
            onChange={(e) => setEnvVars(e.target.value)}
            className="w-full p-2 bg-transparent border-2 border-gray-800 rounded"
            placeholder="ENV_NAME=ENV_VALUE"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">Pricing Configuration</label>
          <div className="grid grid-cols-3 gap-4">
            {priceOptions.map((option) => (
              <div
                key={option.id}
                className={`p-4 rounded-lg cursor-pointer border ${
                  selectedPrice === option.id
                    ? "border-blue-500 bg-gray-700"
                    : "border-gray-600"
                }`}
                onClick={() => setSelectedPrice(option.id)}
              >
                <span
                  className={`w-auto px-2 py-1 rounded-md text-sm
          ${option.id === "micro" ? "bg-[#3C1403] border-2 border-[#962D00]" : ""}
          ${option.id === "small" ? "bg-[#1E1731] border-2 border-[#853BCE]" : ""}
          ${option.id === "large" ? "bg-[#0E1F35] border-2 border-[#1A73E8]" : ""}`}
                >
                  {option.label}
                </span>
                <p>{option.cpu}</p>
                <p>{option.ram}</p>
                <p className="text-xs"><span className="text-green-400">${option.price.toFixed(6)}</span>/hour</p>
              </div>
            ))}
          </div>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          onClick={handleDeploy}
          className="w-full bg-transparent border-2  border-purple-400 p-3 rounded-lg text-lg hover:bg-gray-800"
        >
          Deploy
        </button>
      </div>
    </div>
  );
};

export default DeploymentForm;
