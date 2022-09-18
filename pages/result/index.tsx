import React from "react";
import type { NextPage } from "next";
import axios from "axios";
import { GET_URL } from "../../constant/URL";
import * as S from "../../styles/style";

type Student = {
  name: string;
  result: string;
};

const Result: NextPage = () => {
  const [result, setResult] = React.useState<Student[]>();

  React.useEffect(() => {
    axios.get(GET_URL).then((res) => {
      setResult(res.data.result);
      console.log(res.data.result);
    });
  }, []);
  return (
    <>
      {result?.map((data, idx) => {
        return (
          <S.StyledUl key={idx}>
            <S.StyledLi
              style={
                data.result === "찬성"
                  ? { color: "blue" }
                  : data.result === "반대"
                  ? { color: "red" }
                  : { color: "black" }
              }
            >
              {data.name}
            </S.StyledLi>
            <S.StyledLi>{data.result}</S.StyledLi>
          </S.StyledUl>
        );
      })}
    </>
  );
};

export default Result;
