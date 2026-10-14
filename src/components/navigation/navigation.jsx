import NavigationLink from './navigation-link/navigation-link'
import styles from './navigation.module.css'

export default function NavigationBar() {
  return (
    <nav className={styles.navigationBar}>
      <NavigationLink href='/shop' label='Shop' iconSrc='/shop.svg' />
      <NavigationLink href='/explore' label='Explore' iconSrc='/explore.svg' />
      <NavigationLink href='/cart' label='Cart' iconSrc='/cart.svg' />
      <NavigationLink href='/favourite' label='Favourite' iconSrc='/favourite.svg' />
      <NavigationLink href='/account' label='Account' iconSrc='/account.svg' />
    </nav>
  )
}