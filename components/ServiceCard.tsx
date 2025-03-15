// import Image from "next/image";

// const ServiceCard = ({ title, description, icon }) => (
//   <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
//     <div className="p-4 bg-blue-100 rounded-full">
//       <Image src={icon} alt={title} width={60} height={60} />
//     </div>
//     <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
//       {title}
//     </h3>
//     <p className="mt-2 text-gray-600 text-center">{description}</p>
//   </div>
// );

// export default ServiceCard;


import Image from "next/image";

type ServiceProps = {
  title: string;
  description: string;
  icon?: string
};

const ServiceCard = ({ title, description, icon}: ServiceProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className={`p-4 rounded-full }`}>
        <Image src={icon} alt={title} width={60} height={60} />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">{title}</h3>
      <p className="mt-2 text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
