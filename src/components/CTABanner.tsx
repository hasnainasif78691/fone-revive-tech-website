import { Phone, MessageCircle, Navigation } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          Need a Phone Repair in Kingswood Today?
        </h2>

        <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
          Visit Fone Revive for fast, affordable phone repairs in Bristol. Same-day service available.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:01179123456"
            className="group px-8 py-5 bg-white rounded-xl font-bold text-cyan-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <div className="text-left">
              <div className="text-xs text-gray-500 uppercase">Call Now</div>
              <div className="text-lg">0117 912 3456</div>
            </div>
          </a>

          <button className="group px-8 py-5 bg-green-500 hover:bg-green-600 rounded-xl font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center">
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-xs text-green-100 uppercase">Chat on</div>
              <div className="text-lg">WhatsApp</div>
            </div>
          </button>

          <button className="group px-8 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 rounded-xl font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center">
            <Navigation className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            <div className="text-left">
              <div className="text-xs text-white/70 uppercase">Navigate to</div>
              <div className="text-lg">Get Directions</div>
            </div>
          </button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">Open Now</span>
          </div>
          <div className="flex items-center gap-2">
            <span>⚡</span>
            <span className="font-semibold">Same-Day Service</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span className="font-semibold">Walk-Ins Welcome</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span className="font-semibold">BS15 8JS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
