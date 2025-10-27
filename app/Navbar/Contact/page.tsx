const Contact: React.FC = () => {
  return (
    <div className="flex min-h-screen  w-full flex-col items-center justify-center gap-8 px-12 py-24 md:gap-8 md:px-16 md:py-6">
      <p className="text-center text-6xl font-light   text-teal-600 text-nowrap p-5">
        Get in Touch
      </p>
      <form className="flex w-full max-w-md flex-col gap-8 rounded-lg  md:max-w-lg lg:max-w-xl ">
        <div className="flex flex-col gap-4">
          <input
            placeholder="Your name"
            type="text"
            className="rounded-lg border-2 border-teal-400   px-4 py-3 text-lg outline-none transition-all   duration-200 hover:bg-teal-50 focus:ring-2   focus:ring-teal-500"
          />
          <input
            placeholder="Your UserName"
            type="text"
            className="rounded-lg border-2 border-teal-400   px-4 py-3 text-lg outline-none transition-all   duration-200 hover:bg-teal-50 focus:ring-2   focus:ring-teal-500"
          />
          <input
            placeholder="Your Email"
            type="text"
            className="rounded-lg border-2 border-teal-400   px-4 py-3 text-lg outline-none transition-all   duration-200 hover:bg-teal-50 focus:ring-2   focus:ring-teal-500"
          />
        </div>
        <textarea
          placeholder="Your Message"
          className="h-32 w-full resize-none rounded-lg   border-2 border-teal-400 px-4 py-3 text-lg   outline-none transition-all duration-200   hover:bg-teal-50 focus:ring-2    focus:ring-teal-500"
        ></textarea>
        <button
          className="rounded-lg border-2   border-teal-400 bg-teal-500 px-6 py-3   font-semibold text-white transition-all duration-200 hover:bg-teal-600"
        >
          send message
        </button>
      </form>
    </div>
  );
};
export default Contact;
