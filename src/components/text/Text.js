import styled from "styled-components";

const decorateText = type => styled.Text`
  font-size: ${props => props.theme[type].fontSize};
  font-weight: ${props => props.theme[type].fontWeight};
`;

export const LargeText = decorateText("large");
export const MediumText = decorateText("medium");
export const SmallText = decorateText("small");

// export const CenteredText = text =>
