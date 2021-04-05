import { createStyles, makeStyles, Theme } from "@material-ui/core";
import introImage from '../assets/home-bg.jpg';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootStyle: {
            width: "100%",
            height: "70vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            [theme.breakpoints.down('md')]: {
                flexDirection: "column",
                height: "90vh",
              },
        },
        introDiv: {
            flexDirection: "column",
            alignItems: "flex-start",
            width: "30%",
        },
        imageholder: {
            flexDirection: "column",
            width: "30%",
            height: "70%",
            [theme.breakpoints.down('md')]: {
                width: "50%",
                height: "50vh"
              },
        },
        imgStyle: {
            backgroundImage: `url(${introImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100%"
        }
    }),
);