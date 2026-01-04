import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function LocalSEO() {
  return (
    <section className="relative py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Proudly Serving
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Kingswood & Bristol
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Kingswood, Fone Revive proudly serves customers across Bristol and surrounding areas. If you're searching for "phone repair near me" or "mobile phone repair Kingswood", our local shop is just minutes away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Location</h3>
                  <p className="text-gray-400">Fone Revive</p>
                  <p className="text-gray-400">Kingswood, Bristol</p>
                  <p className="text-cyan-400 font-semibold">BS15 8JS, United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Contact Us</h3>
                  <a href="tel:01179123456" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold block">
                    0117 912 3456
                  </a>
                  <a href="mailto:info@fonerevive.co.uk" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    info@fonerevive.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-gray-400">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Navigation className="w-5 h-5" />
                Get Directions to Kingswood
              </button>
            </div>

            <div className="relative h-64 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-400 mb-2">Storefront Image</p>
                  <p className="text-sm text-gray-500">Fone Revive, Kingswood</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[500px] bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-white animate-bounce" />
                </div>
                <p className="text-xl font-bold text-white mb-2">Find Us in Kingswood</p>
                <p className="text-gray-400 mb-4">BS15 8JS, Bristol</p>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                  Interactive Google Maps embed will show exact location
                </p>
              </div>
            </div>

            <div className="absolute top-4 left-4 px-4 py-2 bg-cyan-500/90 backdrop-blur-sm rounded-full">
              <p className="text-white font-semibold text-sm">📍 Kingswood, Bristol</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['Kingswood', 'Hanham', 'Staple Hill', 'Fishponds'].map((area) => (
            <div
              key={area}
              className="p-4 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <p className="text-white font-semibold">{area}</p>
              <p className="text-sm text-gray-400 mt-1">We serve {area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
