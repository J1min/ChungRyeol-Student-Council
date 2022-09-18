import React from "react";
import type { NextPage } from "next";
import axios from "axios";
import { DELETE_URL, GET_URL, ADMIN_PASSWORD } from "../../constant/URL";
import * as S from "../../styles/style";

type Student = {
  name: string;
  result: string;
};

const Result: NextPage = () => {
  const [result, setResult] = React.useState<Student[]>();
  const [password, setPassword] = React.useState<string>("");

  const refresh = () => {
    if (password !== ADMIN_PASSWORD) {
      alert("비밀번호가 틀렸습니다.");
      return;
    }
    axios.delete(DELETE_URL).then((res) => {
      alert("모든 투표결과를 삭제했습니다.");
    });
  };

  React.useEffect(() => {
    axios.get(GET_URL).then((res) => {
      setResult(res.data.result);
      console.log(res.data.result);
    });
  }, []);
  return (
    <>
      <S.LoginInput
        style={{ margin: "30px auto" }}
        type="password"
        placeholder="관리자 비밀번호를 입력해주세요."
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
        required
      />
      <S.LoginButton onClick={refresh} style={{ width: "100px" }}>
        초기화
      </S.LoginButton>
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
          </S.StyledUl>
        );
      })}
    </>
  );
};

export default Result;
