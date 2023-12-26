"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

const Services = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const data = await client.fetch('*[_type == "experiences"]');
      setExperiences(data);
    };

    const fetchSkills = async () => {
      const data = await client.fetch('*[_type == "skills"]');
      setSkills(data);
    };

    fetchExperiences();
    fetchSkills();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills & Experiences</h2>
      
      <div className="flex flex-wrap lg:flex-row flex-col items-start justify-between w-full mx-auto">
        
        <div className="flex flex-wrap w-full lg:w-2/3 lg:pr-12">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center w-1/3 p-4"
              key={skill.name}
            >
              <div
                className="flex items-center justify-center w-24 h-24 rounded-full"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlForImage(skill.icon)} alt={skill.name} className="w-12 h-12" />
              </div>
              <p className="mt-3 text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          {experiences.map((experience) => (
            <div key={experience.year} className="mb-8">
              <p className="font-bold text-xl mb-4">{experience.year}</p>
              <div>
                {experience.works.map((work) => (
                  <div
                    key={work.name}
                    className="mb-4 transition-opacity duration-300 hover:opacity-75"
                    data-tip
                    data-for={work.name}
                  >
                    <h4 className="font-bold mb-2">{work.name}</h4>
                    <p className="text-gray-600">{work.company}</p>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="max-w-xs bg-white shadow p-4 rounded text-sm"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Services), 'services');
