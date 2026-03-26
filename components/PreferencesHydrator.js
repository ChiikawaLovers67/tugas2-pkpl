"use client"
import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { isMember } from "@/lib/auth"
import {
  applyFontFamily,
  applyFontSize,
  applyTheme,
  preferenceKeys,
  readPreference,
  resetPreferencesToDefault,
} from "@/lib/preferences"

export default function PreferencesHydrator() {
  const { data: session } = useSession()
  const isAllowed = isMember(session)

  useEffect(() => {
    if (!isAllowed) {
      resetPreferencesToDefault()
      return
    }

    const savedTheme = readPreference(preferenceKeys.theme)
    if (savedTheme) {
      applyTheme(savedTheme)
    }

    const savedFontFamily = readPreference(preferenceKeys.fontFamily)
    if (savedFontFamily) {
      applyFontFamily(savedFontFamily)
    }

    const savedFontSize = readPreference(preferenceKeys.fontSize)
    if (savedFontSize) {
      applyFontSize(savedFontSize)
    }
  }, [isAllowed])

  return null
}
