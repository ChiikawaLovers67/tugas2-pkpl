"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import styles from "./Navbar.module.css"
import FontPanel from "./FontPanel"
import ThemeToggle from "./ThemeToggle"
import { isMember } from "@/lib/auth"

export default function Navbar() {
  const { data: session } = useSession()
  const member = isMember(session)

  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>ChiikawaLovers67</span>
      <div className={styles.right}>
        {member && <FontPanel />}
        {session ? (
          <>
            {member ? (
              <>
                <span className={styles.name}>Mode Tampilan</span>
                <ThemeToggle />
              </>
            ) : (
              <span className={styles.notice}>Bukan anggota · view only</span>
            )}
            <Image
              src={session.user.image}
              width={32}
              height={32}
              alt="foto profil"
              className={styles.avatar}
            />
            <span className={styles.name}>{session.user.name}</span>
            <button className={styles.button} onClick={() => signOut()}>Logout</button>
          </>
        ) : (
          <button className={styles.button} onClick={() => signIn("google")}>
            Login dengan Google
          </button>
        )}
      </div>
    </nav>
  )
}
