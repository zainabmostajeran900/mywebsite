
const Project: React.FC = () => {
  return (
    <div className="min-h-screen mt-20 xl:mt-0 lg:mt-0 w-full flex flex-col items-center justify-center  py-24 px-12 md:gap-8 md:px-16 md:py-6">
      <p className="text-5xl text-center font-thin p-5">Projects</p>
        <div className="grid grid-cols-1 lg:grid-cols-2   xl:grid-cols-3 gap-5">
          <div className=" border-2  border-[#2CB897] text-left space-y-2  hover:scale-105 transition-all duration-200  cursor-pointer px-8 py-10 rounded-lg hover:bg-teal-50 ">
            <h1 className="text-3xl font-semibold">Task Management App</h1>
            <h3 className="text-xl text-gray-700">
              Tech Stack: React.js, Tailwind CSS
            </h3>
            <p className="text-sm text-gray-600">
              A simple task management app to organize daily tasks. It features
              task creation, marking tasks as completed, and a user-friendly UI.
              Built to improve React.js skills and understand state management.
            </p>
          </div>
          <div className=" border-2  border-teal-500 text-left space-y-2  hover:scale-105 transition-all duration-200  cursor-pointer px-8 py-10 rounded-lg hover:bg-teal-50">
            <h1 className="text-3xl font-semibold">Portfolio Website</h1>
            <h3 className="text-xl text-gray-700">
              Tech Stack: HTML, CSS, JavaScript
            </h3>
            <p className="text-sm text-gray-600">
              Designed and developed a personal portfolio website to showcase
              projects and skills. Focused on responsive design and
              cross-browser compatibility.
            </p>
          </div>
          <div className="border-2  border-teal-500 text-left space-y-2  hover:scale-105 transition-all duration-200  cursor-pointer px-8 py-10 rounded-lg hover:bg-teal-50">
            <h1 className="text-3xl font-semibold">Weather App</h1>
            <h3 className="text-xl text-gray-700">
              Tech Stack: React.js, OpenWeather API
            </h3>
            <p className="text-sm text-gray-600">
              Created a weather app that fetches real-time weather data using
              the OpenWeather API. Learned about API integration and
              asynchronous programming.
            </p>
          </div>
          <div className=" border-2  border-teal-500 text-left space-y-2  hover:scale-105 transition-all duration-200  cursor-pointer px-8 py-10 rounded-lg hover:bg-teal-50">
            <h1 className="text-3xl font-semibold">
              E-Commerce Landing Page
            </h1>
            <h3 className="text-xl text-gray-700">
              Tech Stack: Next.js, Tailwind CSS
            </h3>
            <p className="text-sm text-gray-600">
              Built a responsive e-commerce landing page with dynamic product
              sections. Gained hands-on experience with Next.js features like
              routing and server-side rendering.
            </p>
          </div>
          <div className=" border-2  border-teal-500 text-left space-y-2  hover:scale-105 transition-all duration-200  cursor-pointer px-8 py-10 rounded-lg hover:bg-teal-50">
            <h1 className="text-3xl font-semibold">Expense Tracker</h1>
            <h3 className="text-xl text-gray-700">
              Tech Stack: JavaScript, LocalStorage
            </h3>
            <p className="text-sm text-gray-600">
              A basic expense tracker that allows users to add, delete, and view
              expenses. Built to understand DOM manipulation and JavaScript
              concepts.
            </p>
          </div>
          <div className=" border-2  border-teal-500 text-left space-y-2  hover:scale-105 transition-all duration-200  cursor-pointer px-8 py-10 rounded-lg hover:bg-teal-50">
            <h1 className="text-3xl font-semibold">Blog CMS</h1>
            <h3 className="text-xl text-gray-700">Tech Stack: React.js, Firebase</h3>
            <p className="text-sm text-gray-600">
              Developed a simple blog content management system where users can
              create, edit, and delete posts. Leveraged Firebase for
              authentication and database storage.
            </p>
          </div>
        </div>
      </div>
  )
};
export default Project;
