import React from 'react'
import Button from '@material-ui/core/Button';
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleButton from 'react-google-button'
import useStyles from './styles';

export const Front = () => {

    const googleLogin = () => {
        // 5000/home/auth/google
        window.open("http://localhost:5000/auth/google", "_self");
    }

    const classes = useStyles();

    return (
        <div className={classes.bodyDiv}>
            <div className={classes.pageContainer}>
                <div>
                <div className={classes.logoFont}>
                <FontAwesomeIcon color="#81ecec" size='10x' icon={faSchool} />
                </div>
                <div>
                    <h1 className={classes.headingFont}> E - Classroom </h1>
                </div>
                <div className={classes.buttonContainer}>
                <Button variant="contained" className={classes.buttonStyles} color="secondary" href="/signin"> Sign In </Button>
                <Button variant="contained" className={classes.buttonStyles} color="primary" href="/signup"> Sign Up </Button>
                
                </div>
                <div className={classes.googleStyle}>
                <GoogleButton variant="contained" type="light" onClick={googleLogin} />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Front