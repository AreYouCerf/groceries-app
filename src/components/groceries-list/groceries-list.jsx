import { nanoid } from 'nanoid'

export const groceries = [
  { id: nanoid(), name: 'Naturel Red Apple', unit: '1kg', price: 4.99, image: '/groceries-images/apple.png', exclusiveOffer: true, bestSelling: false },
  { id: nanoid(), name: 'Organic Bananas', unit: '7pcs', price: 4.99, image: '/groceries-images/banana.png', exclusiveOffer: true, bestSelling: true },
  { id: nanoid(), name: 'Bell Pepper Red', unit: '1kg', price: 4.99, image: '/groceries-images/pepper-red.png', exclusiveOffer: false, bestSelling: true },
  { id: nanoid(), name: 'Ginger', unit: '250gm', price: 4.99, image: '/groceries-images/ginger.png', exclusiveOffer: false, bestSelling: false },
  { id: nanoid(), name: 'Beef Bone', unit: '1kg', price: 9.99, image: '/groceries-images/beef-bone.png', exclusiveOffer: true, bestSelling: true },
  { id: nanoid(), name: 'Broiler Chicken', unit: '1kg', price: 7.99, image: '/groceries-images/broiler-chicken.png', exclusiveOffer: false, bestSelling: true },
]

export const categories = [
  { id: nanoid(), name: 'Meat and Fish', image: '/categories-images/meat-and-fish.png', backgroundColor: 'rgba(248, 164, 41, 0.1)' },
  { id: nanoid(), name: 'Frash Fruits', image: '/categories-images/fruits.png', backgroundColor: 'rgba(83, 177, 117, 0.1)' },
  { id: nanoid(), name: 'Frash Vegetables', image: '/categories-images/vegetables.png', backgroundColor: 'rgba(83, 177, 117, 0.1)' },
]