import { useState } from "react"; // Import useState to manage state
import Nav from "../ArabicComponents/Nav";
import NewsCard from "../ArabicComponents/NewsCard";
import { useLocation } from "react-router-dom";

const AllNewsAr = () => {
  const location = useLocation();
  // console.log("location", location);
  const news = location.state ? location.state : [];

  return (
    <>
      <div className="overflow-hidden w-full h-full" style={{direction: "rtl"}}>
        <Nav />
        <div className="py-[30px] bg-[#F4F8FB] overflow-hidden w-full shadow-md">
          <div className="px-[20px] py-[16px] lg:mx-9 mxmb-[20px] flex items-center rounded-[8px] rounded-bl-none rounded-br-none justify-between gap-[10px] self-stretch flex-wrap bg-[#C2AB80] text-[white]">
            <h1 className="text-[20px] font-light self-stretch min-w-[100px]">
              Corporate News
            </h1>
          </div>
          <div className="flex w-full bg-[#F4F8FB]">
            <div className="max-w-[1470px] lg:py-8 p-6 flex flex-wrap lg:justify-start gap-6 md:gap-8 lg:gap-[20px] lg:mx-8 md:mx-12 xs:justify-center">
              {news.map((item, index) => (
                <NewsCard
                  key={index}
                  img={`https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${item.fields.image_name}`}
                  title={item.fields.Title_ar}
                  subheading={item.fields.Preview_ar}
                  fulltext={item.fields.Full_Text_ar}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNewsAr;
