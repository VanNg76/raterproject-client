import { useParams } from "react-router-dom"
import { useState } from "react"
import { saveGameImage } from "./GameManager"
import { useHistory } from "react-router-dom"

export const UploadPicture = () => {

    const { gameId } = useParams()
    const [fileString, updateFileString] = useState("")
    const history = useHistory()

    //  we need to convert the image file into a Base64 string.
    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }
    
    const createGameImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            console.log("Base64 of file is", base64ImageString);
    
            // Update a component state variable to the value of base64ImageString
            updateFileString(base64ImageString)
        });
    }

    return (
        <>
            <input type="file" id="game_image" onChange={createGameImageString} />
            <br></br>
            <button onClick={() => {
                // Upload the stringified image that is stored in state
                const gameImage = {
                    "game": parseInt(gameId),
                    "game_image": fileString
                }
                saveGameImage(gameImage)
                    .then(() => {
                        history.push(`/games/${gameId}`)
                    })

            }}>Upload</button>
        </>
    )
}