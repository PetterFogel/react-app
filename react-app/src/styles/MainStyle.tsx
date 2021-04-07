import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootStyle: {
            width: "100%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
            margin: "auto",
            padding: "10% 5%"
            },
        },
    }),
);