import { useEffect, useState } from 'react'

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailable] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)
      const response = await fetch('http://localhost:3001/places')
      const data = await response.json()
      setAvailable(data.places)
      setIsFetching(false)
    }

    fetchPlaces()
  }, [])

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
