'use client'

import ProductCard from '../product-card/product-card'
import styles from './product-slider.module.css'

export default function ProductSlider({ title, items = [] }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <a href="" className={styles.seeAll}>See all</a>
      </div>
      <div className={styles.sliderContainer}>
        {items.map(product => (
          <div key={product.id} className={styles.cardWrapper}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}