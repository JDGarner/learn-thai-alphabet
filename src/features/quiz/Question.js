import React, { Component } from "react";
import styled from "styled-components";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import { LargeText, MediumText } from "../../components/text/Text";

const GivenText = styled(LargeText)`
  text-align: center;
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
      <View>
        {/* <CenteredText>{givenText}</CenteredText> */}
        <GivenText>{givenText}</GivenText>
        <MediumText>{`(${phonetic})`}</MediumText>
        <TextInput onChangeText={this.onChangeText} value={userAnswerText} />
        <TouchableHighlight onPress={() => onSubmitAnswer(userAnswerText)}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
