'use client'

import CategorySlider from '../categories-slider/categories-slider'
import ProductCard from '../product-card/product-card'
import styles from './groceries-section.module.css'

export default function GroceriesSection({ categories = [], products = [] }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Groceries</h2>
        <a href="" className={styles.seeAll}>See all</a>
      </div>
      <CategorySlider categories={categories} />
      <div className={styles.sliderContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.cardWrapper}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}