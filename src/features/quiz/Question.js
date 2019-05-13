import React, { useState } from "react";
import styled from "styled-components";
import { Text, TextInput, View } from "react-native";
import {
  LargeText,
  MediumText,
  MediumButton,
  CenteredContainer,
  HideKeyboardOnTouch
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

// TODO: calculate width based on answer length (min length should be placeholder length)
const AnswerInput = styled(TextInput)`
  border-bottom-width: 1px;
  border-bottom-color: #d3d3d3;
  padding: 5px;
  margin-top: 20px;
  min-width: 135px;
  text-align: center;
  font-size: ${props => props.theme.medium.fontSize};
  font-weight: ${props => props.theme.medium.fontWeight};
`;

export default function Question({ givenText, phonetic, placeholder, onSubmitAnswer }) {
  const [userAnswerText, setUserAnswerText] = useState("");

  const onPressSubmit = () => {
    onSubmitAnswer(userAnswerText);
    setUserAnswerText("");
  };

  return (
    <HideKeyboardOnTouch>
      <QuestionContainer>
        <QuestionDetails>
          <GivenText>{givenText}</GivenText>
          <MediumText>{`(${phonetic})`}</MediumText>
          <AnswerInput
            value={userAnswerText}
            placeholder={placeholder}
            onChangeText={setUserAnswerText}
          />
        </QuestionDetails>
        <SubmitButton onPress={onPressSubmit}>
          <Text>Submit</Text>
        </SubmitButton>
      </QuestionContainer>
    </HideKeyboardOnTouch>
  );
}
