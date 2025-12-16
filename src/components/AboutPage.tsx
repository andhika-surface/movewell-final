import { ImageWithFallback } from "./figma/ImageWithFallback";
import aboutImage from "figma:asset/c41210cdea7ed9d1649b8c86efbc6d1945f5efb9.png";

interface AboutPageProps {
  onBookingClick?: () => void;
}

export default function AboutPage({ onBookingClick }: AboutPageProps) {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-gray-900 mb-4">About Movewell Recovery</h1>
          <p className="text-gray-600 max-w-2xl">
            Committed to helping our patients feel better and move with confidence
          </p>
        </div>

        {/* Our Story Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600">
                Movewell Recovery is a premier bodywork studio founded by experienced professionals with a passion for helping people improve their mobility and recover from injuries.
              </p>
            </div>
            <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Movewell Recovery sports training and therapy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-gray-900 mb-6">Who We Are</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Our team of experts is dedicated to providing personalized care and treatment plans tailored to each patient's unique needs.
            </p>
            <p>
              We use evidence-based techniques and a holistic approach to help you achieve your health and wellness goals.
            </p>
          </div>
        </div>

        {/* How We Help Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h2 className="text-gray-900 mb-6">How We Help</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1B5F8F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="text-gray-900">Expertise</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1B5F8F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="text-gray-900">Personalized Approach</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1B5F8F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="text-gray-900">Proven Results</span>
              </div>
            </li>
          </ul>

          <button 
            onClick={onBookingClick}
            className="bg-[#1B5F8F] text-white px-8 py-4 rounded-lg hover:bg-[#154A72] transition-colors"
          >
            Book Your Session
          </button>
        </div>
      </div>
    </div>
  );
}