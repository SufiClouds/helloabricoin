const ContactUs = () => {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
  
        {/* Main Container for two sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Div - Contact Information */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-2">
              <strong>Email:</strong> contact@example.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p className="mb-2">
              <strong>Location:</strong> 1234, Street Name, City, Country
            </p>
          </div>
  
          {/* Right Div - Form Inputs */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
            <form>
              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
  
              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
  
              {/* Message Textarea */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  