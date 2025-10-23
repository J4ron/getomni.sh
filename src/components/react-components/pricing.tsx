import { pricingPlans } from "../data/pricing";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <header className="text-center mb-16">
          <h2
            id="pricing-heading"
            className="text-4xl font-bold tracking-tight text-[#0A0A0A]"
          >
            Fair Pricing. Full Access. Your Choice.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you need full flexibility, long-term savings, or lifetime
            ownership <br className="hidden md:block" />
            pick the plan that fits your workflow. No hidden fees. Cancel anytime.
          </p>
        </header>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPlans.map((plan, idx) => {
            const rotationClass =
              idx === 0
                ? "lg:-rotate-[1deg]"
                : idx === 2
                ? "lg:rotate-[1deg]"
                : "lg:rotate-0";

            const gradientColors = [
              "bg-[radial-gradient(circle_at_top_left,_#ff80b5,_#9089fc)]",
              "bg-[radial-gradient(circle_at_top_right,_#80ffea,_#fffc8a)]",
              "bg-[radial-gradient(circle_at_bottom,_#a78bfa,_#facc15)]",
            ];

            return (
              <article
                key={plan.id}
                className={`relative flex flex-col h-full items-stretch ${rotationClass}`}
                aria-labelledby={`plan-${plan.id}-title`}
              >
               
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[101%] h-[101%] -z-10 rounded-sm blur-[10px] opacity-56 pointer-events-none ${gradientColors[idx % gradientColors.length]}`}
                  aria-hidden="true"
                />

              
                <Card
                  className="flex flex-col h-full bg-[#0F0F0F] rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="flex flex-col h-full p-6">
                    <header className="mb-6">
                      <h3
                        id={`plan-${plan.id}-title`}
                        className="text-2xl font-semibold text-white mb-2"
                      >
                        {plan.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <p className="text-3xl font-bold text-white mb-6">
                        {plan.price}
                      </p>
                    </header>

                    <ul className="-mt-8 mb-8 space-y-2 text-sm text-gray-300" aria-label="Features">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2" aria-hidden="true">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      type="button"
                      className="mt-auto bg-white text-black hover:bg-gray-200 transition-opacity hover:cursor-pointer"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </article>
            );
          })}
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          All plans include free updates and support.
        </footer>
      </div>
    </section>
  );
}
