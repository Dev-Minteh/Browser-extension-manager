export default function ToggleSwitch({ toggleExtension, item }) {
  return (
    <div
      onClick={() => toggleExtension(item.id)}
      className={`w-10 h-6 rounded-full flex items-center px-1 cursor-pointer transition ${
        item.active ? 'bg-red-500 justify-end' : 'bg-slate-300 justify-start'
      }`}
    >
      <div className="w-4 h-4 bg-white rounded-full shadow" />
    </div>
  );
}
