import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        /* === HEADER === */
        rootStyle: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0rem 2rem",
            height: "7vh",
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            borderBottom: "1px solid #222"
        },
        headerLogo: {
            fontWeight: "normal",
            color: "#222"
        },
        cartStyle: {
            fontWeight: "normal",
            background: "#333",
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
            zIndex: 100,
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
                borderLeft: "1px solid #222",
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
                borderBottom: "1px solid #222",
            }
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
            width: "2.5rem",
            height: "0.125rem",
            margin: "0.4rem",
            background: "#222"
        },
    }),
);
