import React, { Component } from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import styled from "styled-components";

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

  render() {
    const { givenText, phonetic, onSubmitAnswer } = this.props;
    const { userAnswerText } = this.state;

    return (
      <View>
        {/* in big bold */}
        <Text>{givenText}</Text>
        {/* in small grey */}
        <Text>{phonetic}</Text>
        <TextInput onChangeText={this.onChangeText} value={userAnswerText} />
        <TouchableHighlight onPress={() => onSubmitAnswer(userAnswerText)}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
