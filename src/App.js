import styled, { ThemeProvider, css } from "styled-components";
import HeaderSection from "./components/HeaderSection";
import HeaderNavLinks from "./components/HeaderNavLinks";
import HeaderNavBox from "./components/HeaderNavBox";
import { RedButton, YellowButton } from "./components/Buttons";
import Button from "@mui/material/Button";
import ComplexTitle from "./components/ComplexTitle";
import AlternateComplexTitle from "./components/AlternateComplexTitle";
import { Card } from "./components/Card";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import Loader from "./components/Loader";
import Form from "./components/Form";
import List from "./components/List";

const ThemeSection = styled.article`
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
`;

const LogoBox = styled.figure``;
const DerivativeButton = styled(Button)`
  text-transform: lowercase !important;
  text-align: center;
  text-decoration: none;
  border: 1px solid green;
  ${({ largeBtn }) => {
    return largeBtn
      ? css`
          padding: 1.5rem !important;
          font-size: 2rem !important;
        `
      : css`
          padding: 1rem !important;
          font-size: 1rem !important;
        `;
  }}
`;

const BaseTheme = {
  color: "black",
  background: "white",
};

const DarkTheme = {
  color: "white",
  background: "black",
};

function App() {
  const [isBaseTheme, setIsBaseTheme] = useState(false);

  const toggleTheme = () => setIsBaseTheme((prev) => !prev);

  return (
    <div className="App">
      <GlobalStyles />
      <List />
      <Form />
      <Loader />
      <ThemeProvider theme={isBaseTheme ? BaseTheme : DarkTheme}>
        <ThemeSection>
          <h1>Theme Section</h1>
          <p>Theme content</p>
        </ThemeSection>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <HeaderSection>
          <LogoBox>
            <HeaderNavLinks href="/">
              <img
                src="//www.myperfectcv.co.uk/blobimages/sem-mpintl-images/muk/common/images/logo.svg"
                alt="logo"
              />
            </HeaderNavLinks>
          </LogoBox>
          <HeaderNavBox>
            <HeaderNavLinks href="//www.google.com">Google</HeaderNavLinks>
            <HeaderNavLinks href="//www.youtube.com">Youtube</HeaderNavLinks>
          </HeaderNavBox>
        </HeaderSection>
        <RedButton>Click Me</RedButton>
        <YellowButton>Click Me</YellowButton>
        <Button variant="outlined">Outlined</Button>
        <DerivativeButton variant="outlined">Outlined</DerivativeButton>
        <DerivativeButton largeBtn variant="outlined">
          largeBtn Outlined
        </DerivativeButton>
        <DerivativeButton
          variant="outlined"
          as={"a"}
          href="//google.com"
          target="_blank"
        >
          Anchor using as tag
        </DerivativeButton>
        <ComplexTitle />
        <ComplexTitle color="brown" />
        <AlternateComplexTitle />
        <Card />
      </ThemeProvider>
    </div>
  );
}

export default App;
