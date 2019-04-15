import React, { Component } from "react";
import Question from "./Question";
import tempData from "../../temp-data";
import QUESTION_TYPES from "../../constants";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // questions: tempData,
      question: tempData[0],
      questionType: QUESTION_TYPES.ENGLISH
    };
  }

  onSubmitAnswer = userAnswerText => {
    console.log(">>> Submit: ", userAnswerText);
    // TODO:
    // check if answer matches userAnswerText matches correctAnswerText
  };

  render() {
    const {
      question: { english, phoentic, thai },
      questionType
    } = this.state;
    const isThaiQuestion = questionType === QUESTION_TYPES.THAI;

    const givenText = isThaiQuestion ? english : thai;
    // const answerText = isThaiQuestion ? thai : english;

    return (
      <Question givenText={givenText} phonetic={phoentic} onSubmitAnswer={this.onSubmitAnswer} />
    );
  }
}
