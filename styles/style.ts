import styled, { css } from "styled-components";
import theme from "./theme";
import { color } from "./color";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
`;

export const StyledLi = styled.p`
  list-style: none;
  text-align: center;
  font-size: 50px;
`;

export const StyledUl = styled.ul`
  display: flex;
  width: 500px;
  margin: 40px auto;
  justify-content: space-around;
  padding: 0;
`;

export const LoginInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 300px;

  height: 10px;
  margin: 10px 0;
  padding: 20px 20px;
  border-radius: 8px;
  border: 1px solid ${color.main};
  &::placeholder {
    font-size: 16px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormElement = styled.div`
  display: block;
`;

export const LoginLabel = styled.label`
  font-size: 18px;
  display: block;
  font-weight: 700;
  color: ${color.main};
`;

export const DisabledLoginButton = styled.button`
  background-color: ${color.darkGrey};
  width: 300px;

  height: 54px;
  display: block;
  color: ${color.black};
  border: 0;
  border-radius: 8px;
  margin: 36px auto;
  box-sizing: border-box;
  transition: 0.3s;
`;

export const LoginButton = styled(DisabledLoginButton)`
  background-color: ${color.main};
  &:hover {
    background-color: ${color.lightMain};
    transition: 0.3s;
  }
`;

export const TopBar = styled.hr`
  display: block;
  width: 15%;
  height: 5px;
  background-color: ${color.main};
  margin: 36px auto;
  border: 0;
`;

export const MainText = styled.span`
  text-align: center;
  display: block;
  color: ${color.main};
  transition: 0.3s;
  font-size: 32px;
`;

export const GoRank = styled.a`
  text-align: center;
  display: block;
  color: ${color.main};
  transition: 0.3s;
  font-size: 18px;

  &:hover {
    transition: 0.3s;
    text-decoration: underline;
  }
`;

export const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;
