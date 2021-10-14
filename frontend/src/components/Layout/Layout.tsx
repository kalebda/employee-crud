// import { makeStyles, CssBaseline } from "@material-ui/core";
// import {
//   MuiThemeProvider,
//   createMuiTheme,
//   Theme,
// } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import Nav from "../Nav/Sidebar";
import { Wrapper, Main } from "./Layout.styles";
// const theme = createMuiTheme({
//   palette: {
//     background: {
//       default: "#f9f9f9",
//     },
//   },
// });
const theme = {
  background: {
    default: "#f9f9f9",
  },
};
// const useStyles = makeStyles((theme: Theme) => {
//   return {
//     root: {
//       display: "flex",
//       fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
//     },
//     main: {
//       width: "100%",
//       padding: theme.spacing(3),
//       marginTop: theme.spacing(8),
//     },
//   };
// });

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  // const classes = useStyles();

  return (
    // <MuiThemeProvider theme={theme}>
    // <CssBaseline />
    <ThemeProvider theme={theme}>
      {/* <div className={classes.root}> */}
      <Wrapper>
        <Nav />
        {/* <div className={classes.main}>{children}</div> */}
        <Main>{children}</Main>
        {/* </div> */}
      </Wrapper>
    </ThemeProvider>
    // </MuiThemeProvider>
  );
};

export default Layout;
