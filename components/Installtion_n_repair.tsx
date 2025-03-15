import { services } from "@/constants"
import ServiceCard from "./ServiceCard";

const InstallationRepairSection = () => (
  <section className="relative overflow-hidden bg-[#f5f5f7] py-16 px-6 md:px-12 lg:px-20 font-mono">
    {/* Background Image Overlay */}
    <div className="absolute inset-0 bg-[url('/images/hvac-bg.jpg')] bg-cover bg-center opacity-10 overflow-hidden" />

    {/* Content Container */}
    <div className="relative z-10 max-w-6xl mx-auto text-center">
      <h2 className=" bold-52 lg:bold-88 text-4xl text-black font-mono md:text-5xl leading-tight">
        Installation & Reliable Repairs
      </h2>
      <p className="mt-6 text-lg max-w-lg mx-auto regular-16 font-mono text-blackxl:max-w-[520px]">
        Whether it’s a brand-new installation or a quick repair, our experts ensure your HVAC system works at peak efficiency.
      </p>

      {/* Services Grid */}
      <div className="relative w-full z-10 mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-black">Need Assistance?</h3>
        <p className="mt-2 text-lg text-black max-w-md mx-auto">
          Get a free quote or book a repair today!
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow transition-transform transform hover:scale-105 hover:bg-blue-700">
          Get a Quote
        </button>
      </div>
    </div>
  </section>
);

export default InstallationRepairSection;
