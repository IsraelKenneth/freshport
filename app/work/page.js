"use client"

import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { MotionWrap, AppWrap } from '@/wrapper';
import { client } from '@/sanity/lib/client';
import { ProjectCard } from '@/components';



const Work = () => {
  const [webdevProjects, setWebdevProjects] = useState([]);
  const [mobdevProjects, setMobdevProjects] = useState([]);
  const [graphicdevProjects, setGraphicdevProjects] = useState([]);
  const [uiuxProjects, setUiuxProjects] = useState([]);
  const [activeTab, setActiveTab] = useState(1);


  useEffect(() => {
    // Fetching projects for webdev
    client.fetch('*[_type == "webworks"]').then((data) => {
      setWebdevProjects(data);
    });

    // Fetching projects for mobdev
    client.fetch('*[_type == "mobileworks"]').then((data) => {
      setMobdevProjects(data);
    });

    // Fetching projects for graphicdev
    client.fetch('*[_type == " graphicworks"]').then((data) => {
      setGraphicdevProjects(data);
    });

    // Fetching projects for ui/ux
    client.fetch('*[_type == "designworks"]').then((data) => {
      setUiuxProjects(data);
    });
  }, []);

  const handleTabClick = (tabIndex) =>{
    setActiveTab(tabIndex)
  }

  const getProjectsByActiveTab = () => {
    switch (activeTab) {
      case 1:
        return webdevProjects;
      case 2:
        return mobdevProjects;
      case 3:
        return graphicdevProjects;
      case 4:
        return uiuxProjects;
      default:
        return [];
    }
  };

  const projects = getProjectsByActiveTab();

  return (
    <>
      <h2 className="text-2.75xl lg:text-4xl font-bold text-center text-black capitalize">My Creative <span className='text-secondary'>Portfolio</span> Section</h2>

      <div className="w-[60%] h-10 mx-auto mt-[2rem] flex flex-row rounded-full bg-gray-200 shadow-lg overflow-hidden">
                <button
                    className={`flex-1 md:text-sm text-[10px]  font-medium uppercase ${activeTab === 1 ? "bg-[#3d5a80] text-white" : "bg-[##fffcef] text-gray-700"}`}
                    onClick={() => handleTabClick(1)}
                >
                    Web Dev
                </button>
                <button
                    className={`flex-1 md:text-sm text-[10px] font-medium uppercase ${activeTab === 2 ? "bg-[#3d5a80] text-white" : "bg-[##fffcef] text-gray-700"}`}
                    onClick={() => handleTabClick(2)}
                >
                    UI/UX <br className="block md:hidden" /> Designs
                </button>
                <button
                    className={`flex-1 md:text-sm text-[10px] font-medium uppercase pr-2 ${activeTab === 3 ? "bg-[#3d5a80] text-white" : "bg-[##fffcef] text-gray-700"}`}
                    onClick={() => handleTabClick(3)}
                >
                    Graphic Designs
                </button>
                <button
                    className={`flex-1 md:text-sm text-[10px] font-medium uppercase pr-2 ${activeTab === 4 ? "bg-[#3d5a80] text-white" : "bg-[##fffcef] text-gray-700"}`}
                    onClick={() => handleTabClick(4)}
                >
                    Mobile Dev
                </button>
            </div>

            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='mt-20 flex flex-wrap gap-7'
            >

          {projects.map((project, index) => (
      <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}






        {/* {filterWork.map((work, index) => (
          <div className="bg-white text-black p-5 rounded-xl sm:w-[360px] w-full cursor-pointer transition-transform duration-300 flex flex-col justify-center items-center hover:shadow-lg relative" key={index}>
            <div
              className="relative w-full h-[230px] cursor-pointer"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} className='w-full h-full object-cover rounded-lg' />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="absolute inset-0 bg-black bg-opacity-50 rounded opacity-0 transition-all duration-300 ease-in-out flex justify-center items-center"
              >
                <a className='w-6 h-6 text-white' href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-center items-center"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a  className= 'w-6 h-6 text-white' href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-center items-center"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="mt-5 w-full justify-center items-center text-black flex flex-col">
              <h4 className=" items-start justify-start font-bold text-[24px]">{work.title}</h4>
              <p className="mt-2 text-left justify-start  text-[14px]" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
              {work.tags.map((tag, index) => (
              <span key={index} className="text-sm bg-gray-200 p-1 rounded mr-1">
              {tag.name}
              </span>
  ))}
</div>
            </div>
          </div>
        ))} */}




      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work),'work',);
