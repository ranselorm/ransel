"use client";
import React, { useState } from "react";
import SubHeading from "./ui/SubHeading";
import Heading from "./Heading";
import { projects } from "@/data";
import Modal from "./Modal";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="text-black px-4">
      <article className="w-full text-center font-primary flex flex-col items-center gap-y-4 mb-12">
        <SubHeading text="Portfolio List" />
        <Heading text="Captivating Portfolio" />
        <p className="text-[14px] w-1/2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          debitis nam nesciunt praesentium expedita, commodi non voluptas,
        </p>
      </article>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div
            className="lg:w-[250px] h-[250px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-center gap-y-4 overflow-hidden relative group transition-all duration-500"
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
      {isModalOpen && <Modal project={selectedProject} onClose={closeModal} />}
    </section>
  );
};

export default Portfolio;
