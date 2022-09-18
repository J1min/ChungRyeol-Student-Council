import React from "react";
import type { NextPage } from "next";
import axios from "axios";
import {
  DELETE_URL,
  GET_URL,
  ADMIN_PASSWORD,
  GET_VOTE_URL,
} from "../../constant/URL";
import * as S from "../../styles/style";
import { useRouter } from "next/router";
import Head from "next/head";

type Student = {
  name: string;
  result: string;
};

const Result: NextPage = () => {
  const [result, setResult] = React.useState<Student[]>();
  const [password, setPassword] = React.useState<string>("");

  const [agree, setAgree] = React.useState<number>(0);
  const [disAgree, setDisAgree] = React.useState<number>(0);

  const router = useRouter();

  const refresh = () => {
    if (password !== ADMIN_PASSWORD) {
      alert("비밀번호가 틀렸습니다.");
      return;
    }
    axios.delete(DELETE_URL).then((res) => {
      alert("모든 투표결과를 삭제했습니다.");
      router.reload();
    });
  };

  React.useEffect(() => {
    axios.get(GET_URL).then((res) => {
      setResult(res.data.result);

      console.log(res.data.result);
    });
  }, []);

  React.useEffect(() => {
    axios.get(GET_VOTE_URL).then((res) => {
      setAgree(parseInt(res.data[0])); // 찬성
      setDisAgree(parseInt(res.data[1])); // 반대
    });
  }, []);

  return (
    <>
      <Head>
        <title>투표 결과</title>
      </Head>
      <S.StyledUl>
        <S.StyledLi>찬성 : {agree}</S.StyledLi>
        <S.StyledLi>반대 : {disAgree}</S.StyledLi>
      </S.StyledUl>

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
      <S.LoginInput
        style={{ margin: "30px auto", width: "200px" }}
        type="password"
        placeholder="관리자 비밀번호"
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
        required
      />
      <S.LoginButton onClick={refresh} style={{ width: "100px" }}>
        초기화
      </S.LoginButton>
    </>
  );
};

export default Result;
