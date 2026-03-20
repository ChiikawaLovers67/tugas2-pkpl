"use client"
import { useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  function handleTheme() {
    const newTheme = isDark? "light" : "dark"
    setIsDark(!isDark)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  return (
    <div
      onClick={handleTheme}
      style={{
        width: "44px",
        height: "24px",
        borderRadius: "999px",
        background: isDark ? "var(--accent-color)" : "#ccc",
        cursor: "pointer",
        position: "relative",
        transition: "background 0.3s",
      }}
    >
      <div style={{
        position: "absolute",
        top: "3px",
        left: isDark ? "23px" : "3px",
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        background: "white",
        transition: "left 0.3s",
      }} />
    </div>
  )
}