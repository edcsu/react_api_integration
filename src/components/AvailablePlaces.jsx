import { useState } from 'react'

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [available, setAvailable] = useState([])

  fetch('http://localhost:3001/places')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setAvailable(data.places)
    })

  return (
    <Places
      title="Available Places"
      places={[]}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
