import React from "react";

const DealsOfDay = () => {
  const Images = [
    "MobileAndAccessories",
    "ElectronicsAndAccessories",
    "HomeKitchenAndMore",
    "TvAndAppliances",
    "FashionAndBeauty",
    "DailyEssentials",
  ];
  return (
    <div className="flex flex-col p-4">
      <div className="font-roboto text-2xl font-bold text-gray-800">
        Deals Of Day
      </div>
      <div className="flex w-full justify-between py-4">
        {Images.map((value) => (
          <div key={value} className="flex h-52 w-64 justify-center">
            <picture>
              <img src={`./DealsOfDay/${value}.jpg`} alt="" />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsOfDay;
