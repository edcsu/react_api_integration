import { useEffect, useState } from 'react'

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailable] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/places')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setAvailable(data.places)
    })
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
