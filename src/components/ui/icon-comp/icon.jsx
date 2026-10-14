import Image from 'next/image'
import styles from '@/components/ui/icon-comp/icon.module.css'

export default function Icon({ src, alt = '', width, height }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={styles.icon} />
  )
}