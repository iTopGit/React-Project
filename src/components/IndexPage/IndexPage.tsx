import { Card, Grid, Typography } from "@mui/material";
import IndexForm from "./IndexForm";

function IndexPage() {
    function handleSubmitSuccess(): void {
        throw new Error("Function not implemented.");
    }

    // ...

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Card sx={{ minWidth: 500 }}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    wrap="wrap"
                    spacing={1}
                >
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <Typography variant="h1">Tetris</Typography>
                        <IndexForm onSubmitSuccess={handleSubmitSuccess} />
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
}

export default IndexPage
