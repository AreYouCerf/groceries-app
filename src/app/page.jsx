import NavigationBar from '@/components/navigation/navigation.jsx'
import UserLocation from '@/components/user-location/user-location.jsx'
import Icon from '@/components/ui/icon-comp/icon.jsx'
import ProductSlider from '@/components/product-slider/product-slider'
import CategorySlider from '@/components/categories-slider/categories-slider'
import { groceries, categories } from '@/components/groceries-list/groceries-list'
import styles from './page.module.css'

const exclusiveOffer = groceries.filter(item => item.exclusiveOffer)
const bestSelling = groceries.filter(item => item.bestSelling)

export default function Home() {
  return (
    <>
      <main className={styles.mainWrapper}>
        <Icon src='/main-app-icon.svg' width={26} height={30} />
        <UserLocation />
        <ProductSlider title='Exclusive Offer' items={exclusiveOffer} />
        <ProductSlider title='Best Selling' items={bestSelling} />
        <CategorySlider categories={categories} />

      </main>
      <NavigationBar />
    </>
  )
}