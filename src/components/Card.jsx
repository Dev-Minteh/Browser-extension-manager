import ToggleSwitch from "./ToggelSwitch";

export default function Card({ item, toggleExtension, removeExtension}) {
  return (
    <div className="rounded-xl shadow p-4 flex flex-col bg-white dark:bg-slate-800 justify-between">
              <div className="flex items-start  gap-4 ">
                <div className="p-2">
                  <img src={item.logo} alt="icon" className="" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button onClick={()=>removeExtension(item.id)} className="border font-medium border-gray-300 rounded-full  px-4 py-1 text-sm ">
                  Remove
                </button>
                <ToggleSwitch toggleExtension={toggleExtension} item={item}/>
              </div>
            </div>
  );
}