import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TeamPageProps {
  onBookingClick?: () => void;
}

export default function TeamPage({ onBookingClick }: TeamPageProps) {
  const teamMembers = [
    {
      name: "Aji",
      title: "Physiotherapist",
      description: "Expert in physical therapy and rehabilitation",
      image: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcGlzdCUyMG1hbGV8ZW58MXx8fHwxNzYyMzIzOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Ninu",
      title: "Massage Therapist",
      description: "Skilled in various massage techniques",
      image: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtYXNzYWdlJTIwdGhlcmFwaXN0fGVufDF8fHx8MTc2MjMyMzk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Ruli",
      title: "Joint Mobilization Specialist",
      description: "Specializes in joint mobilization and pain management",
      image: "https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyMjk5NTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-gray-900 mb-4">Our Team</h1>
          <p className="text-gray-600 max-w-2xl">
            We are dedicated to providing expert care and treatment
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-100 relative">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.title}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
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
