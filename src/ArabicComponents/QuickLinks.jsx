import { Link } from "react-router-dom";

const QuickLinks = () => {
  const links = [
    {
      src: "/icons/ERPIconAr.svg",
      alt: "ERP Icon",
      path: "https://arhc.operations.eu.dynamics.com/",
    },
    {
      src: "/icons/RealEstateIconAr.svg",
      alt: "Real Estate",
      path: "https://propertyprod.crm4.dynamics.com/main.aspx",
    },
    { src: "/icons/DMSAr.svg", alt: "DMS", path: "http://svrshamil/" },
    {
      src: "/icons/SelfServiceIconAr.svg",
      alt: "Employee self-service",
      path: "https://hress.arhc.com.sa:9091/",
    },
    {
      src: "/icons/HelpIconAr.svg",
      alt: "Help Desk",
      path: "http://helpdesk.riyadhholding.sa/support-portal/",
    },
    {
      src: "/icons/MidanAr.svg",
      path: "https://arhc-op-web.azurewebsites.net/violations",
    },
    {
      src: "/icons/BookRoomsAr.svg",
      alt: "Book rooms and meetings",
      path: "https://arhc.provizit.com/",
    },
    {
      src: "/icons/TrainingAr.svg",
      alt: "Training",
      path: "https://wevolve.percipio.com/",
    },
    {
      src: "/icons/office.svg",
      alt: "Office & Outlook",
      path: "https://www.office.com",
    },
  ];
  return (
    <div className="w-full bg-white">
      <h1>روابط سريعة</h1>
      <div className="w-full flex md:justify-center justify-start gap-[20px] flex-wrap mt-[20px]">
        {links.map((link, index) => (
          <Link key={index} to={link.path} target="_blank">
            <div className="md:w-[7vw] md:h-[7vw] w-[15vw] h-[15vw] rounded-lg flex flex-col justify-center gap-[12px] items-center">
              <img
                className="w-full h-full object-contain"
                src={link.src}
                alt={link.alt}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
