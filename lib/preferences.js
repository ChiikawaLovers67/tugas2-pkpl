const THEME_STORAGE_KEY = "cl67-theme"
const FONT_FAMILY_STORAGE_KEY = "cl67-font-family"
const FONT_SIZE_STORAGE_KEY = "cl67-font-size"
const DEFAULT_THEME = "dark"

function isBrowser() {
  return typeof window !== "undefined"
}

export function readPreference(key) {
  if (!isBrowser()) return null
  return window.localStorage.getItem(key)
}

export function writePreference(key, value) {
  if (!isBrowser()) return
  window.localStorage.setItem(key, value)
}

export function applyTheme(theme) {
  if (typeof document === "undefined") return
  document.documentElement.setAttribute("data-theme", theme)
}

export function applyFontFamily(fontFamily) {
  if (typeof document === "undefined" || !fontFamily) return
  document.documentElement.style.setProperty("--font-family", fontFamily)
}

export function applyFontSize(size) {
  if (typeof document === "undefined" || !size) return
  const numeric = parseInt(size, 10)
  if (Number.isNaN(numeric)) return
  document.documentElement.style.setProperty("--font-size", `${numeric}px`)
}

export function resetPreferencesToDefault() {
  if (typeof document === "undefined") return
  document.documentElement.setAttribute("data-theme", DEFAULT_THEME)
  document.documentElement.style.removeProperty("--font-family")
  document.documentElement.style.removeProperty("--font-size")
}

export const preferenceKeys = {
  theme: THEME_STORAGE_KEY,
  fontFamily: FONT_FAMILY_STORAGE_KEY,
  fontSize: FONT_SIZE_STORAGE_KEY,
}
