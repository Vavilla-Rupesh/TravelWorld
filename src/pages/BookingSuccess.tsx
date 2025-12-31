import { useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Mail, Home, Calendar } from 'lucide-react';

export default function BookingSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingDetails = location.state || {};

  // Generate a random booking ID
  const bookingId = `TW${Date.now().toString().slice(-8)}`;

  useEffect(() => {
    // If no booking details, redirect to home
    if (!bookingDetails.price) {
      setTimeout(() => navigate('/'), 2000);
    }
  }, [bookingDetails, navigate]);

  const handleDownloadTicket = () => {
    alert('Ticket download feature would be implemented here!');
  };

  const handleEmailTicket = () => {
    alert('Ticket email feature would be implemented here!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-30"
            />
            <CheckCircle className="w-24 h-24 text-green-600 relative" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Booking Confirmed! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Your payment was successful and booking is confirmed
          </p>
          <p className="text-lg text-gray-500">Booking ID: <span className="font-mono font-bold text-blue-600">{bookingId}</span></p>
        </motion.div>

        {/* Booking Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-xl mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            Booking Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {bookingDetails.name && (
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="text-sm text-gray-600 mb-1">Service</div>
                <div className="font-semibold text-gray-900 text-lg">{bookingDetails.name}</div>
              </div>
            )}

            {bookingDetails.from && bookingDetails.to && (
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="text-sm text-gray-600 mb-1">Route</div>
                <div className="font-semibold text-gray-900 text-lg">
                  {bookingDetails.from} → {bookingDetails.to}
                </div>
              </div>
            )}

            {bookingDetails.location && (
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="text-sm text-gray-600 mb-1">Location</div>
                <div className="font-semibold text-gray-900 text-lg">{bookingDetails.location}</div>
              </div>
            )}

            {bookingDetails.destination && (
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="text-sm text-gray-600 mb-1">Destination</div>
                <div className="font-semibold text-gray-900 text-lg">{bookingDetails.destination}</div>
              </div>
            )}

            {bookingDetails.duration && (
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="text-sm text-gray-600 mb-1">Duration</div>
                <div className="font-semibold text-gray-900 text-lg">{bookingDetails.duration}</div>
              </div>
            )}

            {bookingDetails.departure && (
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="text-sm text-gray-600 mb-1">Departure Time</div>
                <div className="font-semibold text-gray-900 text-lg">{bookingDetails.departure}</div>
              </div>
            )}

            <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
              <div className="text-sm text-gray-600 mb-1">Total Amount Paid</div>
              <div className="font-bold text-blue-600 text-2xl">
                ₹{Math.round((bookingDetails.price || 0) * 1.18).toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 mt-1">(Including taxes & fees)</div>
            </div>

            <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200">
              <div className="text-sm text-gray-600 mb-1">Payment Status</div>
              <div className="font-bold text-green-600 text-xl">✓ Confirmed</div>
              <div className="text-xs text-gray-500 mt-1">Transaction completed successfully</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> A confirmation email has been sent to your registered email address with all booking details and e-ticket.
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-4 mb-6"
        >
          <button
            onClick={handleDownloadTicket}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
          >
            <Download className="w-5 h-5" />
            Download Ticket
          </button>

          <button
            onClick={handleEmailTicket}
            className="flex items-center justify-center gap-2 bg-white text-gray-900 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:border-blue-400 hover:shadow-lg transition-all"
          >
            <Mail className="w-5 h-5" />
            Email Ticket
          </button>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">What's Next?</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">1.</span>
              <span>Check your email for the confirmation and e-ticket</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">2.</span>
              <span>Keep your booking ID handy for any queries</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">3.</span>
              <span>Arrive at the departure point 30 minutes before scheduled time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">4.</span>
              <span>Carry a valid ID proof for verification</span>
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Need help? Contact our 24/7 support at{' '}
              <span className="font-semibold text-blue-600">support@travelworld.com</span> or call{' '}
              <span className="font-semibold text-blue-600">1800-123-4567</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
