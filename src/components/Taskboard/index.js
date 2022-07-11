import { Button, ThemeProvider, Grid, Paper, makeStyles, Card, CardContent, Typography, CardActions} from "@material-ui/core";
import { status } from './../constants';

function TaskBoard() {
    const listTask = [
        {
            id: 1,
            title: "Read book",
            status: 0
        },
        {
            id: 2,
            title: "Play football",
            status: 1
        },
        {
            id: 3,
            title: "Play game",
            status: 2
        }
    ];


    return (
        <>
            <Button variant="contained" color="primary" disableElevation>
                <span class="material-icons">
                    add_circle_outline
                </span> Disable elevation
            </Button>

            <Grid container spacing={2}>

                {status.map((status, index) => {
                    const listFilter = listTask.filter(task => task.status === status.value);
                    return (
                        <Grid item md={4} xs={12} key={status.value}>
                            <div>{status.label}</div>
                            <div>{listFilter.map((list) => {
                                return (
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Typography  color="textSecondary" gutterBottom>
                                                { list.title}
                                            </Typography>
                                            
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                )
                            })}</div>
                        </Grid>)
                })}


            </Grid>
        </>
    )
}

export default TaskBoard
