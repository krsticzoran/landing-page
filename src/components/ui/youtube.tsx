"use client";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

export default function YoutubeDelayed() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 3000); // 3 sekunde

    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <motion.div initial={{ opacity: 0, y: -50 }}       
    whileInView={{ opacity: 1, y: 0 }}       
    viewport={{ once: true, amount: 0.3 }}   
    transition={{ duration: 0.7, ease: "easeOut" }} className="w-full aspect-video min-w-full mx-auto">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/tofroyPmZNY"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </motion.div>
  );
}
