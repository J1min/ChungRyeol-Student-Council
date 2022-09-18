import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import * as S from "../styles/style";
import useStore from "../context/useStore";
import { POST_URL } from "../constant/URL";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const router = useRouter();
  const {
    name,
    result,
  }: {
    name: string;
    result: string;
  } = useStore();

  const vote = async () => {
    await axios.post(POST_URL, { name: name, result: result }).then((res) => {
      router.push("/result");
    });
  };

  return (
    <S.Container>
      <Form />
      <S.LoginButton onClick={vote}>투표하기</S.LoginButton>
    </S.Container>
  );
};

const Form: NextPage = () => {
  const {
    setName,
    setResult,
  }: {
    setName: any;
    setResult: any;
  } = useStore();

  return (
    <>
      <S.MainText>충렬학생의회 본투표</S.MainText>
      <S.GoRank href="/rank" style={{ marginTop: "30px" }}>
        충렬학생의회 직급 확인
      </S.GoRank>
      <S.GoRank href="/result" style={{ marginTop: "10px" }}>
        투표 결과 보기
      </S.GoRank>

      <S.TopBar />
      <S.FormContainer>
        <S.FormElement>
          <S.LoginLabel>직급</S.LoginLabel>
          <S.LoginInput
            type="text"
            placeholder="본인의 직급을 입력해주세요."
            onChange={(e: any) => {
              setName(e.target.value);
            }}
            required
          />
        </S.FormElement>
        <S.FormElement>
          <S.LoginLabel>찬성 / 반대</S.LoginLabel>
          <S.LoginInput
            type="text"
            placeholder="찬성 / 반대를 직접 입력해주세요."
            onChange={(e: any) => {
              setResult(e.target.value);
            }}
            required
          />
        </S.FormElement>
      </S.FormContainer>
    </>
  );
};

export default Home;
