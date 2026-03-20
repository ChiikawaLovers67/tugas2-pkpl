"use client"
import { useSession } from "next-auth/react"
import { isMember } from "@/lib/auth"
import { useState } from "react"

const fonts = ["Sans-serif", "Serif", "Monospace", "Cursive"]

export default function FontPanel() {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [fontFamily, setFontFamily] = useState("sans-serif")
  const [fontSize, setFontSize] = useState("16")

  if (!isMember(session)) return null

  function handleFontFamily(val) {
    setFontFamily(val)
    document.documentElement.style.setProperty("--font-family", val)
  }

  function handleFontSize(e) {
    const val = e.target.value
    setFontSize(val)
    document.documentElement.style.setProperty("--font-size", val + "px")
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          fontSize: "0.8rem",
          fontWeight: 500,
          color: "var(--text-color)",
          background: "transparent",
          border: "0.5px solid var(--card-border)",
          borderRadius: "8px",
          padding: "6px 14px",
          cursor: "pointer",
        }}
      >
        Change Font
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: "60px",
          right: "1rem",
          background: "var(--card-bg)",
          border: "0.5px solid var(--card-border)",
          borderRadius: "12px",
          padding: "1rem",
          zIndex: 200,
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          minWidth: "220px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
        }}>
          <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text-color)" }}>
            Ubah Font
          </span>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label style={{ fontSize: "0.75rem", color: "var(--text-color-sec)" }}>
              Jenis font
            </label>
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  width: "100%",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  border: "0.5px solid var(--card-border)",
                  background: "var(--card-bg)",
                  color: "var(--text-color)",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                {fonts.find(f => f.toLowerCase() === fontFamily) ?? "Sans-serif"}
                <span>▾</span>
              </button>

              {dropdownOpen && (
                <div style={{
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: 0,
                  right: 0,
                  background: "var(--card-bg)",
                  border: "0.5px solid var(--card-border)",
                  borderRadius: "6px",
                  overflow: "hidden",
                  zIndex: 300
                }}>
                  {fonts.map(f => (
                    <div
                      key={f}
                      onClick={() => {
                        handleFontFamily(f.toLowerCase())
                        setDropdownOpen(false)
                      }}
                      style={{
                        padding: "6px 10px",
                        fontSize: "0.8rem",
                        color: fontFamily === f.toLowerCase() ? "white" : "var(--text-color)",
                        cursor: "pointer",
                        background: fontFamily === f.toLowerCase() ? "var(--accent-color)" : "transparent"
                      }}
                    >
                      {f}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label style={{ fontSize: "0.75rem", color: "var(--text-color-sec)" }}>
              Ukuran font: {fontSize}px
            </label>
            <input
              type="range"
              min="12"
              max="24"
              value={fontSize}
              onChange={handleFontSize}
            />
          </div>
        </div>
      )}
    </>
  )
}