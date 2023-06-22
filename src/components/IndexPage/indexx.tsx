import { Card, Grid, Typography } from "@mui/material";
import { IScoreRequest } from '../../api/scoreApi'

interface ScoreListsProps {
  scoreLists: IScoreRequest[];
}

function indexx({ scoreLists }: ScoreListsProps) {
  console.log(scoreLists);

  let sortedScores = [...scoreLists];
  sortedScores.sort((a, b) => b.score - a.score);
  const topFiveScores = sortedScores.slice(0, 5);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100vh"
      spacing={5} 
    >
      <Grid item xs={12}>
        <Typography variant="h4">High Score:</Typography>
        {topFiveScores.map((score) => (
          <Typography key={score.id} variant="h6">
            {score.score}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}

export default indexx;
