import { CheckCircle, FileText, Printer, ShieldCheck, Layers, Settings } from "lucide-react";

const features = [
  {
    title: "Easy Invoice Creation",
    description: "Quickly generate invoices with a simple and intuitive interface.",
    icon: <FileText className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Print & Download",
    description: "Easily print invoices or download them as PDFs with one click.",
    icon: <Printer className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Secure & Reliable",
    description: "Your data is safe with end-to-end encryption and secure storage.",
    icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
  },
  {
    title: "Customizable Templates",
    description: "Personalize invoices with custom logos, colors, and styles.",
    icon: <Layers className="w-10 h-10 text-purple-500" />,
  },
  {
    title: "Auto Calculations",
    description: "Automatically calculate totals, taxes, and discounts instantly.",
    icon: <Settings className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Cloud Backup",
    description: "Save and access invoices anytime with secure cloud storage.",
    icon: <CheckCircle className="w-10 h-10 text-teal-500" />,
  },
];

export default function Features() {
  return (
    <>
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Powerful Features to Simplify Invoicing
        </h2>
        <p className="mt-4 text-gray-600">
          Generate, print, and manage invoices effortlessly with our intuitive tool.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-all">
              {feature.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
