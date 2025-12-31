import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Bus, Calendar, MapPin, Star } from 'lucide-react';
import { mockBuses } from '../data/mockData';

export default function Buses() {
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="bg-gradient-to-br from-orange-600 to-red-600 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Bus className="w-10 h-10" />
            Book Bus Tickets
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6"
          >
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">From</label>
                <input
                  type="text"
                  placeholder="City or Bus Stand"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">To</label>
                <input
                  type="text"
                  placeholder="City or Bus Stand"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Journey Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search Buses
            </button>
          </motion.div>
        </div>
      </div>

      {showResults && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="space-y-6">
            {mockBuses.map((bus, index) => (
              <motion.div
                key={bus.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">🚌</div>
                        <div>
                          <div className="font-bold text-xl text-gray-900">{bus.operator}</div>
                          <div className="text-sm text-gray-500">{bus.type}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-orange-100 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                        <span className="font-semibold text-sm">{bus.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 mb-4">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{bus.departure}</div>
                        <div className="text-sm text-gray-600 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {bus.from}
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="text-sm text-gray-500">{bus.duration}</div>
                        <div className="w-24 h-px bg-gray-300 my-1" />
                      </div>

                      <div>
                        <div className="text-2xl font-bold text-gray-900">{bus.arrival}</div>
                        <div className="text-sm text-gray-600 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {bus.to}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      {bus.seatsAvailable} seats available
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="text-3xl font-bold text-orange-600">₹{bus.price}</div>
                    <button 
                      onClick={() => navigate('/payment', { 
                        state: { 
                          name: `${bus.operator} - ${bus.type}`,
                          from: bus.from,
                          to: bus.to,
                          departure: bus.departure,
                          duration: bus.duration,
                          price: bus.price,
                          type: 'Bus'
                        } 
                      })}
                      className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
