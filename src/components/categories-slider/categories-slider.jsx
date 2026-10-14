'use client'

import CategoryCard from '../categories-card/categories-card'
import styles from './categories-slider.module.css'

export default function CategorySlider({ categories = [] }) {
  if (categories.length === 0) return null;

  return (
    <div className={styles.scrollContainer}>
      {categories.map((category) => (
        <div key={category.id} className={styles.cardWrapper}>
          <CategoryCard category={category} />
        </div>
      ))}
    </div>
  )
}
