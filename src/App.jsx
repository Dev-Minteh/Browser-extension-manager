// import { useState } from 'react'
// import './App.css'
// import data from '../src/data/data.json';
// import Header from './components/Header';
// import Buttons from './components/Buttons';
// import Card from './components/Card';
// function App() {
//   const [extensions, setExtensions] = useState(data);
//   const [filter, setFilter] = useState("All");
//   const [darkMode, setDarkMode] = useState(false);
//  const filteredExtensions =
//     filter === "All"
//       ? extensions
//       : extensions.filter((ext) =>
//           filter === "Active" ? ext.active : !ext.active
//         );
//    const toggleExtension = (id) => { 
//     setExtensions((prev) =>
//       prev.map((ext) =>
//         ext.id === id ? { ...ext, active: !ext.active } : ext
//       )
//     );
//   };

//   const removeExtension = (id) => {
//     setExtensions((prev) => prev.filter((ext) => ext.id !== id));
//   };
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#e8f0ff] to-[#f3f9ff] p-6 text-slate-800">
//       <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
//       <section>
//         <Buttons filter={filter} setFilter={setFilter}/>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredExtensions.map((item) => (
//             <Card
//               key={item.id}
//               item={item}
//               toggleExtension={toggleExtension}
//               removeExtension={removeExtension}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App

import { useState, useEffect } from 'react';
import './App.css';
import data from '../src/data/data.json';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Card from './components/Card';

function App() {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const filteredExtensions =
    filter === "All"
      ? extensions
      : extensions.filter((ext) =>
          filter === "Active" ? ext.active : !ext.active
        );

  const toggleExtension = (id) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, active: !ext.active } : ext
      )
    );
  };

  const removeExtension = (id) => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

  return (
    <div
      className={`min-h-screen p-6 transition-all duration-300 ${
        darkMode
          ? 'bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-slate-100'
          : 'bg-gradient-to-b from-[#e8f0ff] to-[#f3f9ff] text-slate-800'
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <section>
        <Buttons filter={filter} setFilter={setFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredExtensions.map((item) => (
            <Card
              key={item.id}
              item={item}
              toggleExtension={toggleExtension}
              removeExtension={removeExtension}
              darkMode={darkMode}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
