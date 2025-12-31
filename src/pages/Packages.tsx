import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, MapPin, Calendar, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { mockPackages } from '../data/mockData';

export default function Packages() {
  const navigate = useNavigate();
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="bg-gradient-to-br from-pink-600 to-rose-600 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4 flex items-center gap-3"
          >
            <Package className="w-10 h-10" />
            Travel Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg"
          >
            Curated experiences for unforgettable journeys
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {mockPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-64">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-white/90 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {pkg.destination}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-sm">{pkg.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="text-3xl font-bold text-pink-600">₹{pkg.price.toLocaleString()}</div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() =>
                    setExpandedPackage(expandedPackage === pkg.id ? null : pkg.id)
                  }
                  className="w-full flex items-center justify-between py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors mb-4"
                >
                  <span className="font-semibold text-gray-900">View Itinerary</span>
                  {expandedPackage === pkg.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                {expandedPackage === pkg.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 mb-4"
                  >
                    {pkg.itinerary.map((day) => (
                      <div key={day.day} className="border-l-2 border-pink-500 pl-4 py-2">
                        <h5 className="font-semibold text-gray-900 mb-2">
                          Day {day.day}: {day.title}
                        </h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {day.activities.map((activity, i) => (
                            <li key={i}>• {activity}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}

                <button 
                  onClick={() => navigate('/payment', { 
                    state: { 
                      name: pkg.name,
                      destination: pkg.destination,
                      duration: pkg.duration,
                      price: pkg.price,
                      type: 'Package'
                    } 
                  })}
                  className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Book Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
