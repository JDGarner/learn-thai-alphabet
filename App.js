import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import Quiz from "./src/features/quiz/Quiz";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <Quiz />
    </Container>
  );
}
