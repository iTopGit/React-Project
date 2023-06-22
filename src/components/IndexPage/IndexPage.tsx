import { useEffect, useState } from 'react'
import { Card, Grid, Typography } from '@mui/material'
import { IScoreRequest, getAllAppScores } from '../../api/scoreApi'
import { ProjectName } from '../../App'
import IndexForm from './IndexForm'
import Indexx from './indexx'

function ScorePage() {
    const [scoresList, setScoresList] = useState<IScoreRequest[]>([])
    console.log(scoresList)

    useEffect(() => {
        getAllAppScores(ProjectName).then((result) => {
            setScoresList(result!)
        })
    }, [])

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            height="100vh"
            spacing={5} 
        >
            <Grid item xs={6}>
                <Card >
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <Typography variant="h1">Tetris</Typography>
                        <IndexForm />
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Indexx scoreLists={scoresList}/>
            </Grid>
        </Grid>
    );
}

export default ScorePage
