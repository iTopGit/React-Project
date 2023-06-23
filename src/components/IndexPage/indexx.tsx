import { Card, Grid, Typography } from "@mui/material";
import { IScoreRequest } from '../../api/scoreApi'
import './Index.css'

interface ScoreListsProps {
  scoreLists: IScoreRequest[];
}

function Indexx({ scoreLists }: ScoreListsProps) {

  let sortedScores = [...scoreLists];
  sortedScores.sort((a, b) => b.score - a.score);
  const topFiveScores = sortedScores.slice(0, 5);

  return (
    <Grid 
      container
      justifyContent="center"
      alignItems="center"
      spacing={5} 
      sx={{p:3}}
    >
      <Grid item xs={12}>
        <Typography fontFamily={'Gloria Hallelujah'} variant="h4">High Score:</Typography>
        {topFiveScores.map((score, index) => (
          <Typography 
            fontFamily={'Gloria Hallelujah'} 
            key={score.id} 
            variant="h6"
          >
            {index + 1}. {score.name}: {score.score}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}

export default Indexx;
