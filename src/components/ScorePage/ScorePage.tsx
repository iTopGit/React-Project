import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import ScoreForm from './ScoreForm'
import ScoreLists from './ScoreLists'
import { IScoreRequest, getAllAppScores } from '../../api/scoreApi'
import { ProjectName } from '../../App'

function ScorePage() {
    const [scoresList, setScoresList] = useState<IScoreRequest[]>([])

    const handleDeleteSuccess = (deleteScoreID: number) => {
        setScoresList((prev) => {
            return prev.filter((score) => score.id !== deleteScoreID)
        })
    }

    useEffect(() => {
        getAllAppScores(ProjectName).then((result) => {
            setScoresList(result!)
        })
    }, [])

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <ScoreForm/>
            </Grid>

            <Grid item xs={12} md={6}>
                <ScoreLists
                    scoreLists={scoresList}
                    onDeleteSuccess={handleDeleteSuccess}
                />
            </Grid>
        </Grid>
    )
}

export default ScorePage
