import React from "react";

const NewEmployeeDirectory = () => {
  return (
    <div className="inline-flex p-10 flex-col items-start gap-10 bg-[#3B729C] rounded-lg w-[310px]">
      <div className="flex h-[181px] flex-col items-start gap-[25px] self-stretch mb-7">
        <div className="flex items-start gap-[17px] self-stretch">
          <div className="rounded-full border border-white h-[50px] w-[50px] bg-slate-300 shrink-0">
            <img src="" alt="" />
          </div>

          <div className="flex flex-col items-start">
            <h1 className="text-white text-center text-[20px] font-medium">
              New Employee
            </h1>
            <p className="text-white text-center font-inter text-xs font-normal">
              05 June 2024
            </p>
          </div>
        </div>

        <p className="text-white text-justify text-[12px] font-light leading-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.
        </p>
      </div>

      <div className="sm:w-[230px] w-[100%] h-[160px] rounded-lg bg-slate-300">
        <img src="" alt="" />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="21"
        viewBox="0 0 25 21"
        fill="none"
      >
        <g clip-path="url(#clip0_477_474)">
          <path
            d="M12.526 1.2499C12.638 0.679903 12.932 0.313903 13.334 0.127903C13.66 -0.0240972 14.042 -0.0380972 14.438 0.0659028C14.782 0.155903 15.144 0.339903 15.49 0.603903C16.428 1.3179 17.306 2.6639 17.418 4.3459C17.452 4.8639 17.442 5.4159 17.394 6.0039C17.362 6.3919 17.312 6.7999 17.244 7.2239H21.234L21.252 7.2259C21.9 7.2519 22.528 7.4099 23.058 7.6859C23.516 7.9259 23.902 8.2539 24.17 8.6619C24.446 9.0819 24.596 9.5819 24.574 10.1539C24.558 10.5779 24.444 11.0379 24.212 11.5279C24.344 12.0799 24.406 12.6719 24.32 13.1919C24.248 13.6339 24.076 14.0259 23.768 14.3179C23.784 15.0479 23.686 15.6599 23.49 16.1899C23.288 16.7339 22.986 17.1859 22.598 17.5859C22.564 17.9359 22.508 18.2699 22.42 18.5819C22.31 18.9739 22.148 19.3339 21.922 19.6519C21.242 20.6119 20.698 20.5899 19.836 20.5539C19.716 20.5499 19.588 20.5439 19.388 20.5439H11.582C10.88 20.5439 10.328 20.4419 9.824 20.1899C9.326 19.9399 8.9 19.5559 8.446 18.9879L8.33 18.6559V9.5559L8.726 9.4499C9.732 9.1779 10.524 8.3179 11.14 7.2879C11.772 6.2279 12.216 4.9879 12.52 3.9859V1.3519L12.526 1.2499ZM0.8 8.6039H6.616C7.056 8.6039 7.416 8.9639 7.416 9.4039V20.0379C7.416 20.4779 7.056 20.8379 6.616 20.8379H0.8C0.36 20.8379 0 20.4779 0 20.0379V9.4039C0 8.9639 0.36 8.6039 0.8 8.6039ZM13.78 1.0959C13.694 1.1359 13.624 1.2359 13.582 1.4079V4.0599L13.558 4.2119C13.236 5.2859 12.756 6.6459 12.048 7.8319C11.382 8.9459 10.518 9.9039 9.394 10.3459V18.4679C9.702 18.8339 9.986 19.0819 10.298 19.2379C10.642 19.4099 11.046 19.4779 11.582 19.4779H19.388C19.528 19.4779 19.708 19.4859 19.878 19.4919C20.39 19.5119 20.712 19.5259 21.058 19.0379V19.0359C21.208 18.8239 21.318 18.5739 21.396 18.2939C21.48 17.9959 21.53 17.6639 21.554 17.3099L21.718 16.9599C22.062 16.6339 22.324 16.2679 22.492 15.8179C22.664 15.3539 22.738 14.7959 22.696 14.0959L22.678 13.7799L22.946 13.6139C23.13 13.4999 23.23 13.2839 23.272 13.0199C23.34 12.5999 23.268 12.0859 23.138 11.6079L23.18 11.2219C23.396 10.8079 23.5 10.4379 23.514 10.1139C23.526 9.7779 23.44 9.4859 23.28 9.2439C23.112 8.9899 22.866 8.7819 22.568 8.6259C22.184 8.4239 21.72 8.3079 21.236 8.2879V8.2899H15.972L16.09 7.6599C16.204 7.0499 16.286 6.4679 16.334 5.9159C16.38 5.3759 16.388 4.8739 16.358 4.4179C16.268 3.0739 15.58 2.0099 14.846 1.4519C14.612 1.2739 14.38 1.1519 14.17 1.0979C14.008 1.0539 13.876 1.0519 13.78 1.0959Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_477_474">
            <rect width="24.576" height="20.838" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default NewEmployeeDirectory;
