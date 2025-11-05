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
      className='border border-[var(--color-accent)] rounded-lg shadow-md
       hover:shadow-[0_4px_15px_var(--color-accent)] active:shadow-[0_4px_15px_var(--color-accent)]
       transition-all duration-300 w-full @xl:max-w-4xl mx-auto p-4 bg-[var(--color-primary)]'
      whileHover={{ y: -10, x: 10 }}
      whileTap={{ y: -5, x: 5 }}
    >
      <div className="h-48" >
        <Image
          src={image}
          alt={title}
          width={500}
          height={200}
          className={`${contain ? "object-contain" : "object-cover"} object-[50%_15%] w-full h-full mx-auto hover:scale-105 transition-all duration-500`}
        />
      </div>
      <h3 className="text-xl font-bold my-4 text-[var(--color-accent)] mx-1">{title}</h3>
      <p className="text-sm text-[var(--color-text)]/80 mx-1">{description}</p>
      <div className="flex flex-wrap gap-2 my-5">
        {tech.map((ele, index) => (
          <span key={index} className="text-xs px-3 py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)]">
            {ele}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-4">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-transparent hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] text-[var(--color-accent)] hover:text-[var(--color-primary)] active:text-[var(--color-primary)] border border-[var(--color-accent)] transition-all">
              <FaGithub className="mr-2" /> Code
            </Button>
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[var(--color-accent)] hover:bg-transparent active:bg-transparent text-[var(--color-primary)] hover:text-[var(--color-accent)] active:text-[var(--color-accent)] border border-[var(--color-accent)] transition-all">
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