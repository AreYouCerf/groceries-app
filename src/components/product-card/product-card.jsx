import Image from 'next/image'
import AddToCartButton from '../ui/add-to-cart-button/add-to-cart-button.jsx'
import styles from './product-card.module.css'

export default function ProductCard({ product }) {
  if (!product) return null
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes='(max-width: 768px) 150px, 180px'
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h3 className={styles.name}>{product.name}</h3>
      <span className={styles.unit}>{product.unit}, Price</span>
      <div className={styles.footer}>
        <span className={styles.price}>${product.price.toFixed(2)}</span>
        <AddToCartButton productId={product.name} product={product} />
      </div>
    </div>
  )
}