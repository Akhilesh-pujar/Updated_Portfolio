import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import { socialLinks } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Akhilesh S Pujar",
          from_email: form.email,
          to_email: "akhileshpujar796@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}

      <motion.div
        className='flex-1 min-w-[50%] flex flex-col'
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className='head-text'>
          <span className="blue-gradient_text">Get in Touch</span>
        </h1>

        <p className="text-slate-500 mt-4 text-lg">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        {/* Social Links */}
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {socialLinks.filter(link => link.name !== 'Contact').map((link) => (
            <Link
              key={link.name}
              to={link.link}
              target={link.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                border: '1px solid rgba(102, 126, 234, 0.2)',
              }}
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
              />
            </Link>
          ))}
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-6 mt-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <label className='text-slate-700 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 shadow-sm'
              placeholder='Your name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-slate-700 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 shadow-sm'
              placeholder='your@email.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-slate-700 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 shadow-sm resize-none'
              placeholder='Tell me about your project or idea...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <motion.button
            type='submit'
            disabled={loading}
            className='relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed'
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
            }}
            whileHover={{
              scale: loading ? 1 : 1.02,
              boxShadow: '0 6px 30px rgba(102, 126, 234, 0.6)',
            }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </span>
          </motion.button>
        </motion.form>
      </motion.div>

      <motion.div
        className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </motion.div>
    </section>
  );
};

export default Contact;
