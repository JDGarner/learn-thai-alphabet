import React, { Component } from "react";
import Question from "./Question";
import tempData from "../../temp-data";
import { ENGLISH, THAI } from "../../constants";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: tempData[0],
      questionType: ENGLISH
    };
  }

  onSubmitAnswer = userAnswerText => {
    console.log(">>> Submit: ", userAnswerText);
    const randomIndex = Math.floor(Math.random() * tempData.length);
    const questionType = Math.random() < 0.5 ? ENGLISH : THAI;

    this.setState({
      question: tempData[randomIndex],
      questionType
    });
    // TODO:
    // check if answer matches userAnswerText matches correctAnswerText
  };

  render() {
    const {
      question: { english, phoentic, thai },
      questionType
    } = this.state;
    const isThaiQuestion = questionType === THAI;

    const givenText = isThaiQuestion ? english : thai;
    // const answerText = isThaiQuestion ? thai : english;

    return (
      <Question givenText={givenText} phonetic={phoentic} onSubmitAnswer={this.onSubmitAnswer} />
    );
  }
}
