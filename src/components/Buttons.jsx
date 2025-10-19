export default function Buttons({filter, setFilter}) {
  return (
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-2xl font-bold mb-4">Extensions List</h2>
        <div className="flex gap-2 mb-6">
            {['All', 'Active', 'Inactive'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-1 border rounded-full font-semibold transition ${
                filter === status ? "bg-red-500 text-white" : "hover:bg-slate-200"
              }`}
            >
              {status}
            </button>
          ))} 
          {/* <button className="px-4 py-1 border rounded-full font-semibold bg-red-500 text-white">All</button>
          <button className="px-4 py-1 bg-white border border-red-500 rounded-full font-semibold hover:bg-slate-200">Active</button>
          <button className="px-4 py-1 bg-white  rounded-full font-semibold hover:bg-slate-200">Inactive</button> */}
        </div>
    </div>
  );
}