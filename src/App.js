import React, { useState, useEffect } from "react";

//https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
//https://www.youtube.com/watch?v=bKyUbZOoIl0  2:49  8:01
//https://www.w3schools.com/jsref/prop_win_localstorage.asp

function App() {
  // usestate hook to track checkbox state
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // on init read localstorage "dark" value & set dark mode ... or not :)
    const root = window.document.documentElement;
    if (localStorage.getItem("dark")) {
      root.classList.add("dark");
      setChecked(!checked);
      console.log("mode: dark ");
    } else {
      root.classList.remove("dark");
      console.log("mode:");
    }
  }, []);

  const darkModeFunc = () => {
    // func activated by clicking checkebox to toggle dark mode & save to localstorage
    setChecked(!checked);
    const root = window.document.documentElement;
    root.classList.toggle("dark");
    localStorage.setItem("dark", root.classList.value);
    console.log("mode:" + root.classList.value);
  };

  return (
    // need add regular classes AS WELL AS  "dark mode" classes
    //     eg text-black
    //        dark:text-white
    <div className=" bg-white dark:bg-black text-black dark:text-white">
      Dark theme example by 'class' vs 'media' (ie based on os theme pref)
      <br /> <br />
      <div>
        <label htmlFor="darkOption"> Dark Mode </label>
        <input
          id="darkOption"
          type="checkbox"
          checked={checked}
          onChange={darkModeFunc}
        />
      </div>
    </div>
  );
}

export default App;
