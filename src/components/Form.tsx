"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface FormData {
  category: string;
  minBuyQuantity: number;
  totalBuyPrice: number;
  minSellQuantity: number;
  totalSellPrice: number;
  buyPricePerUnit: number;
  sellPricePerUnit: number;
  beneficiaryPublicKey: string;
  beneficiaryPercent: number;
}

const categories = ["AMMO", "FOOD", "FUEL", "TOOL"];

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "AMMO",
    minBuyQuantity: 0,
    totalBuyPrice: 0,
    minSellQuantity: 0,
    totalSellPrice: 0,
    sellPricePerUnit: 0,
    buyPricePerUnit: 0,
    beneficiaryPublicKey: "",
    beneficiaryPercent: 0.0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (name === "minBuyQuantity" || name === "totalBuyPrice") {
      const minBuyQuantity =
        name === "minBuyQuantity"
          ? parseInt(value, 10)
          : formData.minBuyQuantity;
      const totalBuyPrice =
        name === "totalBuyPrice" ? parseInt(value, 10) : formData.totalBuyPrice;
      const buyPricePerUnit =
        totalBuyPrice > 0 && minBuyQuantity > 0
          ? (totalBuyPrice / minBuyQuantity).toFixed(4)
          : "0";
      setFormData((prevState) => ({
        ...prevState,
        minBuyQuantity,
        totalBuyPrice,
        buyPricePerUnit: parseFloat(buyPricePerUnit),
      }));
    } else if (name === "minSellQuantity" || name === "totalSellPrice") {
      const minSellQuantity =
        name === "minSellQuantity"
          ? parseInt(value, 10)
          : formData.minSellQuantity;
      const totalSellPrice =
        name === "totalSellPrice"
          ? parseInt(value, 10)
          : formData.totalSellPrice;
      const sellPricePerUnit =
        totalSellPrice > 0 && minSellQuantity > 0
          ? (totalSellPrice / minSellQuantity).toFixed(4)
          : "0";
      setFormData((prevState) => ({
        ...prevState,
        minSellQuantity,
        totalSellPrice,
        sellPricePerUnit: parseFloat(sellPricePerUnit),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    // Check if any required fields are empty
    if (
      !formData.category ||
      formData.minBuyQuantity === 0 ||
      formData.totalBuyPrice === 0 ||
      formData.minSellQuantity === 0 ||
      formData.totalSellPrice === 0 ||
      !formData.beneficiaryPublicKey ||
      formData.beneficiaryPercent === 0
    ) {
      // Handle form validation error
      //   alert("Please fill in all required fields.");
      toast.error("Fill all the fields.");
      return false;
    }
    return true;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if any required fields are empty

    if (!validateForm()) {
      return;
    }

    console.log(formData);
    // Proceed with form submission
  };

  return (
    <main className="min-w-[400px] mx-auto">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex ">
        <div className="shadow-xl px-8 bg-[#fff] py-6 rounded-lg  mb-10 ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-auto mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="category"
              >
                Categories:
              </label>
              <select
                required={true}
                className=" bg-white inline-flex justify-center w-full  text-sm appearance-none border-[.5px] font-light border-gray-500 rounded-xl py-[.6rem] px-4 text-gray-700 leading-tight focus:outline-[#392467] focus:shadow-outline"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-auto mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="minBuyQuantity"
              >
                Minimum Buy Quantity:
              </label>
              <input
                className=" appearance-none font-light border-[.5px] border-gray-500 rounded-xl w-full py-[.6rem] px-4 text-gray-700 leading-tight focus:outline-[#392467] focus:shadow-outline"
                type="number"
                required={true}
                id="minBuyQuantity"
                name="minBuyQuantity"
                value={formData.minBuyQuantity}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="flex flex-col w-auto mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="totalBuyPrice"
              >
                Total Buy Price:{" "}
                <span className="bg-gray-700 text-[#fff] px-1 py-1 rounded">
                  {formData.totalBuyPrice} Atlas
                </span>
              </label>
              <input
                className=" appearance-none font-light border-[.5px] border-gray-500 rounded-xl w-full py-[.6rem] px-4 text-gray-700 leading-tight focus:outline-[#392467] focus:shadow-outline"
                type="number"
                required={true}
                id="totalBuyPrice"
                name="totalBuyPrice"
                value={formData.totalBuyPrice}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="flex flex-col w-auto mb-12">
              <h1 className="block text-gray-700 font-medium mb-2">
                Buy Price Per Unit:
                <span className="bg-gray-700 text-[#fff] px-1 py-1 rounded ml-2">
                  {formData.totalBuyPrice > 0 &&
                  !isNaN(formData.minBuyQuantity / formData.minBuyQuantity)
                    ? (
                        formData.totalBuyPrice / formData.minBuyQuantity
                      ).toFixed(4)
                    : 0}
                </span>
              </h1>
            </div>

            <div className="flex flex-col w-auto mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="minSellQuantity"
              >
                Minimum Sell Quantity:
              </label>
              <input
                className=" appearance-none font-light border-[.5px] border-gray-500 rounded-xl w-full py-[.6rem] px-4 text-gray-700 leading-tight focus:outline-[#392467] focus:shadow-outline"
                type="number"
                required={true}
                id="minSellQuantity"
                name="minSellQuantity"
                value={formData.minSellQuantity}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="flex flex-col w-auto mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="totalSellPrice"
              >
                Total Sell Price:{" "}
                <span className="bg-gray-700 text-[#fff] px-1 py-1 rounded">
                  {formData.totalSellPrice} Atlas
                </span>
              </label>
              <input
                className=" appearance-none font-light border-[.5px] border-gray-500 rounded-xl w-full py-[.6rem] px-4 text-gray-700 leading-tight focus:outline-[#392467] focus:shadow-outline"
                type="number"
                required={true}
                id="totalSellPrice"
                name="totalSellPrice"
                value={formData.totalSellPrice}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div className="flex flex-col w-auto mb-12">
              <h1 className="block text-gray-700 font-medium mb-2">
                Sell Price Per Unit:
                <span className="bg-gray-700 text-[#fff] px-1 py-1 rounded ml-2">
                  {formData.minSellQuantity > 0 &&
                  !isNaN(formData.totalSellPrice / formData.minSellQuantity)
                    ? (
                        formData.totalSellPrice / formData.minSellQuantity
                      ).toFixed(4)
                    : 0}
                </span>
              </h1>
            </div>

            <div className="flex flex-col w-auto mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="beneficiaryPublicKey"
              >
                Beneficiary Public Key:
              </label>
              <input
                className=" appearance-none font-light border-[.5px] border-gray-500 rounded-xl w-full py-[.6rem] px-4 text-gray-700 leading-tight focus:outline-[#392467] focus:shadow-outline"
                type="text"
                id="beneficiaryPublicKey"
                name="beneficiaryPublicKey"
                value={formData.beneficiaryPublicKey}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-auto mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="beneficiaryPercent"
              >
                Beneficiary Percent:
              </label>
              <input
                className="appearance-none font-light border-[.5px] border-gray-500 rounded-xl w-full py-[.6rem] px-4 text-gray-700 leading-tight focus:outline-[#392467] focus:shadow-outline"
                type="number"
                // required
                id="beneficiaryPercent"
                name="beneficiaryPercent"
                value={formData.beneficiaryPercent}
                onChange={handleChange}
                min="0"
                step="0.01"
              />
            </div>
            <button
              className="bg-blue-500 font-medium px-4 py-3 text-[#fff] rounded w-full mt-4 hover:bg-blue-600 transition duration-200 ease-in-out"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Form;
