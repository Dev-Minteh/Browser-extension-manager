import ToggleSwitch from "./ToggelSwitch";

export default function Card({ item, toggleExtension, removeExtension, darkMode }) {
  return (
    <div className={`rounded-xl shadow p-4 flex flex-col justify-between ${
      darkMode ? 'bg-slate-800 text-slate-100' : 'bg-white text-slate-800'
    }`}>
      <div className="flex items-start gap-4">
        <div className="p-2">
          <img src={item.logo} alt="icon" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {item.description}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={() => removeExtension(item.id)} 
          className={`border font-medium rounded-full px-4 py-1 text-sm ${
            darkMode 
              ? 'border-slate-600 text-slate-300 hover:bg-slate-700' 
              : 'border-gray-300 text-slate-800 hover:bg-gray-100'
          }`}
        >
          Remove
        </button>
        <ToggleSwitch toggleExtension={toggleExtension} item={item} />
      </div>
    </div>
  );
}