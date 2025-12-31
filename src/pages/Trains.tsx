import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Train, Calendar, Users, Clock } from 'lucide-react';
import { mockTrains } from '../data/mockData';

export default function Trains() {
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="bg-gradient-to-br from-green-600 to-teal-600 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Train className="w-10 h-10" />
            Book Train Tickets
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">From</label>
                <input
                  type="text"
                  placeholder="Station Name or Code"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">To</label>
                <input
                  type="text"
                  placeholder="Station Name or Code"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Journey Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Quota</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>General</option>
                  <option>Ladies</option>
                  <option>Senior Citizen</option>
                  <option>Tatkal</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search Trains
            </button>
          </motion.div>
        </div>
      </div>

      {showResults && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="space-y-6">
            {mockTrains.map((train, index) => (
              <motion.div
                key={train.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl">🚂</div>
                      <div>
                        <div className="font-bold text-xl text-gray-900">{train.name}</div>
                        <div className="text-sm text-gray-500">#{train.number}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{train.departure}</div>
                        <div className="text-sm text-gray-600">{train.from}</div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="text-sm text-gray-500">{train.duration}</div>
                        <div className="flex items-center gap-2 my-1">
                          <div className="w-20 h-px bg-gray-300" />
                          <Clock className="w-4 h-4 text-gray-400" />
                          <div className="w-20 h-px bg-gray-300" />
                        </div>
                      </div>

                      <div>
                        <div className="text-2xl font-bold text-gray-900">{train.arrival}</div>
                        <div className="text-sm text-gray-600">{train.to}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {train.days.map((day) => (
                        <span
                          key={day}
                          className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium"
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {train.classes.map((cls) => (
                      <div
                        key={cls.type}
                        className="flex items-center justify-between gap-8 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-gray-900">{cls.type}</div>
                          <div className="text-xs text-gray-500">
                            {cls.available > 0 ? `${cls.available} available` : 'RAC/WL'}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-green-600">₹{cls.price}</div>
                          <button
                            onClick={() => navigate('/payment', { 
                              state: { 
                                name: `${train.name} (${train.number})`,
                                from: train.from,
                                to: train.to,
                                departure: train.departure,
                                duration: train.duration,
                                price: cls.price,
                                class: cls.type,
                                type: 'Train'
                              } 
                            })}
                            className={`mt-2 px-4 py-1 rounded-lg font-medium text-sm transition-all ${
                              cls.available > 0
                                ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:shadow-lg'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={cls.available === 0}
                          >
                            {cls.available > 0 ? 'Book' : 'Waitlist'}
                          </button>
                        </div>
                      </div>
                    ))}
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
