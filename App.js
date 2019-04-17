import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Quiz from "./src/features/quiz/Quiz";
import theme from "./src/theme";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Quiz />
      </Container>
    </ThemeProvider>
  );
}
