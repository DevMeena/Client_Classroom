import { makeStyles } from '@material-ui/core/styles';
import bgImg from './images/bgImg.jpg'
export default makeStyles(() => ({
    bodyDiv: {
        // backgroundImage: 'url(' + {bgImg} + ')',
        backgroundColor: '#00cec9',
        height: '100vh',
        padding: '0px',
        margin: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageContainer: {
        border: '5px solid #81ecec',
        borderRadius: '30px',
        height: '70%',
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoFont: {
        textAlign: 'center',
        padding: '10px',
        paddingBottom: '10px'
    },
    headingFont: {
        color: '#FFF',
        fontSize: '3.5em',
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif'
    },
    buttonContainer: {
        textAlign: 'center',
        display: 'block'
    },
    buttonStyles: {
        height: '50px',
        width: '200px',
        margin: '10px',
        marginLeft: '20px'
    },
    googleStyle: {
        margin: "0 auto",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

}));