import Button from "@material-ui/core/Button"
import MUIContainer from "@material-ui/core/Container"
import { withApollo } from "graphql/client"
import React from "react"
import styled from "styled-components"

const StyledButton = styled(Button)`
  background-color: #6772e5;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`
const Home = () => {
  return (
    <>
      <Container>
        <StyledButton>Customized</StyledButton>
      </Container>
    </>
  )
}

const Container = styled(MUIContainer).attrs({
  maxWidth: "md",
})``

export default withApollo(Home)
