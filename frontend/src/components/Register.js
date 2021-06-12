import React from 'react'
import {Container, Grid, Typography, Link, Button, TextField, Box, Avatar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

function Copyright(){
    return(
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright ©'}
            <Link color="inherit" href="https://allanmaina.vercel.app">
                Allan Maina
            </Link>
            {' '}
            {new Date().getFullYear()}{'.'}
        </Typography>
    )
}

const useStyles = makeStyles((theme)=>({
    paper:{
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3),
    },
    submit:{
        margin: theme.spacing(3, 0, 2)
    }
}));

function Register() {
    const classes = useStyles();
    return (
        <Container components="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    A
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form className={classes.form} action="/signup" method="post">
                    <Grid container spacing={2}>
                        <Grid item xs="12" sm={6}>
                            <TextField
                            variant="outlined"
                            autoComplete="fname"
                            name="firstname"
                            required
                            fullWidth
                            id="firstname"
                            label="First Name"
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs="12" sm={6}>
                            <TextField
                            variant="outlined"
                            autoComplete="lname"
                            name="lastname"
                            required
                            fullWidth
                            id="lastname"
                            label="Last Name"
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                            type="email"
                            variant="outlined"
                            autoComplete="email"
                            required
                            fullWidth
                            name="email"
                            label="Email Adress"
                            id="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                            type="password"
                            variant="outlined"
                            autoComplete="current-password"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            id="email"
                            />
                        </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    )
}

export default Register
