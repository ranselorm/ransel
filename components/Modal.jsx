import Image from "next/image";
import { CgCloseO } from "react-icons/cg";

const Modal = ({ project, onClose }) => {
  console.log(project);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center font-main px-4">
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
              <p className="flex flex-col gap-2 mt-4">
                <span>About</span>
                <span className="text-[14px]">{project.about}</span>
              </p>
              <p>
                Stack: <span>Next.js, Tailwind, MonoDB</span>
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
