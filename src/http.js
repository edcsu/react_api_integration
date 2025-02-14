export async function fetchAvailablePlaces(params) {
    const response = await fetch('http://localhost:3001/places')
    const data = await response.json()

    if (!response.ok) {
        throw new Error("Faild to get places");
    }

    return data.places
}