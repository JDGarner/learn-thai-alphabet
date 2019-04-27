import React, { Component } from "react";
import styled from "styled-components";
import { View, Text, TextInput } from "react-native";
import { LargeText, MediumText, MediumButton, CenteredContainer } from "../../components";

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

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswerText: ""
    };
  }

  onChangeText = text => {
    this.setState({
      userAnswerText: text
    });
  };

  // onSubmitAnswer => resetText

  render() {
    const { givenText, phonetic, onSubmitAnswer } = this.props;
    const { userAnswerText } = this.state;

    return (
      <QuestionContainer>
        <QuestionDetails>
          <GivenText>{givenText}</GivenText>
          <MediumText>{`(${phonetic})`}</MediumText>
          <TextInput onChangeText={this.onChangeText} value={userAnswerText} />
        </QuestionDetails>
        <SubmitButton onPress={() => onSubmitAnswer(userAnswerText)}>
          <Text>Submit</Text>
        </SubmitButton>
      </QuestionContainer>
    );
  }
}
