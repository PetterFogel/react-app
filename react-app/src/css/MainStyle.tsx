import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootStyle: {
            marginTop: "7vh",
            width: "100%",
            height: "90vh",
        }
    }),
);