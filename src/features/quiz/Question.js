import React, { useState } from "react";
import styled from "styled-components";
import { Text, TextInput, View } from "react-native";
import {
  LargeText,
  MediumText,
  MediumButton,
  CenteredContainer,
  HideKeyboard
} from "../../components";

const GivenText = styled(LargeText)`
  text-align: center;
`;

const QuestionContainer = styled(View)`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const QuestionDetails = styled(CenteredContainer)`
  margin-top: 220px;
`;

const SubmitButton = styled(MediumButton)`
  margin-bottom: 220px;
`;

const AnswerInput = styled(TextInput)`
  border-bottom-width: 1px;
  border-bottom-color: grey;
`;

export default function Question({ givenText, phonetic, onSubmitAnswer }) {
  const [userAnswerText, setUserAnswerText] = useState("");

  // TODO: ok to declare inside here?
  const onSubmit = () => {
    onSubmitAnswer(userAnswerText);
    setUserAnswerText("");
  };

  return (
    <HideKeyboard>
      <QuestionContainer>
        <QuestionDetails>
          <GivenText>{givenText}</GivenText>
          <MediumText>{`(${phonetic})`}</MediumText>
          <AnswerInput onChangeText={setUserAnswerText} value={userAnswerText} />
        </QuestionDetails>
        <SubmitButton onPress={onSubmit}>
          <Text>Submit</Text>
        </SubmitButton>
      </QuestionContainer>
    </HideKeyboard>
  );
}
