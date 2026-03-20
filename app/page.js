import MemberCard from "@/components/MemberCard"
import styles from "./page.module.css"
import members from "@/data/members"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>ChiikawaLovers67</h1>
      <p className={styles.subtitle}>Pengantar Keamanan Perangkat Lunak · 2025/2026</p>
      <div className={styles.divider}></div>
      <div className={styles.grid}>
        {members.map((m) => (
          <MemberCard key={m.npm} {...m} />
        ))}
      </div>
    </main>
  )
}