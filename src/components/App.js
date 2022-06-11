// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [dogImage, setDogImage] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then((dogImage) => {
            setDogImage(dogImage)
            setIsLoaded(true)
        })
    }, [])
    if (!isLoaded) return <p>Loading...</p>

    return <img src={dogImage.message} alt='A Random Dog'></img>

}

export default App
