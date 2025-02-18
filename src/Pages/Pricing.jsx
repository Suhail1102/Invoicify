import { CheckCircle, XCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    features: ["Basic Invoice Generation", "Print & Download", "Limited Templates"],
    unavailable: ["Cloud Storage", "Customization Options", "Priority Support"],
    buttonText: "Get Started",
    buttonStyle: "bg-gray-700 hover:bg-gray-900",
  },
  {
    name: "Pro",
    price: "$19/mo",
    features: [
      "All Free Features",
      "Unlimited Invoices",
      "Customizable Templates",
      "Cloud Storage",
    ],
    unavailable: ["Priority Support"],
    buttonText: "Upgrade Now",
    buttonStyle: "bg-blue-600 hover:bg-blue-800",
  },
  {
    name: "Enterprise",
    price: "$49/mo",
    features: [
      "All Pro Features",
      "Advanced Customization",
      "Multi-User Access",
      "Priority Support",
    ],
    unavailable: [],
    buttonText: "Contact Us",
    buttonStyle: "bg-green-600 hover:bg-green-800",
  },
];

export default function Pricing() {
  return (
    <>
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Flexible Pricing Plans</h2>
        <p className="mt-4 text-gray-600">Choose a plan that fits your invoicing needs.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
              <p className="text-4xl font-bold text-gray-900 mt-2">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-500 w-5 h-5" /> {feature}
                  </li>
                ))}
                {plan.unavailable.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-400 line-through">
                    <XCircle className="text-gray-400 w-5 h-5" /> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 text-white py-2 px-6 rounded-lg ${plan.buttonStyle} transition duration-300`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
