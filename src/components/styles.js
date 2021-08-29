import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
    navbar: {
        width: "100vw",
        height: "65px",
        borderBottom: "1px solid #dcdcdc",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 20px",
        alignItems: "center"
      },
      navbar__left: {
        display: "flex",
        alignItems: "center"
      },
      navbar__left_img: {
        marginRight: "20px",
        marginLeft: "20px"
      },
      navbar__left_span: {
        fontSize: "20px"
      },
      navbar__right: {
        display: "flex",
        alignItems: "center"
      },
      navbar__logo: {
        height: "30px",
        width: "auto"
      }
}));