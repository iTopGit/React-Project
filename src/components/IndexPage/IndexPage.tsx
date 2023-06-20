import { useNavigate } from 'react-router-dom'
import { Button, Grid, TextField, Typography} from "@mui/material"

// API
import { ProjectName } from '../../App'
import { useState } from 'react'
import { IScoreRequest, getAllAppScores } from '../../api/scoreApi'
import IndexForm from './IndexForm'

function IndexPage() {
    

    // const [name, setName] = useState('');

    let username = ''

    const [scoresList, setScoresList] = useState<IScoreRequest[]>([])

    const handleSubmitSuccess = async () => {
        const result = await getAllAppScores(ProjectName)
        setScoresList(result!)
    }

    // check
    const isNameEmpty = username.trim() === '';

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
                    <IndexForm onSubmitSuccess={handleSubmitSuccess}/>
                </Grid>
                <Grid item xs={3}/>
            </Grid>
            
        </>
    )
}

export default IndexPage

