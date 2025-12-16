import { Workflow, Heart, Move } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Workflow,
      title: "Assisted Stretching",
      description: "Targeted stretches to increase your mobility and range of motion",
      bgColor: "bg-[#e8eaf4]",
      iconColor: "text-[#5d68a1]"
    },
    {
      icon: Heart,
      title: "Advanced Release & Massage",
      description: "Scientific therapy to relieve muscle tension and discomfort",
      bgColor: "bg-[#e8eaf4]",
      iconColor: "text-[#5d68a1]"
    },
    {
      icon: Move,
      title: "Joint Mobilization",
      description: "Manual techniques to improve joint function and reduce pain",
      bgColor: "bg-[#e8eaf4]",
      iconColor: "text-[#5d68a1]"
    }
  ];

  return (
    <section id="services" className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-gray-900 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-[#e8eaf4] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}