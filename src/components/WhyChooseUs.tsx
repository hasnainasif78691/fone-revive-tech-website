import { Clock, Award, DollarSign, Shield, MapPin, Users } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Same-Day Phone Repairs',
    description: 'Most repairs completed within hours in Kingswood',
  },
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'Experienced and trained repair specialists',
  },
  {
    icon: DollarSign,
    title: 'Competitive Local Pricing',
    description: 'Affordable rates without compromising quality',
  },
  {
    icon: Shield,
    title: 'Warranty Included',
    description: 'All repairs backed by our guarantee',
  },
  {
    icon: MapPin,
    title: 'Convenient BS15 8JS Location',
    description: 'Easy to find in the heart of Kingswood',
  },
  {
    icon: Users,
    title: 'Walk-Ins Welcome',
    description: 'No appointment needed or book online',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your Trusted Phone Repair Shop
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              in Kingswood, Bristol
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Why local customers choose Fone Revive for all their mobile phone repairs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl backdrop-blur-sm">
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-white mb-1">Ready to fix your phone?</p>
              <p className="text-gray-400">Visit us today or book your repair online</p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
