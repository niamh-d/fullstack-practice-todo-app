import { useEffect } from "react";

import { useTasks } from "../contexts/TasksContext";

export default function ThemeSelector() {
  const { isDark, toggleTheme } = useTasks();

  const handleDarkMode = () => toggleTheme();

  useEffect(
    function() {
      const selectedTheme = isDark ? "forest" : "garden";

      document.documentElement.setAttribute("data-theme", selectedTheme);
    },
    [isDark]
  );

  return (
    <button onClick={handleDarkMode} className="theme-selector">
      {isDark ? "Make it bright 💡" : "I embrace the dark 🖤"}
    </button>
  );
}
