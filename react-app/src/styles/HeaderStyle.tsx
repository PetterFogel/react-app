import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        /* === HEADER === */
        rootStyle: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0rem 5%",
            height: "7vh",
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            background: "#fff",
            zIndex: 300,
            [theme.breakpoints.down('md')]: {
                borderBottom: "1px solid lightgrey",
                position: "fixed",
              },
        },
        headerLogo: {
            fontWeight: "normal",
            fontSize: "2rem",
            color: "#222"
        },
        cartStyle: {
            fontWeight: "normal",
            background: "#7f99ab",
            color: "#fff",
            padding: "0.4rem 1rem"
        },
        /* === NAVIGATION === */
        navStyle: {
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            width: "30%",
            height: "100%",
        },
        navLinksStyle: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            listStyle: "none",
            width: "100%",
            height: "100%",
            [theme.breakpoints.down('md')]: {
                position: "fixed",
                right: 0,
                top: "7vh",
                height: "93vh",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                width: "50%",
                transition: "all 600ms ease-in-out",
                borderLeft: "1px solid lightgrey",
                background: "#fff"
              },
              [theme.breakpoints.down('sm')]: {
                width: "100%",
                right: "-100%"
              }
        },
        liStyle: {
            color: "#222",
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0rem 1rem",
            '&:hover': {
                color: "#7f99ab",
            },
        },
        // Burger Menu
        burgerContainer: {
            display: "none",
            cursor: "pointer",
            alignSelf: "center",
            [theme.breakpoints.down('md')]: {
                display: "block"
            }
        },
        burgerBars: {
            width: "3rem",
            height: "0.125rem",
            margin: "0.4rem",
            background: "grey"
        },
    }),
);
