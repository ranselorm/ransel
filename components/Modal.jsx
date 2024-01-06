import Image from "next/image";
import { CgCloseO } from "react-icons/cg";

const Modal = ({ project, onClose }) => {
  console.log(project);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center font-main">
      <div className="bg-white rounded-lg p-5 w-9/12 h-[80vh] relative">
        <button
          onClick={onClose}
          className="absolute text-black right-4 top-3 text-[24px]"
        >
          <CgCloseO />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-8/12 h-[70vh]">
            <div className="relative w-full h-full drop-shadow-lg">
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-6/12">
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
