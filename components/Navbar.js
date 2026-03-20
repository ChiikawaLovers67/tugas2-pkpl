"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav>
      {session ? (
        <>
          <Image src={session.user.image} width={32} height={32} style={{ borderRadius: "50%" }} alt="foto profil" />
          <span>{session.user.name}</span>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <button onClick={() => signIn("google")}>Login dengan Google</button>
      )}
    </nav>
  )
}