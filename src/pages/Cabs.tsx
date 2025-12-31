import { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Calendar, Clock } from 'lucide-react';

export default function Cabs() {
  const [tripType, setTripType] = useState<'city' | 'outstation'>('city');

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="bg-gradient-to-br from-teal-600 to-cyan-600 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Car className="w-10 h-10" />
            Book a Cab
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6"
          >
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setTripType('city')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  tripType === 'city'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                City Rides
              </button>
              <button
                onClick={() => setTripType('outstation')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  tripType === 'outstation'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Outstation
              </button>
            </div>

            {tripType === 'city' ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Drop Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter drop location"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">From City</label>
                  <input
                    type="text"
                    placeholder="Enter city name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">To City</label>
                  <input
                    type="text"
                    placeholder="Enter destination city"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Pickup Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            <button className="w-full mt-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
              Find Cabs
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            {[
              { type: 'Mini', price: '₹8/km', capacity: '4 seater', icon: '🚗' },
              { type: 'Sedan', price: '₹10/km', capacity: '4 seater', icon: '🚙' },
              { type: 'SUV', price: '₹14/km', capacity: '6 seater', icon: '🚐' },
            ].map((cab, index) => (
              <motion.div
                key={cab.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/95 backdrop-blur-lg rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-3">{cab.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cab.type}</h3>
                <p className="text-teal-600 font-semibold text-lg mb-1">{cab.price}</p>
                <p className="text-gray-600 text-sm">{cab.capacity}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Cabs?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Verified Drivers', description: 'All drivers are background verified' },
            { title: 'Clean Vehicles', description: 'Sanitized and well-maintained cars' },
            { title: 'Live Tracking', description: 'Track your ride in real-time' },
          ].map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-6 shadow-md text-center">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
