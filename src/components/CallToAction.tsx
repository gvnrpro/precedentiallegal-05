import { Button } from "@/components/ui/custom-button"

const CallToAction = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="large-title text-balance mb-6">
            Ready to simplify legal?
          </h2>
          <p className="body text-muted-foreground mb-10">
            Join thousands of businesses that trust us with their legal needs.
          </p>
          
          <Button 
            size="lg" 
            className="apple-button apple-button-effect hover-scale tap-scale apple-focus mb-8"
          >
            Start
          </Button>
          
          <p className="footnote text-muted-foreground">
            Questions?{" "}
            <a 
              href="mailto:hello@precedential.legal" 
              className="text-apple-blue hover:text-apple-blue/80 apple-focus"
            >
              hello@precedential.legal
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default CallToAction