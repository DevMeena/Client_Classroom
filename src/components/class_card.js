import { IconButton } from "@material-ui/core";
import { AssignmentIndOutlined, FolderOpenOutlined } from "@material-ui/icons";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import { useHistory } from "react-router-dom";
// import "./ClassCard.css";

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

const useStyles = makeStyles(theme => ({
    classCard__upper: {
        backgroundColor: random_hex_color_code(),
        // backgroundColor: "#008d7d",
        height: "90px",
        position: "relative",
        color: "white",
        padding: "10px",
        borderBottom: "1px solid #dcdcdc",
        padding: "20px"
      },
      classCard: {
        width: "300px",
        border: "1px solid #dcdcdc",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        display: "inline-block",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
      },
      classCard__middle: {
        height: "150px"
      },

      classCard__creatorPhoto: {
        position: "absolute",
        right: "10px",
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        border: "3px solid #FFF"
      },
      
      classCard__className: {
        fontWeight: "400",
        fontSize: "25px",
        font: "15px Arial, sans-serif"
      },
      
      classCard__creatorName: {
        position: "absolute",
        bottom: "12px",
        fontWeight: "100",
        fontSize: "14px",
        font: "12px/30px Arial, serif"
      },
      
      classCard__lower: {
        display: "flex",
        flexDirection: "row-reverse"
      }
}));

function ClassCard({ name, creatorName, creatorPhoto, id, style }) {
//   const history = useHistory();
//   const goToClass = () => {
//     history.push(`/class/${id}`);
//   };

    const classes = useStyles();
    // onClick={goToClass}
  return (
    <div className={classes.classCard} style={style} >
      <div className={classes.classCard__upper}>
        <div className={classes.classCard__className}>{name}</div>
        <div className={classes.classCard__creatorName}>{creatorName}</div>
        <img src={creatorPhoto} className={classes.classCard__creatorPhoto} />
      </div>
      <div className={classes.classCard__middle}></div>
      <hr></hr>
      <div className={classes.classCard__lower}>
        <IconButton>
          <FolderOpenOutlined />
        </IconButton>
        <IconButton>
          <AssignmentIndOutlined />
        </IconButton>
      </div>
    </div>
  );
}
export default ClassCard;