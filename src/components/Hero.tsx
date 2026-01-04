import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-cyan-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-sm font-medium">Same-Day Repairs Available</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Fast & Reliable Phone Repairs
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              in Kingswood, Bristol
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto font-medium">
            Professional iPhone, Samsung & Android Phone Repairs in Kingswood (BS15 8JS). Same-Day Service Available.
          </p>

          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Fone Revive is your trusted local phone repair shop in Kingswood, Bristol, specialising in fast, affordable, and high-quality mobile phone repairs. Whether you need a cracked screen fixed, battery replacement, or charging port repair, our experienced technicians are here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center">
              <Phone className="w-5 h-5" />
              Book a Phone Repair
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
              <MessageCircle className="w-5 h-5" />
              Get a Free Quote
            </button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
            <div className="group cursor-default">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">5★</div>
              <div className="text-sm text-gray-400">Customer Rated</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">1000+</div>
              <div className="text-sm text-gray-400">Repairs Completed</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Same Day</div>
              <div className="text-sm text-gray-400">Service Available</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Local</div>
              <div className="text-sm text-gray-400">Kingswood Business</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>
    </section>
  );
}
