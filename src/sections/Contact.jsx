import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    message: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (e) => {
    let { name, value } = e.target;
    let error = "";
    if (name === "fullName") {
      if (value.trim() === "") {
        error = "Full name is required";
      } else if (value.trim().length < 3) {
        error = "Full name must be at least 3 characters";
      }
    }

    if (name === "email") {
      if (value.trim() === "") {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email format";
      }
    }
    if (name === "message") {
      if (value.trim() === "") error = "Message is required";
      else if (value.trim().length < 10)
        error = "Message must be at least 10 characters";
    }

    return error;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(e) }));
    }
  };

  const handleBlur = (e) => {
    let { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(e) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      let error = validateField({
        target: { name: key, value: formData[key] },
      });
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched({ fullName: true, email: true, message: true });
    if (Object.values(newErrors).every((err) => err === "")) {
      setIsLoading(true);
      try {
        await emailjs.send(
          "service_3tfvx5g",
          "template_9pkrveg",
          formData,
          "USYbIy1Ege3f42tfg",
        );
        setIsSubmitted(true);
        setIsSuccess(true);
      } catch (error) {
        setIsSubmitted(true);
        setIsSuccess(false);
        console.error("Error sending email:", error.text);
      } finally {
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    if (isSubmitted) {
      if (isSuccess) {
        setFormData({ fullName: "", email: "", message: "" });
      }
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted, isSuccess]);
  return (
    <section
      id="contact"
      className=" mt-60 pb-12 flex flex-col items-center relative min-h-screen px-6 md:px-20  z-40 scroll-mt-32"
    >
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-20">
        <h2 className="text-xl font-semibold mb-6 title-text">Get in Touch</h2>

        <h3 className="text-3xl md:text-4xl font-semibold leading-snug max-w-md">
          Let’s <span className="title-text">work</span> together
        </h3>
      </div>

      <div className=" flex max-w-4xl w-full flex-col md:flex-row items-center md:items-start justify-center gap-15">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-3 flex-1 w-full max-w-lg"
        >
          <p className="text-white/70 text-center md:text-left  leading-relaxed">
            Have a project, a question, or just want to connect? Feel free to
            reach out.
          </p>

          <p className="text-white/70  leading-relaxed text-center md:text-left">
            I’m open to new opportunities and ideas.
          </p>

          <div className="mt-6 flex flex-col w-full gap-4 p-5 rounded-xl bg-cyan-800/30 backdrop-blur-sm border border-cyan-700/30">
            <h2 className="text-bold text-lg text-white">
              Contact Information
            </h2>
            <div className="contact-details p-3 flex flex-col gap-8 w-full">
              <div className="flex gap-6 items-center">
                <span className="p-3 bg-cyan-700/20 rounded-xl">
                  <Mail className="contact-icon text-cyan-300 w-5 h-5 " />
                </span>
                <div className="space-y-1">
                  <p className="contact-label text-white/70 text-xs">Email</p>
                  <p className="contact-info text-md text-white">
                    ratnapriya.t@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <span className="p-3 bg-cyan-700/20 rounded-xl">
                  <Phone className="contact-icon text-cyan-300 w-5 h-5 " />
                </span>
                <div className="space-y-1">
                  <p className="contact-label text-white/70 text-xs">Phone</p>
                  <p className="contact-info text-md text-white">
                    +91 9505931088
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <span className="p-3 bg-cyan-700/20 rounded-xl">
                  <MapPin className="contact-icon text-cyan-300 w-5 h-5 " />
                </span>
                <div className="space-y-1">
                  <p className="contact-label text-white/70 text-xs">
                    Location
                  </p>
                  <p className="contact-info text-md text-white">
                    Hyderabad, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="right-section flex-1 w-full  max-w-lg  h-full z-40"
        >
          <form
            action=""
            className="space-y-5 w-full border border-white/10 p-6 rounded-xl backdrop-blur-sm"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label htmlFor="full-name" className="text-sm mb-6">
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                id="full-name"
                className="border-b border-b-white p-2 outline-none focus:border-[#3b6f8e] transition-all duration-300"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fullName && (
                <span className="text-red-400 text-sm mt-2">
                  {errors.fullName}
                </span>
              )}
            </div>
            <div className="flex flex-col ">
              <label htmlFor="email" className="text-sm mb-6">
                Email <span>*</span>
              </label>
              <input
                type="email"
                id="email"
                className="border-b border-b-white p-2 outline-none focus:border-[#3b6f8e] transition-all duration-300"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && (
                <span className="text-red-400 text-sm mt-2">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm mb-6">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="border-b border-b-white  relative resize-none z-200  outline-none focus:border-[#3b6f8e] transition-all duration-300"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {errors.message && (
                <span className="text-red-400 text-sm mt-2">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm text-white
  bg-cyan-700/80 border border-cyan-500/40
  shadow-[0_0_15px_rgba(34,211,238,0.25)]
  transition-all duration-300
  hover:bg-cyan-600 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
  hover:-translate-y-0.5 active:scale-95
  ${isLoading ? "cursor-not-allowed opacity-80" : ""}`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>SENDING...</span>
                </>
              ) : (
                <>
                  SEND MESSAGE
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`fixed right-10 top-20 p-5 backdrop-blur-md border border-white z-50 text-sm text-white shadow-[0_0_20px_rgba(56,189,248,0.2)]`}
          >
            {isSuccess ? (
              <>
                Message sent successfully! <br />
                Thank you for reaching out.
              </>
            ) : (
              "Failed to send message. Please try again."
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
