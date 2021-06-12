import React from 'react'
import {Button, Avatar, Typography, TextField, Grid, Container, Link, Box} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"

function Copyright(){
    return(
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright ©'}
            <Link color="inherit" href="https://allan-maina.vercel.app">
                Allan Maina
            </Link>
            {" "}
            {new Date().getFullYear()}{'.'}
        </Typography>
    )
}
const useStyles = makeStyles((theme) => ({
    paper:{
        marginTop: theme.spacing(0),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

function Login() {
    const classes = useStyles()
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    A
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form className={classes.form} action="/login" method="post">
                    <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="email adress"
                    autoComplete="email"
                    autoFocus
                    />
                    <TextField
                    type="password"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    name="password"
                    label="password"
                    autoComplete="Current-password"
                    autoFocus
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password ?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Dont have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    )
}

export default Login
