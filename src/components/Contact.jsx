import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/adryjkka", data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div data-aos="fade-right" name="Contact" className="max-w-screen-2xl mx-auto px-6 md:px-20 py-20">
      {/* Heading */}
      <div className="text-left mb-8">
        <h1 className="font-bold text-3xl hover:cursor-pointer mb-6 border-b-2 border-red-700 inline-block">Contact Me</h1>
        <p className="text-gray-500 mt-2 max-w-xl">
          Let’s connect! I’m always open to discussing new projects, ideas, or opportunities.
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-12">

        {/* LEFT SIDE - TEXT */}
        <div data-aos="fade-right"  className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Let’s build something amazing together 
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            If you have any questions, project ideas, or just want to say hello,
            feel free to reach out. I usually respond within 24 hours.
          </p>

          <div className="space-y-2 text-gray-600">
            <p>📧 Email: azharm3014@gmail.com</p>
            <p>📱 WhatsApp: +92 3051196565</p>
            <p>📍 Location: Islamabad Pakistan</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div data-aos="fade-left" className="md:w-1/2 bg-white shadow-xl rounded-2xl p-8">

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <h1 className="font-semibold text-gray-700 mb-4 text-xl">Send Your Message</h1>

            {/* Name */}
            <div>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm">Required</p>}
            </div>

            {/* WhatsApp */}
            <div>
  <input
    {...register("whatsapp", {
      required: "Required",
      pattern: {
        value: /^\+?[0-9]{10,15}$/,
        message: "Invalid number",
      },
    })}
    type="tel"
    placeholder="WhatsApp Number"
    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
  />

  {errors.whatsapp && (
    <p className="text-red-500 text-sm mt-1">
      {errors.whatsapp.message}
    </p>
  )}
</div>


            {/* Email */}
            <div>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">Required</p>}
            </div>

            {/* Message */}
            <div>
              <textarea
                {...register("message", { required: true })}
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
              />
              {errors.message && <p className="text-red-500 text-sm">Required</p>}
            </div>

            {/* Button */}
            <button
              type="submit"
               className="w-full py-3 rounded-xl text-white font-semibold 
                       bg-gradient-to-r from-black to-gray-700 
                       hover:from-gray-800 hover:to-black 
                       transition duration-300 shadow-md hover:shadow-lg"            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
