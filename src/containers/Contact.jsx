import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import  Alert  from "./Alert";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [data, setData] = useState({
    user_name: "",
    user_lastname: "",
    user_email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    isAlert : false,
    message : "",
    status : null,
  })

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    console.log('Valor de user_email:', data.user_email);
  };



  const clearAlert = () => {
    setTimeout(() => {
      setAlert({
        isAlert: false,
        message: "",
        status: null,
      });
    }, 4000);
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = async () => {
    if (!emailIsValid(data.user_email)) {
      setAlert({
        isAlert: true,
        message: "Por favor, ingrese un correo electrónico válido",
        status: "warning",
      });
      clearAlert();
    } else {
      try {
        await emailjs.send('service_e9l35y8', 'template_fgowcy1', data, 'iTdLoXkadX_s2S6ls');
        setData({
          user_name: "",
          user_lastname: "",
          user_email: "",
          message: "",
        });
        setAlert({
          isAlert: true,
          message: "Gracias por contactarme",
          status: "success",
        });
        clearAlert();
      } catch (err) {
        setAlert({
          isAlert: true,
          message: `Error al enviar el correo`,
          status: "danger",
        });
        clearAlert();
      }
    }
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col my-32"
    >

      {/* Alert */}
      <AnimatePresence>
        {alert.isAlert && (
          <Alert status={alert.status} message={alert.message} />
        )}
      </AnimatePresence>
      {/* Title */}
      <div className="w-full flex items-center justify-center py-32">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-8 h-auto object-contain" alt="leaf" />
          <p className="text-2xl lg:text-3xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Contáctame
          </p>
          <img src={Leaf2} className="w-8 h-auto object-contain" alt="leaf" />
        </motion.div>
      </div>

      {/* main content */}
      <div className=" w-full flex flex-col items-center justify-start gap-4">
        <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-center gap-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              value={data.user_name}
              onChange={handleTextChange}
              placeholder="Nombre"
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
            />
            <input
              type="text"
              name="user_lastname"
              value={data.user_lastname}
              onChange={handleTextChange}
              placeholder="Apellido"
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
            />
          </div>

          {/* Email fiel */}
          <input
            type="email"
            name="user_email"
            value={data.user_email}
            onChange={handleTextChange}
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
          />
          <textarea
            name="message"
            value={data.message}
            onChange={handleTextChange}
            id=""
            cols="0"
            rows="10"
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
            placeholder="Escríbeme..."
          ></textarea>

          <div className="w-full flex items-center justify-center lg:justify-end">
            <button
              className="px-12 py-13 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary"
              onClick={sendEmail}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
