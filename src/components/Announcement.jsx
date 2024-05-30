import React, { useState, useEffect } from 'react';

const Announcement = ({ announcements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!announcements || announcements.length === 0 ) {
    return null 
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 4300); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#50917F] relative">
      <div
        className="flex gap-[40px] p-[40px] transition-transform duration-500"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${currentIndex * 40}px))`,
        }}
      >
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className={`w-full justify-center flex xl:flex-nowrap flex-wrap flex-shrink-0 rounded-lg gap-[60px] items-center self-stretch content-center`}
            style={{ backgroundImage: `url('https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${announcement.fields.image_name})'` }}
          >
            <div className="w-[460px] h-[320px] bg-slate-300 rounded-lg overflow-hidden shrink-0"></div>
            <div className="text-white flex flex-col gap-[20px] items-start">
              <h1 className="text-[24px] font-light">{announcement.fields.title}</h1>
              <p className="text-[16px] font-light">
                {announcement.fields.preview_en}
              </p>
              <a
                className="text-[14px] px-[10px] py-[5px] border-[1px] border-white rounded-[8px]"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;