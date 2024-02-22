"use client";
import React, { useState } from "react";
import SubHeading from "./ui/SubHeading";
import Heading from "./Heading";
import { projects } from "@/data";
import Modal from "./Modal";
import { Card, Metric, Text } from "@tremor/react";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    // setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="text-black px-4" id="portfolio">
      <article className="w-full text-center font-main flex flex-col items-center gap-y-4 mb-12">
        <div>
          <h2 className="text-[18px] font-semibold font-primary">Portfolio</h2>
          <div className="w-[40px] h-[2px] bg-primary" />
        </div>
        <p className="text-[15px] md:w-1/2">
          Take a peek at my portfolio, where my code does the cha-cha and
          designs do the tango. It's where pixels and functionality have a party
          on the web!
        </p>
      </article>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div
            className="lg:w-[250px] lg:h-[250px] h-[300px] bg-white rounded-[15px] shadow-lg flex flex-col items-center justify-center text-center gap-y-4 overflow-hidden relative group transition-all duration-500  gradient-border-top"
            key={index}
            onClick={() => openModal(project)}
          >
            <img
              src={project.img}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bg-black bg-opacity-75 inset-0 text-white items-center justify-center hidden group-hover:flex cursor-pointer">
              <p>{project.name}</p>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal
          project={selectedProject}
          onClose={closeModal}
          isOpen={isModalOpen}
        />
      )}
    </section>
  );
};

export default Portfolio;
