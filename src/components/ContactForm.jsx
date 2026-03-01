import { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    // Get the form data
    const formData = new FormData(e.target);
    
    // Add your access key (ONLY ONCE)
    formData.append('access_key', '5fe44bb0-daee-4875-9d24-8fa07821b87f');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);
        e.target.reset();
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  // Show success message
  if (isSent) {
    return (
      <div className="min-h-screen bg-gray-900 py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-green-600/20 border border-green-500 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Thank You! 🎉</h2>
            <p className="text-gray-300 text-lg mb-8">
              Your message has been sent successfully.
            </p>
            <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Show the form
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          Contact <span className="text-blue-400">Me</span>
        </h1>

        {/* IMPORTANT: NO hidden access_key input here */}
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl p-8 space-y-6">
          
          {/* Name field */}
          <div>
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
              placeholder="John Doe"
            />
          </div>

          {/* Email field */}
          <div>
            <label className="block text-gray-300 mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
              placeholder="you@example.com"
            />
          </div>

          {/* Message field */}
          <div>
            <label className="block text-gray-300 mb-2">Job Description</label>
            <textarea
              name="message"
              required
              rows="6"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
              placeholder="Please paste the job description here..."
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {/* Error message */}
          {error && (
            <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg">
              <p className="text-red-300 text-sm text-center">{error}</p>
            </div>
          )}
        </form>

        {/* Direct email link */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Or email me directly:{' '}
            <a href="mailto:robertshepherd984@gmail.com" className="text-blue-400">
              robertshepherd984@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;