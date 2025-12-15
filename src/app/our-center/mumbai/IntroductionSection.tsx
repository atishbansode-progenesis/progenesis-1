import React from 'react';
import { MapPin, Phone, Clock, Users } from 'lucide-react';

export default function IntroductionSection({ onBookAppointment }: { onBookAppointment: () => void }) {
  const centers = [
    { name: 'Virar', url: 'https://maps.app.goo.gl/jjJ4VsqyucMXAdyE6' },
    { name: 'Borivali', url: 'https://maps.app.goo.gl/YcbodoFEAgKJHuRT9' },
    { name: 'Kalyan', url: 'https://maps.app.goo.gl/dzi2X4KZaHQaK5JZ8' },
    { name: 'Thane', url: 'https://maps.app.goo.gl/EMAvrfHNCHC2U1LZ8' },
    { name: 'Andheri', url: 'https://maps.app.goo.gl/PQRRFJMUFMqRfHud7' },
    { name: 'Ghatkopar', url: 'https://maps.app.goo.gl/dvGz17dedJQoCRPZ7' },
    { name: 'Vashi', url: 'https://maps.app.goo.gl/iV88rxwodoL4NVXb8' },
    { name: 'Panvel', url: 'https://maps.app.goo.gl/zTeErrHg79gAWayt6' }
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 leading-tight">
            Schedule Your Visit at Our Nearest Mumbai Clinic Today!
          </h2>
            
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Welcome to Progenesis, where over a decade of fertility expertise meets 
              compassionate care. With 21+ centers across Maharashtra, we're dedicated 
              to helping you bring your dreams of parenthood to life.
            </p>

            {/* Stats/Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">8 Centers</h3>
                  <p className="text-sm text-gray-600">Across Mumbai</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Expert Team</h3>
                  <p className="text-sm text-gray-600">Experienced Doctors</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">10+ Years</h3>
                  <p className="text-sm text-gray-600">Of Excellence</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">24/7 Support</h3>
                  <p className="text-sm text-gray-600">Always Available</p>
                </div>
              </div>
            </div>

            <button
              onClick={onBookAppointment}
              className="text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#1656A5' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d4078'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1656A5'}
            >
              Talk to our Experts
            </button>
          </div>

          {/* Right Side - Custom Map with Center Markers */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Our Mumbai Centers
              </h3>
              
              {/* Custom Map Image with Clickable Markers */}
              <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ height: '400px' }}>
                {/* Background Map Image */}
                <img 
                  src="/images/mumbai-map.png" 
                  alt="Mumbai Map" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with center markers */}
                <div className="absolute inset-0">
                  <div className="relative w-full h-full">
                    {centers.map((center, index) => (
                      <a
                        key={index}
                        href={center.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bg-white px-3 py-1.5 rounded-full shadow-lg border-2 border-blue-500 hover:border-blue-700 hover:bg-blue-50 transition-all cursor-pointer hover:scale-110 z-10"
                        style={getPositionStyle(center.name)}
                      >
                        <div className="flex items-center space-x-1.5">
                          <MapPin size={14} className="text-blue-600" />
                          <span className="font-semibold text-xs text-gray-700">{center.name}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-center text-sm text-gray-600 mt-3">
                Click on any location to view center details on Google Maps
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper function to position markers on the map
function getPositionStyle(centerName: string): React.CSSProperties {
  const positions: { [key: string]: React.CSSProperties } = {
    'Virar': { top: '3%', left: '30%' },
    'Borivali': { top: '25%', left: '27%' },
    'Kalyan': { top: '12%', right: '8%' },
    'Thane': { top: '35%', right: '35%' },
    'Andheri': { top: '50%', left: '22%' },
    'Ghatkopar': { top: '60%', left: '35%' },
    'Vashi': { bottom: '25%', right: '32%' },
    'Panvel': { bottom: '15%', right: '24%' }
  };
  
  return positions[centerName] || { top: '50%', left: '50%' };
}