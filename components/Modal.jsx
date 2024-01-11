import Image from "next/image";
import Link from "next/link";
import { CgCloseO } from "react-icons/cg";
import { MdLaunch } from "react-icons/md";

const Modal = ({ project, onClose }) => {
  console.log(project);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center font-main px-4 transition-all ease-in-out z-10">
      <div className="bg-white rounded-lg p-5 md:w-9/12 md:h-[80vh] relative flex items-center">
        <button
          onClick={onClose}
          className="absolute text-black right-4 top-3 text-[24px]"
        >
          <CgCloseO />
        </button>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="w-full md:w-8/12 h-[20vh] md:h-[70vh] mt-10 md:mt-0 ">
            <div className="relative w-full h-full drop-shadow-lg overflow-hidden">
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="object-cover md:object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-6/12">
            <article>
              <h5 className="text-sm">Project</h5>
              <h2 className="text-[35px] font-bold">{project.name}</h2>
              <p className="text-sm capitalize">
                type:
                <span className="ml-2 font-bold">{project.type}</span>
              </p>
              <p className="flex flex-col gap-2 mt-4 my-6">
                <span>About</span>
                <span className="text-[14px]">{project.about}</span>
              </p>
              <p className="font-semibold text-sm mb-4">
                Stack:
                {project.stack.map((stack) => (
                  <span className="ml-1">{stack}</span>
                ))}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.url}
                  className="w-max bg-primary py-[5px] px-2 rounded flex justify-center"
                  target="blank"
                >
                  <button className="text-white flex items-center gap-x-1">
                    <MdLaunch className="text-[17px]" />
                    <span className="font-bold uppercase text-[13px]">
                      Launch
                    </span>
                  </button>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
