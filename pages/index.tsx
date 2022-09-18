import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import * as S from "../styles/style";
import useStore from "../context/useStore";
import { POST_URL } from "../constant/URL";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const router = useRouter();
  const {
    name,
    result,
  }: {
    name: string;
    result: string;
  } = useStore();

  const vote = () => {
    axios.post(POST_URL, { name: name, result: result }).then(() => {
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
      <Head>
        <title>충렬학생의회 본투표</title>
      </Head>
      <S.MainText>충렬학생의회 본투표</S.MainText>

      <S.GoRank href="/result" style={{ marginTop: "30px" }}>
        투표 결과 보기
      </S.GoRank>

      <S.TopBar />
      <S.FormContainer>
        <S.FormElement>
          <S.LoginLabel>이름</S.LoginLabel>
          <S.LoginInput
            type="text"
            placeholder="본인의 이름을 입력해주세요."
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
