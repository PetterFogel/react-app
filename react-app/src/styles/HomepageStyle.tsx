import { createStyles, makeStyles, Theme } from "@material-ui/core";
import introImage from '../assets/home-bg.jpg';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootStyle: {
            width: "100%",
            height: "80vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            // background: "red",
            [theme.breakpoints.down('md')]: {
                flexDirection: "column",
                alignItems: "flex-start",
                height: "100%",

              },
        },
        introDiv: {
            flexDirection: "column",
            alignItems: "flex-start",
            width: "20%",
            // background: "yellow",
            zIndex: 100,
            [theme.breakpoints.down('md')]: {
                justifyContent: "flex-start",
                width: "70%",
                padding: "10% 0%"
              },
        },
        imageholder: {
            flexDirection: "column",
            width: "60%",
            height: "80%",
            [theme.breakpoints.down('md')]: {
                width: "100%",
                height: "50vh",
                margin: "auto"
              },
        },
        imgStyle: {
            backgroundImage: `url(${introImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
        },
        homeTitle: {
            fontWeight: "bold",
            fontSize: "6rem",
            margin: "1rem 0rem",
            color: "#333",
            zIndex: 200,
            width: "40rem",
            [theme.breakpoints.down('md')]: {
                width: "100%",
                fontSize: "3rem"
              },
        },
        homeSubTitle: {
            fontWeight: "normal",
            fontSize: "1.2rem",
            margin: "1rem 0rem"
        },
        homeBtn: {
            background: "#7f99ab",
            color: "#fff",
            border: "1px solid #7f99ab",
            fontSize: "1.1rem",
            fontWeight: "normal",
            padding: "1rem 1.7rem",
            outline: "none",
            margin: "1rem 0rem",
            transition: "all 400ms ease",
            cursor: "pointer",
            '&:hover': {
                background: "#fff",
                color: "#7f99ab"
            }
        },
    }),
);