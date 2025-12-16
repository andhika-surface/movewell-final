import { Star, Quote } from "lucide-react";

interface TestimonialsPageProps {
  onBookingClick?: () => void;
}

export default function TestimonialsPage({ onBookingClick }: TestimonialsPageProps) {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marathon Runner",
      image: "SJ",
      rating: 5,
      text: "Movewell Recovery has been a game-changer for my training. The assisted stretching sessions have significantly improved my flexibility and helped me avoid injuries. Highly recommend!",
      date: "October 2024"
    },
    {
      name: "Michael Chen",
      role: "Office Professional",
      image: "MC",
      rating: 5,
      text: "After years of desk work, I was dealing with chronic back pain. The team at Movewell Recovery created a personalized treatment plan that has made a huge difference. I can finally work without discomfort.",
      date: "September 2024"
    },
    {
      name: "Priya Sharma",
      role: "Yoga Instructor",
      image: "PS",
      rating: 5,
      text: "As a yoga instructor, I need to maintain peak physical condition. The joint mobilization therapy here is exceptional. The therapists are knowledgeable and truly care about their clients.",
      date: "November 2024"
    },
    {
      name: "David Martinez",
      role: "CrossFit Athlete",
      image: "DM",
      rating: 5,
      text: "The advanced release and massage techniques have helped me recover faster between workouts. The staff is professional and the facility is top-notch.",
      date: "August 2024"
    },
    {
      name: "Amanda Lee",
      role: "Busy Mom",
      image: "AL",
      rating: 5,
      text: "Between taking care of three kids and working full-time, my body was constantly aching. Movewell Recovery's treatments have given me my energy back. I feel like a new person!",
      date: "October 2024"
    },
    {
      name: "James Wilson",
      role: "Construction Worker",
      image: "JW",
      rating: 5,
      text: "My job is physically demanding, and I was struggling with shoulder pain. The therapists at Movewell Recovery identified the problem and helped me get back to work pain-free. Fantastic service!",
      date: "September 2024"
    }
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-gray-900 mb-4">What Our Clients Say</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients about their experience with Movewell Recovery
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <Quote className="w-10 h-10 text-gray-300 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {testimonial.image}
                </div>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Sessions Completed</div>
            </div>
            <div>
              <div className="text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#30302f] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="mb-4">Ready to Experience the Difference?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients and start your journey to better movement and wellness
          </p>
          <button 
            onClick={onBookingClick}
            className="bg-white text-[#30302f] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Book Your Session
          </button>
        </div>
      </div>
    </div>
  );
}