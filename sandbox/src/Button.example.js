/* global React, placeable, styleable, fixed, render, css */

const StyleableButton = styleable.button`
  font-size: 16px;
  border-radius: 5px;
  padding: 0.25em 1em;
  margin: 1em 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Styled = placeable(StyleableButton)`
  color: green;
`;

const PlaceableButton = placeable.button`
  font-size: 16px;
  border-radius: 5px;
  padding: 0.25em 1em;
  margin: 1em 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Composed = placeable(PlaceableButton)`
  color: green;
`;

const content = [<Styled>Should be Green</Styled>, <Composed >Should Red Red</Composed>];
// const content = [<Composed >Should Red Red</Composed>];

render(content);
