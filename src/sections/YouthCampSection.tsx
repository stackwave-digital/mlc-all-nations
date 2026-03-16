export function YouthCampSection() {
  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80" 
          alt="Youth Camp Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Wild Ones Logo/Text */}
          <div className="mb-8">
            <h2 className="gradient-text text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter">
              WILD ONES
            </h2>
            <p className="text-white/80 text-xl md:text-2xl font-bold uppercase tracking-widest mt-2">
              YTHCAMP 2026
            </p>
          </div>

          {/* Camp Details */}
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto border border-white/10">
            <p className="text-white text-lg mb-6">
              An unforgettable week of worship, fun, and growth for students grades 6-12.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <p className="text-teal-light text-sm uppercase tracking-wider">Date</p>
                <p className="text-white font-bold">Summer 2026</p>
              </div>
              <div className="text-center">
                <p className="text-teal-light text-sm uppercase tracking-wider">Location</p>
                <p className="text-white font-bold">TBA</p>
              </div>
            </div>

            <a 
              href="/MercyLife-youth"
              className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
