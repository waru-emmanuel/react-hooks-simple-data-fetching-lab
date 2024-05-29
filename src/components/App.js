// create your App component her
import React, {useState,useEffect} from "react";

const API_URL = "https://dog.ceo/api/breeds/image/random"

function App() {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

     useEffect (() => {
         fetch(API_URL)
           .then(r => r.json())
           .then(data => {setImage(data.message); // API response contains the image URL under the `message` key, not `image`.
                          setLoading(false);
           })
            .catch(error => {
                 console.error('Error fetching the dog image:', error);
                 setLoading(false);
            });
     }, []);

         return (
       <div>  
           {loading ? (<p>Loading...</p>): (<img src={image} alt="A Random Dog" />)}
        </div>

        );
}





export default App;


