import { Workflow, Heart, Move, Check } from "lucide-react";

interface ServicesPageProps {
  onBookingClick?: () => void;
}

export default function ServicesPage({ onBookingClick }: ServicesPageProps) {
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

  const pricingOptions = [
    { duration: "15 minutes", description: "Pre/Post Workout or Padel Mobilization", price: "IDR 90k" },
    { duration: "30 minutes — Quick Reset", description: "", price: "IDR 175k" },
    { duration: "60 minutes — Full Bodywork", description: "", price: "IDR 325k" },
    { duration: "90 minutes — Extended Recovery", description: "", price: "IDR 485k" }
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-gray-900 mb-4">Services & Regular Pricing</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Invest in your body's recovery. We offer flexible options to fit your lifestyle and goals. (Note: See our Opening Promo for special rates!)
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Single Session Pricing */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-gray-900 mb-6">Single Session Pricing</h2>
            <div className="space-y-4">
              {pricingOptions.map((option, index) => (
                <div key={index} className="flex items-start justify-between pb-4 border-b border-gray-100 last:border-0">
                  <div>
                    <div className="text-gray-900">{option.duration}</div>
                    {option.description && (
                      <div className="text-gray-500 text-sm mt-1">{option.description}</div>
                    )}
                  </div>
                  <div className="text-[#1a497f]">{option.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Voucher Package */}
          <div className="bg-[#1a497f] text-white rounded-2xl p-8">
            <h2 className="mb-6">Voucher Package (Regular)</h2>
            <div className="mb-6">
              <div className="text-gray-300 mb-2">Buy 10 x 30-min vouchers at <span className="text-white">IDR 150k</span> each (total IDR 1.5m).</div>
            </div>
            <div className="mb-6">
              <div className="text-gray-300 mb-3">Vouchers are flexible — use them however you like:</div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">½ voucher = 15 min (Mobilization)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">1 voucher = 30 min</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">2 vouchers = 60 min</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">3 vouchers = 90 min</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* First-Time Client Offer */}
        <div className="bg-[#E8F4F8] border border-[#1a497f]/30 rounded-2xl p-8 mb-12 text-center">
          <h2 className="text-[#1a497f] mb-3">First-Time Client Offer</h2>
          <p className="text-[#154A72]">
            Your first 15-minute trial session is <span className="text-[#1a497f]">completely free.</span>
          </p>
          <p className="text-gray-700 text-sm mt-2">
            This offer must be booked through our customer service and cannot be claimed as a walk-in.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Book your session today and take the first step towards better movement and wellness
          </p>
          <button 
            onClick={onBookingClick}
            className="bg-[#1a497f] text-white px-8 py-4 rounded-lg hover:bg-[#0f3359] transition-colors"
          >
            Book Your Session
          </button>
        </div>
      </div>
    </div>
  );
}