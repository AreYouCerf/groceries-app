import Image from 'next/image'
import styles from './categories-card.module.css'

export default function CategoryCard({ category }) {
  if (!category) return null
  return (
    <div className={styles.card}
      style={{ backgroundColor: category.backgroundColor }}>
      <div className={styles.imageWrapper}>
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes='(max-width: 768px) 80px, 100px'
          style={{ objectFit: 'contain' }}
        />
      </div>
      <span className={styles.name}>{category.name}</span>
    </div>
  )
}