"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';

// Sample data
const sampleSkills = [
  { name: 'Web Development', bgColor: '#fef4f5', icon: <FaHtml5 /> }, // Assuming you have imported the icons
  // ... add more skills as needed
];

const sampleExperiences = [
  {
    year: '2012',
    works: [
      { name: 'Project A', company: 'Company A', desc: 'Description A' },
      // ... add more works as needed
    ],
  },
  // ... add more experiences as needed
];

const Services = () => {
  const [skills, setSkills] = useState(sampleSkills);
  const [experiences, setExperiences] = useState(sampleExperiences);

  useEffect(() => {
    // Here you can fetch or set your data if needed
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Skills & Experiences</h2>
      <div className="flex flex-wrap justify-between">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center m-4">
            <div className="w-24 h-24 rounded-full bg-[#fef4f5] flex items-center justify-center">
              {/* Assuming the icon is an SVG or Font Awesome icon */}
              {skill.icon}
            </div>
            <p className="mt-2 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
      {/* You can display experiences similarly */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Services, 'app__skills'),
  'services',
  'app__whitebg'
);
