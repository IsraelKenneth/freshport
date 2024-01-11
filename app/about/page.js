"use client"


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '@/wrapper';
import { urlForImage as urlFor} from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold lg:mt-4 mt-32 ">I Know that <span className="text-blue-500">Good Design</span> <br />means <span className="text-blue-500">Good Business</span></h2>

      <div className="flex flex-wrap justify-center mt-8 lg:mb-4 mb-16">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="w-56 mx-4 my-4"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="font-bold mt-2">{about.title}</h2>
            <p className="mt-1">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};


export default AppWrap(MotionWrap(About),'about');