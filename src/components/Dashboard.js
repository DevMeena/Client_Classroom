import React, { useState } from 'react'
// import { faSchool } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Toolbar from "@material-ui/core/Toolbar";
// import AppBar from "@material-ui/core/AppBar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import Button from "@material-ui/core/Button";
// import MenuIcon from "@material-ui/icons/Menu";
import Navbar from './navbar'
import Sidebar from './sidebar'
import ClassCard from './class_card'

export const Dashboard = () => {

    // const drawerItems = [
    //     {text: }
    // ]

    // anchor="left" variant="temporary" onClose={toggleDrawer} open={drawerOpen}
    const classes_style = {marginBottom: "80px"}

    return (
        <div>
      
        {/* <Navbar /> */}
        <div style={classes_style}>
            <Sidebar />
        </div>
        
        <div>
        <ClassCard
              creatorName="Pewdiepie"
              creatorPhoto="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUxNzIxODgzNTg5NDIwMzAw/pewdiepie_gettyimages-501661286.jpg"
              name="Floor Gang"
              id={"This is beast"}
              style={{ margin: 15 }}
            />

        <ClassCard
              creatorName="Mr. Beast"
              creatorPhoto="https://www.businessinsider.in/thumb/msid-72480478,width-700,resizemode-4,imgsize-74408/21-year-old-YouTuber-MrBeast-was-one-of-the-most-viewed-YouTube-creators-in-2019-check-out-how-he-got-his-start-and-found-success-with-elaborate-stunts-and-giveaways.jpg"
              name="Beast Boii"
              id={"This is beast"}
              style={{ margin: 15 }}
            />
        <ClassCard
              creatorName="Pewdiepie"
              creatorPhoto="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUxNzIxODgzNTg5NDIwMzAw/pewdiepie_gettyimages-501661286.jpg"
              name="Floor Gang"
              id={"This is beast"}
              style={{ margin: 15 }}
            />

        <ClassCard
              creatorName="Mr. Beast"
              creatorPhoto="https://www.businessinsider.in/thumb/msid-72480478,width-700,resizemode-4,imgsize-74408/21-year-old-YouTuber-MrBeast-was-one-of-the-most-viewed-YouTube-creators-in-2019-check-out-how-he-got-his-start-and-found-success-with-elaborate-stunts-and-giveaways.jpg"
              name="Beast Boii"
              id={"This is beast"}
              style={{ margin: 15 }}
            />
        <ClassCard
              creatorName="Pewdiepie"
              creatorPhoto="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUxNzIxODgzNTg5NDIwMzAw/pewdiepie_gettyimages-501661286.jpg"
              name="Floor Gang"
              id={"This is beast"}
              style={{ margin: 15 }}
            />

        <ClassCard
              creatorName="Mr. Beast"
              creatorPhoto="https://www.businessinsider.in/thumb/msid-72480478,width-700,resizemode-4,imgsize-74408/21-year-old-YouTuber-MrBeast-was-one-of-the-most-viewed-YouTube-creators-in-2019-check-out-how-he-got-his-start-and-found-success-with-elaborate-stunts-and-giveaways.jpg"
              name="Beast Boii"
              id={"This is beast"}
              style={{ margin: 15 }}
            />
        <ClassCard
              creatorName="Pewdiepie"
              creatorPhoto="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUxNzIxODgzNTg5NDIwMzAw/pewdiepie_gettyimages-501661286.jpg"
              name="Floor Gang"
              id={"This is beast"}
              style={{ margin: 15 }}
            />

        <ClassCard
              creatorName="Mr. Beast"
              creatorPhoto="https://www.businessinsider.in/thumb/msid-72480478,width-700,resizemode-4,imgsize-74408/21-year-old-YouTuber-MrBeast-was-one-of-the-most-viewed-YouTube-creators-in-2019-check-out-how-he-got-his-start-and-found-success-with-elaborate-stunts-and-giveaways.jpg"
              name="Beast Boii"
              id={"This is beast"}
              style={{ margin: 15 }}
            />
        </div>
      
        </div>
    )
}

export default Dashboard