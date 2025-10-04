import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/Pressure-washer-hero.webp"
            alt="Professional pressure washing services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-teal-800/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="glass-card">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              TRANSFORM YOUR PROPERTY<br />
              WITH PROFESSIONAL<br />
              PRESSURE WASHING
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Bring back your home or business's curb appeal with our proven cleaning power.
            </p>
            
            {/* Features */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
              <div className="glass-panel flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-white/90">Safe for all surfaces</span>
              </div>
              <div className="glass-panel flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-white/90">Eco-friendly cleaning solutions</span>
              </div>
              <div className="glass-panel flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-white/90">Results you'll see immediately</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="btn-secondary py-4 px-8 text-lg flex items-center gap-3 mx-auto">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Get Your Free Quote Today
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass-card text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              ABOUT 1 WAY PROPERTY SERVICES
            </h2>
            <p className="text-lg text-gray-600">Professional pressure washing services you can trust</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Experience Card */}
            <div className="glass-card">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                For more than 10 years, we've been helping homeowners and businesses restore the beauty of their properties. With the right equipment, expertise, and dedication, we handle every project with care—big or small.
              </p>
            </div>
            
            {/* Process Card */}
            <div className="glass-card">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Process</h3>
              <p className="text-gray-600 leading-relaxed">
                We use professional-grade equipment and eco-friendly cleaning solutions to deliver a spotless, safe finish every time. From driveways and sidewalks to siding and rooftops, our team is committed to results that last.
              </p>
            </div>
            
            {/* Services Card */}
            <div className="glass-card">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• House & roof washing</li>
                <li>• Driveways & walkways</li>
                <li>• Patios, decks, & fences</li>
                <li>• Commercial properties</li>
                <li>• And more!</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary py-3 px-8 text-lg">
              See What We Can Do for You
            </button>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass-card text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A picture says it all.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our before-and-after transformations show just how powerful professional cleaning can be. From stained concrete to weather-worn siding, we bring surfaces back to life.
            </p>
          </div>
          
          {/* Main Before/After Display */}
          <div className="relative mb-12">
            <div className="glass rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-yellow-800 to-yellow-900 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">BEFORE</span>
                </div>
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm font-bold">
                  BEFORE
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-800 text-2xl font-bold">AFTER</span>
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm font-bold">
                  AFTER
                </div>
              </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Service Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Driveway Clean", bg: "bg-gradient-to-br from-gray-400 to-gray-600" },
              { name: "Deck Restoration", bg: "bg-gradient-to-br from-red-400 to-red-600" },
              { name: "Roof Restoration", bg: "bg-gradient-to-br from-gray-500 to-gray-700" },
              { name: "Patios Renewal", bg: "bg-gradient-to-br from-stone-400 to-stone-600" },
              { name: "Fence Refresh", bg: "bg-gradient-to-br from-amber-400 to-amber-600" },
              { name: "Gutter Clean", bg: "bg-gradient-to-br from-yellow-400 to-yellow-600" }
            ].map((service, index) => (
              <div key={index} className="glass aspect-square flex items-center justify-center relative overflow-hidden group cursor-pointer hover:bg-white/30 transition-all">
                <div className={`${service.bg} absolute inset-0 opacity-80 group-hover:opacity-90 transition-all`}></div>
                <span className="text-white font-bold text-center px-4 relative z-10">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass-card text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              TRUSTED BY HOMEOWNERS &<br />
              BUSINESSES ACROSS OUR<br />
              COMMUNITY
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Testimonial 1 */}
            <div className="glass-card">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-center mb-4 italic">
                "They were fast, professional, and my driveway looks brand new. Highly recommend!"
              </p>
              <p className="text-gray-800 text-center font-semibold">- Jennifer R.</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="glass-card">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-center mb-4 italic">
                "I didn't think our patio could ever look clean again. 1 Way Property Services proved me wrong!"
              </p>
              <p className="text-gray-800 text-center font-semibold">- Mark S.</p>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="glass-card mb-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="glass-panel flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-800">Licensed & Insured</span>
              </div>
              <div className="glass-panel flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-800">Veteran-Owned Local Business</span>
              </div>
              <div className="glass-panel flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-800">10+ Years of Experience</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="btn-primary py-4 px-8 text-lg">
              BOOK WITH CONFIDENCE
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass-card text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              OUR PRESSURE WASHING SERVICES
            </h2>
            <p className="text-lg text-gray-600">Professional cleaning solutions for every surface</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* House Washing */}
            <div className="glass-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">House Washing</h3>
              <p className="text-gray-600">
                Gently remove dirt, mildew, and buildup for a like-new shine.
              </p>
            </div>
            
            {/* Roof Cleaning */}
            <div className="glass-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                  <path d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Roof Cleaning</h3>
              <p className="text-gray-600">
                Protect your shingles and extend the life of your roof.
              </p>
            </div>
            
            {/* Driveways & Walkways */}
            <div className="glass-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <rect x="7" y="7" width="3" height="3"></rect>
                  <rect x="14" y="7" width="3" height="3"></rect>
                  <rect x="7" y="14" width="3" height="3"></rect>
                  <rect x="14" y="14" width="3" height="3"></rect>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Driveways & Walkways</h3>
              <p className="text-gray-600">
                Eliminate stains, oil spots, and years of grime.
              </p>
            </div>
            
            {/* Patios, Decks & Fences */}
            <div className="glass-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4"></path>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                  <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"></path>
                  <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Patios, Decks & Fences</h3>
              <p className="text-gray-600">
                Bring back the natural beauty of your outdoor living spaces.
              </p>
            </div>
            
            {/* Commercial Properties */}
            <div className="glass-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21h18"></path>
                  <path d="M5 21V7l8-4v18"></path>
                  <path d="M19 21V11l-6-4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Commercial Properties</h3>
              <p className="text-gray-600">
                Maintain a spotless appearance that impresses clients and customers.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="btn-primary py-4 px-8 text-lg">
              See How We Can Help
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-card text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Get a Free Quote in Minutes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'll respond quickly with a no-obligation estimate. Whether it's your home, your business, or a one-time project, your property is in good hands. We stay in touch from start to finish to make sure you're 100% satisfied.
            </p>
          </div>
          
          <div className="glass-card">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 glass-panel border-0 focus:ring-2 focus:ring-blue-500/50 focus:bg-white/30 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 glass-panel border-0 focus:ring-2 focus:ring-blue-500/50 focus:bg-white/30 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 glass-panel border-0 focus:ring-2 focus:ring-blue-500/50 focus:bg-white/30 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select className="w-full px-4 py-3 glass-panel border-0 focus:ring-2 focus:ring-blue-500/50 focus:bg-white/30 transition-all">
                      <option>Service Needed</option>
                      <option>House Washing</option>
                      <option>Roof Cleaning</option>
                      <option>Driveways & Walkways</option>
                      <option>Patios, Decks & Fences</option>
                      <option>Commercial Properties</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 glass-panel border-0 focus:ring-2 focus:ring-blue-500/50 focus:bg-white/30 transition-all"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary py-4 px-6 text-lg"
                  >
                    Get My Free Quote
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span className="text-lg font-semibold text-gray-800">Call Us Directly:</span>
                  </div>
                  <p className="text-xl text-gray-600 ml-9">(760) 703-9563</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-lg font-semibold text-gray-800">Email:</span>
                  </div>
                  <p className="text-xl text-gray-600 ml-9">1WayLoren@cox.net</p>
                </div>
                
                <div className="glass-panel">
                  <p className="text-gray-600 text-sm">
                    Your information is safe with us. We'll never share it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}