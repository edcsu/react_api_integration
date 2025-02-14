export async function fetchAvailablePlaces(params) {
    const response = await fetch('http://localhost:3001/places')
    const data = await response.json()

    if (!response.ok) {
        throw new Error("Faild to get places");
    }

    return data.places
}

export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3001/user-places', {
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error("Faild to get places");
    }

    return data.message
}