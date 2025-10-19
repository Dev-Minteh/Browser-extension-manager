export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`flex justify-between bg-white p-2 rounded-xl dark:bg-[#1c1c2c] items-center mb-6`}>
    <div className="">
          <img src="/images/logo.svg" alt="Logo" className="" />
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="border p-2 rounded-xl bg-gray-100 border-red-500 dark:bg-[#2c2c3c] ">
          {darkMode ? <img src="/images/icon-sun.svg" className=""/> : 
          <img src="/images/icon-moon.svg" alt="moon icon" className="" />
          }
        </button>
      </header>
  );
}
