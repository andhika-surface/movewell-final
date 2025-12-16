import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "figma:asset/f0f840365061725fbbf8db5389f79f765e3742fc.png";

interface HeroProps {
  onBookingClick?: () => void;
}

export default function Hero({ onBookingClick }: HeroProps) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-gray-900">
              Movewell Recovery - Your Modern Bodywork Studio in Jakarta
            </h1>
            <p className="text-gray-600 max-w-md">
              Recovery. Stretch. Massage - We help athletes, professionals, and everyday movers care for their bodies and move better.
            </p>
            <button 
              onClick={onBookingClick}
              className="bg-[#1a497f] text-white px-8 py-4 rounded-lg hover:bg-[#0f3359] transition-colors"
            >
              Book Your Session
            </button>
          </div>

          {/* Right Image */}
          <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
            <img
              src={heroImage}
              alt="Physical therapist working with client"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}