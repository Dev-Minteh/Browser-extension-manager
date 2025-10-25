
export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`flex justify-between p-2 rounded-xl items-center mb-6 ${
      darkMode ? 'bg-[#1c1c2c]' : 'bg-white'
    }`}>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className={`border p-2 rounded-xl ${
          darkMode 
            ? 'bg-[#2c2c3c] border-slate-600' 
            : 'bg-gray-100 border-gray-300'
        }`}
      >
        {darkMode ? (
          <img src="/images/icon-sun.svg" alt="sun icon" />
        ) : (
          <img src="/images/icon-moon.svg" alt="moon icon" />
        )}
      </button>
    </header>
  );
}
