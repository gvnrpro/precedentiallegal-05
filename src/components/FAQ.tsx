import { useState } from "react"
import { ChevronDown, FileText } from "lucide-react"

const faqs = [
  {
    question: "What's included in the monthly plan?",
    answer: "Contract creation, reviews, and unlimited strategic legal advice. You'll have a dedicated lawyer assigned to your business."
  },
  {
    question: "Can I really submit unlimited requests?",
    answer: "Yes. We don't count requests — we just work on one at a time to maintain quality."
  },
  {
    question: "Do you represent clients in court?",
    answer: "No. We're focused on corporate and commercial support — not litigation."
  },
  {
    question: "What kinds of contracts do you draft?",
    answer: "NDAs, employment contracts, vendor agreements, lease documents, MOUs, and more."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. Your subscription is monthly and can be cancelled at any time."
  },
  {
    question: "How do I send requests?",
    answer: "Once subscribed, you can send requests via email or WhatsApp — whatever's easier for you."
  },
  {
    question: "What's the turnaround time?",
    answer: "Most contracts are reviewed or delivered in 1–3 business days."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-premium-xl bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-premium-lg scroll-reveal">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            Questions? We've Got Answers.
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's what most clients ask us before subscribing.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-premium-md">
          {faqs.map((faq, index) => (
            <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <button
                className="w-full card-premium hover-lift p-8 text-left transition-all duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent-brand/10 rounded-premium-md flex items-center justify-center">
                      <FileText className="w-5 h-5 text-accent-brand" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground text-left">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`text-accent-brand transition-transform duration-300 flex-shrink-0 ml-4 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </div>
                {openIndex === index && (
                  <div className="mt-6 pt-6 border-t border-border animate-accordion-down">
                    <p className="font-body text-muted-foreground leading-relaxed ml-14">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ