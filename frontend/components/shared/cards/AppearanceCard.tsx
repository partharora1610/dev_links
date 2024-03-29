"use client";

import React from "react";
import { useAuth } from "@/context/authContext";

const AppearanceCard = (props: any) => {
  const { properties } = props;
  const { userTheme, loading, updateTheme } = useAuth();

  const onSelectHandler = (id: string) => {
    console.log(id);
    updateTheme(id);
  };

  console.log(userTheme);

  const active = userTheme._id === properties._id;

  if (loading) return <div>Loading...</div>;

  return (
    <div
      className={`p-3 rounded-lg ${
        active ? "border-2 border-gray-500" : "border-2 border-white"
      }`}
    >
      <div
        className={` w-[140px] h-[200px] p-4 bg`}
        style={{
          backgroundColor: `${properties.backgroundColor}`,
        }}
        onClick={() => {
          onSelectHandler(properties._id);
        }}
      >
        <div className="flex flex-col gap-2 items-center mt-14">
          <div
            className={`w-[100px] h-[20px] rounded-md`}
            style={{
              backgroundColor: `${properties.buttonColor}`,
            }}
          ></div>
          <div
            className={`w-[100px] h-[20px] rounded-md `}
            style={{
              backgroundColor: `${properties.buttonColor}`,
              color: `${properties.buttonText}`,
            }}
          ></div>
          <div
            className={`w-[100px] h-[20px] rounded-md `}
            style={{
              backgroundColor: `${properties.buttonColor}`,
            }}
          ></div>
        </div>
      </div>
      <p className="text-gray-500 text-center mt-2">{properties.name}</p>
    </div>
  );
};

export default AppearanceCard;
