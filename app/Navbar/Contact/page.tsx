const Contact: React.FC = () => {
  return (
    <div className="py-24  flex min-h-screen flex-col items-center  mt-20 w-full gap-y-4  overflow-x-hidden px-4 md:gap-8 md:px-12 md:py-6 md:mt-0">
      <p className="text-center text-5xl sm:text-6xl font-light text-teal-600 whitespace-nowrap p-5">
        Get in Touch
      </p>
      <form className="flex w-full max-w-sm sm:max-w-md md:max-w-lg flex-col gap-y-4 rounded-lg">
        <div className="flex flex-col gap-y-4">
          <input
            placeholder="Your name"
            type="text"
            className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
          />
          <input
            placeholder="Your Username"
            type="text"
            className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
          />
          <input
            placeholder="Your Email"
            type="email"
            className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <textarea
          placeholder="Your Message"
          className="h-32 w-full resize-none rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
        ></textarea>
        <button
          type="submit"
          className="rounded-lg border-2 border-teal-400 bg-teal-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-teal-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;