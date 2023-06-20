import { useNavigate } from 'react-router-dom'
import { Button, Grid, TextField, Typography} from "@mui/material"

// API
import { ProjectName } from '../../App'
import { useState } from 'react'
import { IScoreRequest } from '../../api/scoreApi'

function IndexPage() {
    const navigate = useNavigate()

    const gotoBoard = () => {
        navigate('/board')
    }
    const goToScore = () => {
        navigate('/scores')
    }

    const [name, setName] = useState('');

    let username = ''

    const onChange = () => {
        console.log(name)
    }

    // check
    const isNameEmpty = name.trim() === '';

    return (
        <>
            <Grid 
                container
                justifyContent="center"
                alignItems="center"
                height="100vh"
                wrap='wrap'
                spacing={1}
                >
                
                <Grid item xs={3}/>
                <Grid item xs={6} style={{ textAlign: 'center' }}>
                    <Typography variant="h1">Project Name</Typography>
                    <TextField
                        fullWidth
                        sx={{ m: 1 }}
                        label="Player Name"
                        name="name"
                        value={name}
                        onChange={onChange}
                    /><br/>
                    <Button 
                        variant="contained"
                        sx={{ m: 1 }}
                        disabled={isNameEmpty}
                        onClick={gotoBoard}
                        type="submit"
                    >
                        Start
                    </Button>
                    <Button 
                        variant="contained"
                        sx={{ m: 1 }}
                        disabled={isNameEmpty} 
                        onClick={goToScore}
                        type="submit"
                    >
                        Score
                    </Button>
                </Grid>
                <Grid item xs={3}/>
            </Grid>
            
        </>
    )
}

export default IndexPage

