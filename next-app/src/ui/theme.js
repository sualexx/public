import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

// Create a theme instance.
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "light",
      // primary: {
      //   main: "#556cd6",
      // },
      // secondary: {
      //   main: "#19857b",
      // },
      // error: {
      //   main: red.A400,
      // },
      // background: {
      //   default: "#fff",
      // },
    },
  }),
  {
    factor: 1.5,
  }
)

export default theme
