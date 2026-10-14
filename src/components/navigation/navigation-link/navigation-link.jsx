import Link from 'next/link'
import Icon from '@/components/ui/icon-comp/icon.jsx'
import styles from './navigation-link.module.css'

export default function NavigationLink({ href, label, iconSrc }) {
  return (
    <Link href={href} className={styles.link}>
      <Icon src={iconSrc} width={24} height={24} />
      <span>{label}</span>
    </Link>
  )
}