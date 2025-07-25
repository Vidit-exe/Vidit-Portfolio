
import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const scriptURL = "https://script.google.com/macros/s/AKfycby_UoibnaOOPgqmF_8Uz4D8QLvk_BuIMKq5koXsnWFZNTnXf7QMYGBBfkuGeTII_r6Q/exec"

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [status, setStatus] = useState<"success" | "error" | null>(null)


  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here

    try {
      const form = formRef.current
      if (!form) return

      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
        setTimeout(() => setStatus(null), 3000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus(null), 3000)
      }
    } catch (error) {
      console.error("Submission Error:", error)
      setStatus("error")
      setTimeout(() => setStatus(null), 3000)
    }
    // Reset form
    setFormData({ Name: '', Email: '', Subject: '', Message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "collab@viditjoshi.in",
      href: "mailto:collab@viditjoshi.in"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 81604 71647",
      href: "tel:+918160471647"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ahmedabad, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Let's discuss your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  I'm always interested in hearing about new opportunities and projects. 
                  Whether you have a question or just want to say hi, I'll do my best to get back to you!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-600 dark:text-gray-400">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200/20 dark:border-gray-700/20 shadow-lg">
              <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="Name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="Name"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="Email"
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="Subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="Subject"
                    name="Subject"
                    value={formData.Subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="Message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="Message"
                    name="Message"
                    value={formData.Message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
              {status === "success" && (
              <p className="mt-6 text-green-600">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-6 text-red-600">
                ❌ Failed to send. Please try again.
              </p>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
