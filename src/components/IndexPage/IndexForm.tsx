import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, TextField } from "@mui/material"
import { IScoreRequest, addAppScore } from "../../api/scoreApi"
import { ProjectName } from "../../App"


function IndexForm ({ onSubmitSuccess }: { onSubmitSuccess: () => void }) {

    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    
    const [requestBody, setRequestBody] = useState<IScoreRequest>({
        name: '',
        score: 0,
        projectName: ProjectName,
    })

    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('event.target.name: ', event.target.value)
        setName(event.target.value)
        setRequestBody((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            setLoading(true)
            await addAppScore(requestBody)
            onSubmitSuccess()
        } catch (err) {
        } finally {
            setLoading(false)
        }
    }

    const gotoBoard = () => {
        if (name.trim() === '') {
            return;
        }
        setName("");
        navigate('/board')
    }
    
    const goToScore = () => {
        if (name.trim() === '') {
            return;
        }
        setName("");
        navigate('/scores')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <TextField
                sx={{ m: 1 }}
                label="Player Name"
                name="name"
                onChange={onChange}
                className='nameField'
                required
            /><br/>

            <Button 
                variant="contained"
                sx={{ m: 2 }}
                type="submit"
                onClick={gotoBoard}
            >
                Start
            </Button>
            <Button 
                variant="contained"
                sx={{ m: 2 }}
                onClick={goToScore}
                type="submit"
            >
                Score
            </Button>
            </form>
        </>
    )
}

export default IndexForm







