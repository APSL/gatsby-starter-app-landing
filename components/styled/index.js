/* @flow */

import styled, { injectGlobal, css } from 'styled-components';
import { darken, lighten } from 'polished';
import { Link } from 'react-router';
import { Row } from 'hedron';

/*
 * Global Styles
 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Slabo+27px');

  body {
    font-family: 'Avenir Next', serif;
    margin: 0px;
  }

  a {
    color: #F09819;
    &:hover, &:focus, &:visited {
      color: #EDDE5D;
    }
  }
`;

/*
 * Media Queries
 */
const media = {
  tablet: (...args) => css`
    @media (min-width: 420px) {
      ${css(...args)}
    }
  `
};

/*
 * Wrapper
 */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  marginTop: 0px;
`;

/*
 * App info container
 */
export const AppInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
`;

/*
 * Left container
 */
export const AppIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

/*
 * App icon
 */
export const AppIcon = styled.div`
  background:url('./icon.png') no-repeat top left;
  background-size: 120px 120px;
  border: 0;
  height: 120px;
  width: 120px;
`;

/*
 * App title
 */
export const AppTitle = styled.h1`
  font-family: 'Avenir Next';
  font-weight: 600;
  color: white;
  font-size: 48px;
  margin-left: 25px;
`;

/*
 * Title
 */
export const Title = styled.h1`
  font-size: 30px;
  text-decoration: underline;
`;

/*
 * Subtitle
 */
export const Subtitle = styled.h2`
  font-size: 28px;
  margin-top: 25px;
  margin-bottom: 20px;
  color: white;
  font-weight: 400;
  text-align: left;
`;

/*
 * StyledLink
 */
export const StyledLink = styled(Link)`
  color: palevioletred;
  font-size: 18px;
  text-decoration: ${props => props.underline ? 'underline' : 'none'};

  &:hover {
    text-decoration: underline;
  }
`;

/*
 * StyledAnchor
 */
export const StyledAnchor = styled.a`
  color: palevioletred;
  font-size: 18px;
`;

/*
 * Message
 */
export const Message = styled.h2`
  font-size: 27px;
  text-decoration: underline;
`;

/*
 * Button
 */
export const Button = styled.button`
  padding: ${props => props.large ? '16px 48px' : '8px 24px'};
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: black;
  border: 0;
  cursor: pointer;
`;

/*
 * DefaultButton
 */
export const DefaultButton = styled(Button)`
  background-color: lightblue;
  &:hover {
    background: ${darken(0.1, '#add8e6')};
  }
`;

/*
 * PrimaryButton
 */
export const PrimaryButton = styled(Button)`
  background-color: lightseagreen;
  &:hover {
    background: ${darken(0.1, '#20b2aa')};
  }
`;

/*
 * Success
 */
export const SuccessButton = styled(Button)`
  background-color: lightgreen;
  &:hover {
    background: ${darken(0.1, '#90ee90')};
  }
`;

/*
 * Warning
 */
export const WarningButton = styled(Button)`
  background-color: lightsalmon;
  &:hover {
    background: ${darken(0.1, '#ffa07a')};
  }
`;

/*
 * Danger
 */
export const DangerButton = styled(Button)`
  background-color: lightcoral;
  &:hover {
    background: ${darken(0.1, '#f08080')};
  }
`;

/*
 * Input
 */
export const Input = styled.input`
  color: ${props => props.color};
  font-size: 16px;
  padding: ${props => props.large ? '16px 48px' : '8px 24px'};
  border: 2px solid ${props => props.color};
  background: transparent;
`;

/*
 * Text
 */
export const Text = styled.p`
  font-size: ${props => props.fontSize || '16px'};
  ${media.tablet`
    font-size: 20px;
  `}
`;

/*
 * PostLinkContainer
 */
export const PostLinkContainer = styled(Row)`
  border-bottom: 2px solid ${lighten(0.1, '#db7093')};
`;

/*
 * PostLinkTitle
 */
export const PostLinkTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
`;

/*
 * PostLinkDescription
 */
export const PostLinkDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

/*
 * PostTitle
 */
export const PostTitle = styled.h1`
  font-size: 30px;
  text-decoration: underline;
  margin-bottom: 7px;
`;

/*
 * PostBody
 */
export const PostBody = styled.div`
 padding: 0px 50px;
 font-size: 17px;
 ${media.tablet`
   font-size: 20px;
 `}
`;

/*
 * PostDate
 */
export const PostDate = styled.span`
  font-size: 13px;
  font-weight: lighter;
`;

/*
 * From
 */
export const From = styled.div`
  position: fixed;
  bottom: 8px;
  right: 8px;
  font-size: 13px;
  text-align: right;
  color: dimgrey;

  a {
    text-decoration: none;
    font-weight: bolder;
  }

  span {
    color: gainsboro;
  }
`;
