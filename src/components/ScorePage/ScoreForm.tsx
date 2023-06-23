import { Button, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { ProjectName } from '../../App'
import { IScoreRequest, addAppScore } from '../../api/scoreApi'

function ScoreForm() {

    const location = useLocation();
    const name = location.state?.name;

    return (
        
        <form>
            <Stack spacing={3} margin={5}>
                <TextField
                    sx={{justifyContent:'center' ,alignContent:'center'}}
                    label="Project Name"
                    name="projectName"
                    value={ProjectName}
                    disabled
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    sx={{color: 'white', alignItems: 'left', justifyContent: 'center'}}
                    label="Player Name"
                    name="name"
                    value={name}
                    disabled
                    InputLabelProps={{ shrink: true }}
                />
            </Stack>
        </form>
    )
}

export default ScoreForm