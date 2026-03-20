"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>ChiikawaLovers67</span>
      <div className={styles.right}>
        {session ? (
          <>
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