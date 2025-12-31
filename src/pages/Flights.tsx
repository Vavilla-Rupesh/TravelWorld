import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Plane, Calendar, Users, ArrowRight, Filter } from 'lucide-react';
import { mockFlights } from '../data/mockData';

export default function Flights() {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState<'one-way' | 'round-trip' | 'multi-city'>('one-way');
  const [showResults, setShowResults] = useState(false);
  const [filters, setFilters] = useState({ maxPrice: 10000, stops: 'any' });

  const handleSearch = () => {
    setShowResults(true);
  };

  const filteredFlights = mockFlights.filter(
    (flight) => flight.price <= filters.maxPrice &&
      (filters.stops === 'any' || (filters.stops === 'non-stop' && flight.stops === 0))
  );

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Plane className="w-10 h-10" />
            Book Flights
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6"
          >
            <div className="flex gap-4 mb-6">
              {['one-way', 'round-trip', 'multi-city'].map((type) => (
                <button
                  key={type}
                  onClick={() => setTripType(type as typeof tripType)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    tripType === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">From</label>
                <input
                  type="text"
                  placeholder="Delhi (DEL)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">To</label>
                <input
                  type="text"
                  placeholder="Mumbai (BOM)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Departure
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Passengers
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4+ Passengers</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search Flights
            </button>
          </motion.div>
        </div>
      </div>

      {showResults && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-64 space-y-6"
            >
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Max Price: ₹{filters.maxPrice}
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="10000"
                      step="500"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: parseInt(e.target.value) })}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Stops</label>
                    <select
                      value={filters.stops}
                      onChange={(e) => setFilters({ ...filters, stops: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300"
                    >
                      <option value="any">Any</option>
                      <option value="non-stop">Non-stop</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.aside>

            <div className="flex-1 space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-600"
              >
                Showing {filteredFlights.length} flights
              </motion.div>

              {filteredFlights.map((flight, index) => (
                <motion.div
                  key={flight.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{flight.logo}</div>
                      <div>
                        <div className="font-semibold text-gray-900">{flight.airline}</div>
                        <div className="text-sm text-gray-500">{flight.class}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{flight.departure}</div>
                        <div className="text-sm text-gray-600">{flight.from}</div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="text-sm text-gray-500">{flight.duration}</div>
                        <div className="flex items-center gap-2 my-1">
                          <div className="w-16 h-px bg-gray-300" />
                          <Plane className="w-4 h-4 text-gray-400" />
                          <div className="w-16 h-px bg-gray-300" />
                        </div>
                        <div className="text-xs text-gray-500">
                          {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop(s)`}
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{flight.arrival}</div>
                        <div className="text-sm text-gray-600">{flight.to}</div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="text-3xl font-bold text-blue-600">₹{flight.price}</div>
                      <div className="text-sm text-gray-500">{flight.seatsLeft} seats left</div>
                      <button 
                        onClick={() => navigate('/payment', { 
                          state: { 
                            name: flight.airline,
                            from: flight.from,
                            to: flight.to,
                            departure: flight.departure,
                            duration: flight.duration,
                            price: flight.price,
                            type: 'Flight'
                          } 
                        })}
                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
