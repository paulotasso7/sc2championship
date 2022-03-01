import styled from 'styled-components';

const Button = styled.button`

body
  margin: 0
  padding: 0
  width: 100%
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  font-family: Raleway
  background-color: $body-color

.copyright
  position: absolute
  bottom: 0
  
  a
    text-decoration: none
    color: $color2
    
    &:hover
      text-decoration: underline
  
.button
  position: relative
  padding: 1em 1.5em
  border: none
  background-color: transparent
  cursor: pointer
  outline: none
  font-size: 18px
  margin: 1em 0.8em
  
  &.type1
    color: $color1
    // Effect one
    &.type1::after,
    &.type1::before
      content: ''
      display: block
      position: absolute
      width: 20%
      height: 20%
      border: 2px solid
      transition: all 0.6s ease
      border-radius: 2px

    &.type1::after
      bottom: 0
      right: 0
      border-top-color: transparent
      border-left-color: transparent
      border-bottom-color: $color1
      border-right-color: $color1

    &.type1::before
      top: 0
      left: 0
      border-bottom-color: transparent
      border-right-color: transparent
      border-top-color: $color1
      border-left-color: $color1

    &.type1:hover:after,
    &.type1:hover:before
      width: 100%
      height: 100%
`;

export default Button;