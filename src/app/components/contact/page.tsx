import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Contact Us</h2>
        <p className="text-center text-gray-700 mb-8">
          If you have any questions or feedback, please fill out the form below and we’ll get back to you soon.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold mb-1" htmlFor="name">Name</label>
            <input 
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-600 font-semibold mb-1" htmlFor="email">Email</label>
            <input 
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold mb-1" htmlFor="message">Message</label>
            <textarea 
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Message"
              rows={4}
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-cyan-800 text-white font-semibold py-2 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
