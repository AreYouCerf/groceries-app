'use client'

import { useState, useEffect } from 'react'
import Icon from '@/components/ui/icon-comp/icon.jsx'
import styles from './user-location.module.css'

export default function UserLocation() {
  const [city, setCity] = useState('Finding location...')

  useEffect(() => {
    if (!navigator.geolocation) {
      setCity('Not supported')
      return
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        try {
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          )
          const data = await res.json()
          const hasBoth = data.city && data.locality && data.city !== data.locality
          const fullName = hasBoth
            ? `${data.city}, ${data.locality}`
            : (data.city || data.locality || 'Location found')

          setCity(fullName)
        } catch (error) {
          setCity('Network error')
        }
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setCity('Access denied')
        } else {
          setCity('Location unavailable')
        }
      }
    )
  }, [])

  return <span className={styles.geo}>
    <Icon src='/geotag.svg' width={15} height={18} />
    {city}</span>
}