import { useEffect, useState } from 'react'

import Places from './Places.jsx';
import ErrorPage from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailable] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)

      try {  
        const response = await fetch('http://localhost:3001/places')
        const data = await response.json()

        if (!response.ok) {
          throw new Error("Faild to get places");
        }

        setAvailable(data.places)
      } catch (error) {
        setError({
          message: error.message || 'Could not retrieve places, try again later'
        })
      }

      setIsFetching(false)
    }

    fetchPlaces()
  }, [])

  if (error) {
    <ErrorPage
      title="An error occured"
      message={error.message} 
    />
  }

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
