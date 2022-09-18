import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
`;
