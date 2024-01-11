import { FaRegMessage } from "react-icons/fa6";
import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="lg:px-[150px] text-black font-main md:-mt-[320px]">
      <div className=" h-max shadow-lg bg-[#008b8b] text-white rounded-lg overflow-hidden mx-auto">
        <div className="flex justify-center md:flex-row ">
          <div className="md:w-8/12 py-4 md:px-10 px-4">
            <article>
              <div className="flex items-center justify-between mb-[2px]">
                <h3 className="text-[22px] font-semibold">Let's Connect</h3>
                {/* <FaRegMessage className="font-semibold text-[25px]" /> */}
              </div>
              <p className="text-[14px] w-11/12">
                I reply faster than a page refresh!
              </p>
            </article>
            <form
              //   onSubmit={handleSignUp}
              className="flex flex-col gap-y-4 w-12/12 mt-6"
            >
              <div className="flex gap-4">
                <div className="pt-[8px] py-1 pl-[20px] outline-none border-[2px] border-white rounded  transition-all relative group w-full">
                  <input
                    type="text"
                    //   value={fullname}
                    className="focus:outline-none w-full  text-white text-[14px] bg-[#008b8b]"
                    //   onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                  <label className="absolute top-0 left-2 bg-[#008b8b] -mt-[12px] px-2 text-white text-[12px]">
                    Your Name
                  </label>
                </div>
                <div className="pt-[8px] py-1 pl-[20px] outline-none border-[2px] border-white rounded  transition-all relative group w-full">
                  <input
                    type="email"
                    //   value={email}
                    className="focus:outline-none w-full  text-white text-[14px] bg-[#008b8b]"
                    //   onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label className="absolute top-0 left-2 bg-[#008b8b] -mt-[12px] px-2 text-white text-[12px]">
                    Email
                  </label>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="pt-[8px] py-1 pl-[20px] outline-none border-[2px] border-white rounded  transition-all relative group w-full">
                  <textarea
                    type="password"
                    //   value={password}
                    className="focus:outline-none w-full  text-white text-[14px] bg-[#008b8b] resize-none"
                    //   onChange={(e) => setPassword(e.target.value)}
                    required
                    rows="3"
                    cols="60"
                  />
                  <label className="absolute top-0 left-2 bg-[#008b8b] -mt-[12px] px-2 text-white text-[12px]">
                    Message
                  </label>
                </div>
                <button
                  type="submit"
                  className="transition-all w-3/12 flex justify-center items-center"
                >
                  {/* {isLoading ? "Please wait" : "Sign Up"} */}

                  <AiOutlineSend className="text-[35px] text-white" />
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-4/12 bg-white text-black z-50 p-5">details</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
