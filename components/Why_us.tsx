"use client";

const WhyUs = () => {
  return (
    <section className="relative w-full py-12 md:py-20 bg-[#f5f5f7] text-black font-mono">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bold-52 lg:bold-88 text-black">
              Why Choose Us?
            </span>
          </h2>
          <p className="text-black md:text-lg max-w-xl mx-auto">
            Excellence, reliability, and tailored solutions that set the industry standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-6">
          {/* Hero Block - Dominant section */}
          <div className="md:col-span-5 md:row-span-1 bg-black text-white p-8 md:p-10 rounded-2xl space-y-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug">
                Industry <span className="text-blue-400">Leaders</span>
              </h3>
              <p className="text-white text-lg md:text-xl leading-relaxed max-w-[90%]">
                Decades of expertise in delivering innovative HVAC solutions.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 bg-blue-400 rounded-full" />
              <span className="text-sm font-medium text-white">Since 1995</span>
            </div>
          </div>

          {/* Feature Grid - Tightly arranged metrics */}
          <div className="md:col-span-3 grid grid-cols-2 gap-4">
            {[
              { title: "24/7 Availability", value: "100%" },
              { title: "Installation Speed", value: "<24h" },
              { title: "Certified Experts", value: "150+" },
              { title: "Satisfaction Rate", value: "99.8%" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-black transition-all"
              >
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-black">{item.value}</p>
                  <p className="text-sm font-medium text-black">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Service Highlights - Full width bottom section */}
          <div className="md:col-span-8 grid md:grid-cols-4 gap-4 mt-4">
            {[
              { 
                title: "Precision Engineering",
                description: "Military-grade quality standards" 
              },
              { 
                title: "Sustainable Solutions",
                description: "Energy-efficient system designs" 
              },
              { 
                title: "Smart Integration",
                description: "IoT-enabled climate control" 
              },
              { 
                title: "Preventive Maintenance",
                description: "AI-powered system monitoring" 
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-black hover:bg-gray-50 transition-colors"
              >
                <div className="space-y-2">
                  <p className="text-lg font-bold text-gray-900">{item.title}</p>
                  <p className="text-sm text-black leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;