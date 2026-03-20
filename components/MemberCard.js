import styles from "./MemberCard.module.css"

export default function MemberCard({ name, npm, major, birthdate, description, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <h6 className={styles.npm}>{npm}</h6>
      <p className={styles.major}>{major}</p>
      <p className={styles.birthdate}>{birthdate}</p>
      <div className={styles.divider}></div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}