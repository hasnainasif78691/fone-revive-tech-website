import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Kingswood, Bristol',
    rating: 5,
    text: 'Excellent service! My iPhone screen was replaced within 2 hours. The team at Fone Revive in Kingswood were professional and friendly. Highly recommend for phone repairs in Bristol.',
    date: '2 weeks ago',
  },
  {
    name: 'Michael Brown',
    location: 'BS15, Bristol',
    rating: 5,
    text: 'Best phone repair shop in Kingswood! Fixed my Samsung charging port same day. Great pricing and quality work. Will definitely return for any future repairs.',
    date: '1 month ago',
  },
  {
    name: 'Emma Davies',
    location: 'Hanham, Bristol',
    rating: 5,
    text: 'Amazing experience! Water damaged my phone and thought it was gone. The technicians at Fone Revive recovered everything. So grateful for their expertise and quick turnaround.',
    date: '3 weeks ago',
  },
  {
    name: 'James Wilson',
    location: 'Kingswood',
    rating: 5,
    text: 'Fast, reliable, and affordable phone repair in BS15. Had my battery replaced and phone feels brand new. The warranty gave me peace of mind. Excellent local business!',
    date: '1 week ago',
  },
  {
    name: 'Lucy Thompson',
    location: 'Staple Hill, Bristol',
    rating: 5,
    text: 'Fantastic service from start to finish. Walked in with a cracked screen, walked out with a perfect phone. The staff explained everything clearly. Best repair shop in Bristol!',
    date: '2 months ago',
  },
  {
    name: 'David Martinez',
    location: 'Fishponds, Bristol',
    rating: 5,
    text: 'Highly professional team at Fone Revive. They diagnosed my phone issue quickly and fixed it the same day. Competitive prices and quality work. My go-to for phone repairs in Kingswood.',
    date: '3 weeks ago',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-yellow-500/10 border border-yellow-500/20 rounded-full backdrop-blur-sm">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-yellow-400 text-sm font-medium ml-2">5.0 Average Rating</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Highly Rated Phone Repair Shop
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              in Kingswood
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - see what our customers say about our phone repair services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="w-12 h-12 text-cyan-400" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-cyan-400">{testimonial.location}</p>
                  </div>
                  <p className="text-xs text-gray-500">{testimonial.date}</p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Over 1,000 satisfied customers in Kingswood and Bristol</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300">
              Read More Reviews
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              Leave a Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
