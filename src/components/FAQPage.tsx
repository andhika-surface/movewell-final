import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQPageProps {
  onBookingClick?: () => void;
}

export default function FAQPage({ onBookingClick }: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What services does Movewell Recovery offer?",
          answer: "We offer a range of bodywork services including Assisted Stretching, Advanced Release & Massage, and Joint Mobilization. Each service is designed to help improve mobility, reduce pain, and enhance overall wellness."
        },
        {
          question: "Do I need a referral to book an appointment?",
          answer: "No referral is needed! You can book directly with us either through our booking system or by contacting us. However, if you're using insurance, check with your provider about their requirements."
        },
        {
          question: "What should I wear to my appointment?",
          answer: "We recommend wearing comfortable, loose-fitting clothing that allows for easy movement. Athletic wear or yoga pants and a t-shirt are ideal. We provide changing facilities if needed."
        }
      ]
    },
    {
      category: "Booking & Scheduling",
      questions: [
        {
          question: "How do I book an appointment?",
          answer: "You can book an appointment by clicking the 'Book Your Session' button on our website, calling us directly at +62 811 1728 128, or emailing hello@movewellindonesia.com. We'll confirm your appointment within 24 hours."
        },
        {
          question: "What is your cancellation policy?",
          answer: "We require at least 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee. We understand that emergencies happen, so please contact us as soon as possible."
        },
        {
          question: "How long does a typical session last?",
          answer: "Most sessions are 60 minutes long, though we also offer 30-minute and 90-minute sessions depending on your needs and the service selected."
        }
      ]
    },
    {
      category: "Treatment & Services",
      questions: [
        {
          question: "Is the treatment painful?",
          answer: "Our treatments should not be painful. You may experience some discomfort during deep tissue work or stretching, but we always work within your comfort level. Communication is key - let us know if anything feels uncomfortable."
        },
        {
          question: "How many sessions will I need?",
          answer: "This varies depending on your individual needs and goals. Some clients see improvement after one session, while others benefit from a series of treatments. We'll discuss a personalized treatment plan during your first visit."
        },
        {
          question: "Can I receive treatment if I'm injured?",
          answer: "In many cases, yes! Our therapists are trained to work with various injuries and conditions. However, for acute injuries or certain medical conditions, we may recommend consulting with your doctor first."
        }
      ]
    },
    {
      category: "Payment & Insurance",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, credit/debit cards (Visa, Mastercard, AMEX), and bank transfers. Payment is due at the time of service unless other arrangements have been made."
        },
        {
          question: "Do you accept insurance?",
          answer: "We can provide receipts for insurance reimbursement, but payment is required at the time of service. Check with your insurance provider about coverage for bodywork and massage therapy services."
        },
        {
          question: "Do you offer packages or memberships?",
          answer: "Yes! We offer discounted packages for multiple sessions and membership programs for regular clients. Ask us about our current offers when you book your appointment."
        }
      ]
    }
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#1a497f] rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8 mb-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-gray-900 mb-4">{category.category}</h2>
              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div key={questionIndex} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="text-gray-900 pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onBookingClick}
              className="bg-[#1a497f] text-white px-8 py-4 rounded-lg hover:bg-[#15395f] transition-colors"
            >
              Book a Consultation
            </button>
            <a 
              href="https://wa.me/628111728128"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}