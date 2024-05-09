"use client";
import { useState } from "react";

const VaultInformation = () => {
  const options = ["DevNet", "MainNet"];
  const [selectedOption, setSelectedOption] = useState<string>("DevNet");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <main className="bg-[#fff] rounded-xl px-5 py-4 w-full">
      <div className="mx-3 py-7">
        <div className="dropdown relative border-[0.5px] border-black px-3 py-2 max-w-md rounded-md bg-[#fff] cursor-pointer">
          <div className="dropdown-header " onClick={toggleDropdown}>
            {selectedOption}{" "}
          </div>
          {isOpen && (
            <div className="dropdown-options bg-gray-800 text-[#fff] absolute max-w-md w-full px-4 py-5 rounded-lg top-12 -left-[2px]">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="dropdown-option py-2 cursor-pointer hover:bg-gray-700 px-3 rounded-lg "
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-3 mt-4 rounded-md text-[#fff] font-medium ">
            Get Vault Information
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full ">
        <div className="flex flex-col px-5 md:px-10 py-8 rounded-lg mx-3 shadow-lg bg-slate-200 hover:bg-slate-300">
          <h1 className="text-base font-medium mb-1">Vault Owner:</h1>
        </div>
        <div className="flex flex-col px-5 md:px-10 py-8 rounded-lg mx-3 shadow-lg bg-slate-200 hover:bg-slate-300">
          <h1 className="text-base font-medium mb-1">Vault Pubkey:</h1>
          <h1 className="text-base font-medium mb-1">AMMO Ammount:</h1>
          <h1 className="text-base font-medium mb-1">ATLAS Ammount</h1>
        </div>
        <div className="flex flex-col px-5 md:px-10 py-8 rounded-lg mx-3 shadow-lg bg-slate-200 hover:bg-slate-300">
          <h1 className="text-base font-medium mb-1">Minimun Buy Qty:</h1>
          <h1 className="text-base font-medium mb-1">Total Buy Cost:</h1>
          <h1 className="text-base font-medium mb-1">Minimun Sell Qty:</h1>
          <h1 className="text-base font-medium mb-1">Total Sell Cost:</h1>
        </div>
        <div className="flex flex-col px-5 md:px-10 py-8 rounded-lg mx-3 shadow-lg bg-slate-200 hover:bg-slate-300">
          <h1 className="text-base font-medium mb-1">ATLAS_MINT:</h1>
          <h1 className="text-base font-medium mb-1">
            Beneficiary_atlast_account:
          </h1>
          <h1 className="text-base font-medium mb-1">Resource_MINT:</h1>
          <h1 className="text-base font-medium mb-1">
            Beneficiary_resource_account:
          </h1>
        </div>
        <div className="flex flex-col px-5 md:px-10 py-8 rounded-lg mx-3 shadow-lg bg-slate-200 hover:bg-slate-300">
          <h1 className="text-base font-medium mb-1">Beneficiary_percent:</h1>
        </div>
      </div>
    </main>
  );
};

export default VaultInformation;
