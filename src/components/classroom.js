import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    form: {
        position: "relative",
        width: "680px",
        margin: "30px auto 20px auto",
        background: "#fff",
        padding: "15px",
        borderRadius: "7px",
        boxShadow: "0 1px 5px rgb(138, 137, 137)"
      },
      "formInput": {
        width: "100%",
        border: "none",
        padding: "4px",
        outline: "none",
        fontSize: "1.2em",
        resize: "none",
        fontFamily: "Arial, Helvetica, sans-serif",
        marginBottom: "20px"
      },
      "formTextarea": {
        width: "100%",
        border: "none",
        padding: "4px",
        outline: "none",
        fontSize: "1.2em",
        // fontFamily: "inherit",
        resize: "none",
        fontFamily: "Arial, Helvetica, sans-serif"
      },
      "formButton": {
        position: "absolute",
        right: "18px",
        bottom: "-18px",
        background: "royalblue",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "36px",
        height: "36px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
        outline: "none"
      },
      classroomBackground: {
          borderRadius: "10px",
          width: "160vh",
          height: "35vh",
          fontFamily: "Arial, Helvetica, sans-serif",
          color: "white",
        //   backgroundColor: "grey",
          margin: "0 auto",
          background: "#348F50",  /* fallback for old browsers */
          background: "-webkit-linear-gradient(to right, #56B4D3, #348F50)",  /* Chrome 10-25, Safari 5.1-6 */
          background: "linear-gradient(to right, #56B4D3, #348F50)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      },
      classMenu: {
        display: "block",
        textAlign: "justify",
        margin: "0 auto",
      },
      toDoArea: {
        marginLeft: "10%",
        // marginBottom: "40px",
        display: "inline-block",
        width: "310px",
        height: "164px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
        borderRadius: "10px",
        // marginDown: "0 !important",
        margin: "30px",
      },
      formArea: {
        marginBottom: "40px",
        display: "inline-block",
        marginRight: "10%",
        float: "right"
      },
      textCard: {
        borderRadius: "10px",
        width: "160vh",
        // height: "35vh",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "black",
      //   backgroundColor: "grey",
        margin: "0 auto",
        background: "white",
        // border: "1px solid grey",
        boxShadow: "0px 0px 1px 1px rgb(0 0 0 / 0.2)"

    },
    cardText: {
        padding: "20px",
        margin: "0"
    },
    cardTextHeading: {
        padding: "2px",
        paddingLeft: "20px",
        paddingTop: "10px",
        fontWeight: "100",
        margin: "0"
    },
    cardDate: {
        padding: "2px",
        paddingLeft: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontWeight: "100",
        margin: "0"
    },
      parent: {
        backgroundColor: "white"
      },
      subject: {
          fontSize: "3rem",
          padding: "30px"
      },
      info: {
        paddingLeft: "30px"
      },
      containerArea: {
          margin: "20px",
          marginBottom: "50px",
      }
}));

function Classroom(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    // ! new 

    const [isExpanded, setExpanded] = useState(true);

    function expand() {
        setExpanded(true);
      }

    // ! new ends

    function handleChange(event) {
       const { name, value } = event.target;

       setNote(prevNote => {
           return {
               ...prevNote,
               [name] : value
           };
       });
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();

    }

    const classes = useStyles();

    return(
        <div className={classes.parent} >

            <div className={classes.classroomBackground}>
                <h1 className={classes.subject} > Microprocessors </h1>
                <h3 className={classes.info}> CSE IV Sem </h3>
                <h2 className={classes.info}> Prof. Girdhari Singh </h2>
            </div>

            <div className={classes.classMenu}>

            <div className={classes.toDoArea} >
            <div><h2 className={classes.cardTextHeading} >Upcoming</h2></div>
            <Divider/>
            <div><p className={classes.cardText}>
            Woohoo, no work due soon!
            </p></div>
            </div>

            <div className={classes.formArea} >
            <form className={classes.form}>
                <input  className={classes.formInput}
                name="title" 
                onChange={handleChange} 
                value={note.title} 
                placeholder="Title" 
                />
                <textarea
                className={classes.formTextarea}
                onChange={handleChange}
                name="content" 
                value={note.content} 
                placeholder="Announce something to your Class!" 
                rows="3"
                 />
                <Zoom in={isExpanded}>
                <button className={classes.formButton} onClick={submitNote}> <AddIcon/> </button>
                </Zoom>
            </form>
            </div>
            </div>

            

            <Container fluid>
            <div className={classes.textCard} >
            <h2 className={classes.cardTextHeading} >New Assignment</h2>
            <h5 className={classes.cardDate} > Aug 4 </h5>
            <Divider/>
            <p className={classes.cardText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </div>
            </Container>

            <Container className={classes.containerArea} fluid>
            <div className={classes.textCard} >
            <h2 className={classes.cardTextHeading} >New Assignment</h2>
            <h5 className={classes.cardDate} > Aug 4 </h5>
            <Divider/>
            <p className={classes.cardText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </div>
            </Container>

        </div>
    )
}

export default Classroom