import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import useKeyboard from "../../hooks/keyboard";

export default function HideKeyboard({ children }) {
  /* eslint-disable-next-line */
  const [visible, dismiss] = useKeyboard();

  return <TouchableWithoutFeedback onPress={dismiss}>{children}</TouchableWithoutFeedback>;
}
