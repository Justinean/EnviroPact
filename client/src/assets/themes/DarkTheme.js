import createMuiTheme from "@material-ui/core/styles/createTheme";

const primaryLight = "#CED0CE";
const primaryMain = "#415D43";
const primaryDark = "#111D13";

const secondaryMain = "#E18335";
const secondaryDark = "#1E91D6";

const contrastTextLight = "#ffffff";

// bp added iconMain and icon below. Tried to use existing for nav but couldn't figure it out 
const iconMain = "#CED0CE"

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
    icon: {
      main: iconMain
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
