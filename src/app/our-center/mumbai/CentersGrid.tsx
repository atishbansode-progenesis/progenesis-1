import React from 'react';
import { MapPin, ArrowRight, Phone, Clock } from 'lucide-react';

export default function CentersGrid({ onBookAppointment }: { onBookAppointment: () => void }) {
  const centers = [
    {
      name: 'Borivali',
      image: '/images/centers/borivali.jpg',
      url: 'https://progenesisivf.com/our-center/best-ivf-center-in-borivali/',
      address: 'Borivali, Mumbai'
    },
    {
      name: 'Andheri',
      image: '/images/centers/andheri.jpg',
      url: 'https://progenesisivf.com/our-center/best-ivf-center-in-andheri/',
      address: 'Andheri, Mumbai'
    },
    {
      name: 'Ghatkopar',
      image: '/images/centers/ghatkopar.jpg',
      url: 'https://progenesisivf.com/our-center/best-ivf-center-in-ghatkopar/',
      address: 'Ghatkopar, Mumbai'
    },
    {
      name: 'Thane',
      image: '/images/centers/thane.jpg',
      url: 'https://progenesisivf.com/our-center/best-ivf-center-in-thane/',
      address: 'Thane, Mumbai'
    },
    {
      name: 'Vashi',
      image: '/images/centers/vashi.jpg',
      url: 'https://progenesisivf.com/our-center/best-ivf-center-in-vashi/',
      address: 'Vashi, Navi Mumbai'
    },
    {
      name: 'Panvel',
      image: '/images/centers/panvel.jpg',
      url: 'https://progenesisivf.com/our-center/best-ivf-center-in-panvel/',
      address: 'Panvel, Navi Mumbai'
    },
    {
      name: 'Kalyan',
      image: '/images/centers/kalyan.jpg',
      url: 'https://progenesisivf.com/our-center/best-ivf-center-in-kalyan/',
      address: 'Kalyan, Mumbai'
    },
    {
      name: 'Virar',
      image: '/images/centers/virar.jpg',
      url: 'https://progenesisivf.com/our-center/best-ivf-center-in-virar/',
      address: 'Virar, Mumbai'
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 leading-tight text-left">
            Choose Your Nearest Center in Mumbai
          </h2>
          <p className="text-gray-600 text-left">
            Visit any of our 8 state-of-the-art fertility centers across Mumbai.
            Each center offers world-class facilities and expert care.
          </p>
        </div>

        {/* Centers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {centers.map((center, index) => (
            <a
              key={index}
              href={center.url}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={center.image}
                  alt={`Progenesis IVF ${center.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/images/centers/default-center.jpg';
                  }}
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm space-x-2">
                      <Clock size={16} />
                      <span>9:30 AM - 7:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {center.name}
                </h3>

                <div className="flex items-start space-x-2 text-gray-600 mb-4">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0 text-blue-600" />
                  <span className="text-sm">{center.address}</span>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                    View Details
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-blue-600 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Not sure which center to visit? We can help you choose!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+91 9423971620"
              className="flex items-center space-x-2 bg-white px-8 py-4 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Phone size={20} />
              <span>Call Us Now</span>
            </a>
            <button
              onClick={onBookAppointment}
              className="text-white px-8 py-4 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#1656A5' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d4078'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1656A5'}
            >
              Book Appointment
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}