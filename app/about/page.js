"use client"
// import { useState } from "react";

// // icons
// import {
//   FaHtml5,
//   FaCss3,
//   FaJs,
//   FaReact,
//   FaWordpress,
//   FaFigma,
// } from "react-icons/fa";

// import {
//   SiNextdotjs,
//   SiFramer,
//   SiAdobexd,
//   SiAdobephotoshop,
// } from "react-icons/si";


// //  data
// const aboutData = [
//   {
//     title: 'skills',
//     info: [
//       {
//         title: 'Web Development',
//         icons: [
//           <FaHtml5 />,
//           <FaCss3 />,
//           <FaJs />,
//           <FaReact />,
//           <SiNextdotjs />,
//           <SiFramer />,
//           <FaWordpress />,
//         ],
//       },
//       {
//         title: 'UI/UX Design',
//         icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
//       },
//     ],
//   },
//   {
//     title: 'awards',
//     info: [
//       {
//         title: 'Webby Awards - Honoree',
//         stage: '2011 - 2012',
//       },
//       {
//         title: 'Adobe Design Achievement Awards - Finalist',
//         stage: '2009 - 2010',
//       },
//     ],
//   },
//   {
//     title: 'experience',
//     info: [
//       {
//         title: 'UX/UI Designer - XYZ Company',
//         stage: '2012 - 2023',
//       },
//       {
//         title: 'Web Developer - ABC Agency',
//         stage: '2010 - 2012',
//       },
//       {
//         title: 'Intern - DEF Corporation',
//         stage: '2008 - 2010',
//       },
//     ],
//   },
//   {
//     title: 'credentials',
//     info: [
//       {
//         title: 'Web Development - ABC University, LA, CA',
//         stage: '2011',
//       },
//       {
//         title: 'Computer Science Diploma - AV Technical Institute',
//         stage: '2009',
//       },
//       {
//         title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
//         stage: '2006',
//       },
//     ],
//   },
// ];



// import React, { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '@/wrapper';
import { motion } from 'framer-motion';

const About = () => {
  // Sample about data
  const abouts = [
    {
      title: 'Web Development',
      description: 'I specialize in creating responsive and user-friendly web applications.',
      imgUrl: '/path-to-web-dev-image.jpg', // Replace with actual path or URL
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting visually appealing and intuitive user interfaces.',
      imgUrl: '/path-to-ui-ux-image.jpg', // Replace with actual path or URL
    },
    // ... add more about items as needed
  ];

  return (
    <>
      <h2 className="text-4xl font-bold">I Know that <span className="text-blue-500">Good Design</span> <br />means <span className="text-green-500">Good Business</span></h2>

      <div className="flex flex-wrap justify-center items-start mt-8">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-64 flex flex-col items-start p-4 m-4 rounded-lg shadow-md"
            key={index}
          >
            <img src={about.imgUrl} alt={about.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="font-bold mb-2">{about.title}</h2>
            <p className="text-gray-600">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// export default About;
export default AppWrap(MotionWrap(About),'about');