import { useEffect, useState } from 'react'

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailable] = useState([])

  useEffect(() => {
    async function fetchPlaces() {
      const response = await fetch('http://localhost:3001/places')
      const data = await response.json()
      setAvailable(data.places)
    }

    fetchPlaces()
  }, [])
  

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
