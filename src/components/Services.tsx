import { Smartphone, Battery, Zap, Droplet, Lock, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'iPhone Screen Repair in Kingswood',
    description: 'Fast same-day screen replacements with high-quality parts',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Smartphone,
    title: 'Samsung Phone Repairs Bristol',
    description: 'Display, battery & software fixes for all Samsung models',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Battery,
    title: 'Battery Replacement',
    description: 'Restore battery life quickly with genuine replacements',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: Zap,
    title: 'Charging Port Repair',
    description: 'Fix loose or non-charging devices efficiently',
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Droplet,
    title: 'Water Damage Repair',
    description: 'Advanced diagnostics & recovery for water-damaged phones',
    gradient: 'from-cyan-500 to-teal-600',
  },
  {
    icon: Lock,
    title: 'Software & Unlocking Services',
    description: 'Updates, resets & performance fixes',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: ShoppingBag,
    title: 'Phone Accessories',
    description: 'Cases, chargers & screen protectors in stock',
    gradient: 'from-rose-500 to-red-600',
  },
];

export default function Services() {
  return (
    <section className="relative py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Expert Phone Repair Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional mobile phone repairs in Kingswood, Bristol - all devices, all issues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>

              <div className="relative">
                <div className={`inline-flex p-3 bg-gradient-to-r ${service.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
            View All Services & Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
