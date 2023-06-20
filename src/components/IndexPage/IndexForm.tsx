import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, TextField } from "@mui/material"
import { IScoreRequest, addAppScore } from "../../api/scoreApi"
import { ProjectName } from "../../App"

function IndexForm ({ onSubmitSuccess }: { onSubmitSuccess: () => void }) {

    const [loading, setLoading] = useState<boolean>(false)
    
    const navigate = useNavigate()

    const gotoBoard = () => {
        navigate('/board')
    }
    
    const goToScore = () => {
        navigate('/scores')
    }

    const [name, setName] = useState('');
    
    const [requestBody, setRequestBody] = useState<IScoreRequest>({
        name: '',
        score: 0,
        projectName: ProjectName,
    })


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('event.target.name: ', event.target.value)
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

    return (
        <>
            <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                sx={{ m: 1 }}
                label="Player Name"
                name="name"
                onChange={onChange}
                className='nameField'
                required
            /><br/>
            <Button 
                variant="contained"
                sx={{ m: 1 }}
                onClick={gotoBoard}
                type="submit"
            >
                Start
            </Button>
            <Button 
                variant="contained"
                sx={{ m: 1 }}
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







