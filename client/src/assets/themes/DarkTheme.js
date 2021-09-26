import createMuiTheme from "@material-ui/core/styles/createTheme";

const primaryLight = "#CED0CE";
const primaryMain = "#415D43";
const primaryDark = "#111D13";

const secondaryMain = "#E18335";
const secondaryDark = "#1E91D6";

const contrastTextLight = "#ffffff";

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: primaryLight,
      main: primaryMain,
      dark: primaryDark,
      contrastText: contrastTextLight
    },
    secondary: {
      main: secondaryMain,
      dark: secondaryDark
    },
    type: "dark"
  },
  // overrides: {
  //   MuiCardHeader: {
  //     action: {
  //       marginTop: "auto",
  //       marginBottom: "auto"
  //     }
  //   }
  // }
});

export default darkTheme;
