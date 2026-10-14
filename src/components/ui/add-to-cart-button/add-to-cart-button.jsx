'use client'

import Image from 'next/image'
import styles from './add-to-cart-button.module.css'

export default function AddToCartButton() {
  return (
    <button
      className={styles.addButton}
      type='button'
      aria-label='Add to cart'>
      <Image
        src='/add-to-cart-button.svg'
        alt=''
        width={45}
        height={45} />
    </button>
  )
}