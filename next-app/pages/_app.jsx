import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles"
import NextHead from "next/head"
import PropTypes from "prop-types"
import React from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import theme from "ui/theme"

export default function Application(props) {
  const { Component, pageProps } = props
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      <NextHead>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </NextHead>
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={{}}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </MuiThemeProvider>
        </StyledThemeProvider>
      </StylesProvider>
    </>
  )
}

Application.defaultProps = {
  pageProps: {},
}
Application.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.object),
}
