import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, TextField } from "@mui/material"

function IndexForm () {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const isNameEmpty = name.trim() === '';

    const gotoBoard = () => {
        navigate('/board', { state: { name } })
    }
    
    const goToScore = () => {
        navigate('/scores', { state: { name }})
    }

    return (
            <form>
            <TextField
                sx={{ m: 1 }}
                label="Player Name"
                name="name"
                onChange={onChange}
                className='nameField'
            /><br/>
            <Button 
                variant="contained"
                sx={{ m: 2 }}
                disabled={isNameEmpty}
                onClick={gotoBoard}
            >
                Start
            </Button>
            <Button 
                variant="contained"
                sx={{ m: 2 }}
                onClick={goToScore}
                disabled={isNameEmpty}
            >
                Score
            </Button>
            </form>
    )
}


export default IndexForm







