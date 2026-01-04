import { Calendar, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Book Online or Walk In',
    description: 'Convenient phone repair in Kingswood - schedule online or visit us directly',
    number: '01',
  },
  {
    icon: Wrench,
    title: 'We Fix Your Phone',
    description: 'Most repairs completed the same day by our expert technicians',
    number: '02',
  },
  {
    icon: CheckCircle,
    title: 'Collect & Go',
    description: 'Fully tested, ready to use, and backed by our warranty',
    number: '03',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Getting your phone repaired in Kingswood is quick and easy
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 h-full">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>

                  <div className="mt-8 text-center">
                    <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <step.icon className="w-10 h-10 text-cyan-400" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500"></div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              Start Your Repair Today
            </button>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
