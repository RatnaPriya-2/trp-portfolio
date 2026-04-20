import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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
      className="relative flex flex-col items-center gap-20 py-15 px-8 z-20  scroll-mt-20 min-h-screen"
    >
      {/* bg-linear-to-b from-black via-[#07131c] to-[#16374e] */}
      {/* Background */}
      {/* <img
        src={ocean}
        className="absolute inset-0 w-full h-full object-cover object-center"
      /> */}
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/80 to-black/90"></div> */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-[#07131c]/90 via-black/85 to-[#07131c]/90 backdrop-blur-lg"></div> */}
      <h2 className="z-50 text-[40px] tracking-widest font-display">CONTACT</h2>
      <div className="flex gap-25 text-sm max-w-4xl w-full flex-col md:flex-row ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="left-section space-y-4 flex-1 max-w-md z-40"
        >
          <p>Let's work together!</p>
          <p>
            Feel free to reach out if you have a project in mind, a question, or
            just want to say hi.
          </p>
          <p>I’m always open to discussing new opportunities and ideas.</p>
          <p>
            <span>Email: ratnapriya.t@gmail.com</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="right-section flex-1 min-w-75 max-w-lg "
        >
          <form
            action=""
            className="space-y-4 w-full border border-white p-6 backdrop-blur-sm"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label htmlFor="full-name" className="text-sm mb-6">
                Full Name <span className="">*</span>
              </label>
              <input
                type="text"
                id="full-name"
                className="border-b border-b-white p-2 outline-none focus:border-[#3b6f8e] transition-all duration-300"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
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
              className={`w-full flex items-center justify-center gap-2 ${isLoading ? "bg-[#1f4e6b] text-white cursor-not-allowed" : "bg-white text-black hover:bg-[#1f4e6b] hover:text-white"}  py-3 px-4 transition-all duration-200 active:scale-98 shadow-lg shadow-header/25 focus-visible:ring-2 focus-visible:ring-header/50 font-medium ${isLoading ? " cursor-not-allowed" : ""} active:scale-98 `}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <div className=" text-white">SENDING...</div>
                </>
              ) : (
                "SEND MESSAGE"
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
