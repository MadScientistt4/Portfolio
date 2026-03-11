"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { projects } from './utils';
import Image from 'next/image';

const ProjectCard = ({ item }) => {
  const { title, description, tech, image, githubLink, liveLink, contain = false } = item;

  return (
    <motion.div 
      className='border border-[var(--color-accent)]/30 rounded-xl shadow-md
       hover:shadow-xl hover:border-[var(--color-accent)]/60
       transition-all duration-300 w-full @xl:max-w-4xl mx-auto p-6 bg-[var(--color-primary)]'
      whileHover={{ y: -8 }}
      whileTap={{ y: -4 }}
    >
      <div className="h-48 rounded-lg overflow-hidden" >
        <Image
          src={image}
          alt={title}
          width={500}
          height={200}
          className={`${contain ? "object-contain" : "object-cover"} object-[50%_15%] w-full h-full mx-auto hover:scale-110 transition-transform duration-500`}
        />
      </div>
      <h3 className="text-2xl font-bold my-4 text-[var(--color-accent)]">{title}</h3>
      <p className="text-base text-[var(--color-text)]/80 leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 my-6">
        {tech.map((ele, index) => (
          <span key={index} className="text-xs px-3 py-1.5 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30 transition-all duration-200 hover:bg-[var(--color-accent)]/25">
            {ele}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-6 flex-wrap">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-transparent hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] text-[var(--color-accent)] hover:text-[var(--color-primary)] active:text-[var(--color-primary)] border border-[var(--color-accent)] transition-all duration-300 shadow-sm hover:shadow-md">
              <FaGithub className="mr-2" /> Code
            </Button>
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[var(--color-accent)] hover:bg-transparent active:bg-transparent text-[var(--color-primary)] hover:text-[var(--color-accent)] active:text-[var(--color-accent)] border border-[var(--color-accent)] transition-all duration-300 shadow-md hover:shadow-lg">
              <FaExternalLinkAlt className="mr-2" /> Live
            </Button>
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <main className="min-h-[calc(100vh-8rem)] w-full @container
     px-4 py-6 flex flex-col items-center gap-y-8">
      <h1 className='text-3xl font-bold'><span className='text-[var(--color-accent)]'>P</span>rojects</h1>
      {
        projects.map((item, index) => {
          return <ProjectCard
            key={index}
            item={item}
          />
        })
      }
    </main>
  );
};

export default Projects;