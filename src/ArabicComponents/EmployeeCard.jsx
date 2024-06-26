import React, { useState } from "react";


const EmployeeCardAr = ({ img, title, jobTitle, number, email }) => {
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
    };

  return (
    <div className="w-[280px] h-[381.2px] items-center justify-center gap-[20px] bg-white rounded-[17.6px] p-[27.5px] mb-4">
      <div
        className="h-[143px] w-[143px] mr-[20%] mb-[25px] rounded-[8px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <h1 className="font-figtree flex flex-col items-center justify-center font-semibold text-[22px] leading-[19.2px] mb-[10px]">
        {title}
      </h1>
      <div className="flex flex-col gap-[15px] items-start justify-start border-b-[2px] pb-4 ">
        <div className="flex flex-row gap-[8px] ">
        <div className="flex flex-row gap-[8px] items-center border-r-[1px] pl-[16px]">
          <div
            style={{
              backgroundImage: "url('/icons/graduation-cap.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[15.21px] h-[12.27px] shrink-0"
          ></div>
        </div>
        <p className="text-[14px] font-figtree font-normal leading-[21.6px]">
            {jobTitle}
        </p>
        </div>
        <div className="flex flex-row gap-[8px]">
        <div className="flex flex-row gap-[8px] items-center border-r-[1px] pl-[16px]">
          <div
            style={{
              backgroundImage: "url('/icons/job.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[15.21px] h-[12.27px] shrink-0"
          ></div>
        </div>
        <p className="text-[14px] font-figtree font-normal leading-[21.6px]">
            {jobTitle}
        </p>
        </div>
      </div>
      <div className="flex items-center w-[225.5px] h-[24px] gap-[15px] mt-4">
        <div
          style={{
            backgroundImage: "url('/icons/Group.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-[12.26px] h-[12.67px] shrink-0"
        ></div>

        <p className="font-figtree font-medium text-[13px] leading-[16.5px]">
            {number}
        </p>
        <button onClick={() => handleCopy("+9876543210")} className="mr-auto">
            <img
                src="/icons/copy.svg"
                alt="copy icon"
                className="w-[8px] h-[8px] overflow-hidden"
            />
        </button>
      </div>
      <div className="flex items-center w-[225.5px] h-[24px] gap-[15px] mt-2">
        <div
          style={{
            backgroundImage: "url('/icons/email.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-[12.67px] h-[8.11px] shrink-0"
        ></div>

        <p className="font-figtree font-medium text-[13px] leading-[16.5px]">
            {email}
        </p>
        <button onClick={() => handleCopy("name@websitename.com")} className="mr-auto">
            <img
                src="/icons/copy.svg"
                alt="copy icon"
                className="w-[8px] h-[8px] overflow-hidden"
            />
        </button>
      </div>
    </div>
  );
};

export default EmployeeCardAr;
