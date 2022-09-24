import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import * as S from "../styles/style";
import useStore from "../context/useStore";
import type { NextPage } from "next";
import Head from "next/head";
import { POST_URL } from "../constant/url";
import { ADMIN_VOTE_PASSWORD } from "../constant/password";

const Home: NextPage = () => {
  const router = useRouter();
  const [isVote, setIsVote] = React.useState<boolean>(false);
  const {
    name,
    result,
    votePassword,
  }: {
    name: string;
    result: string;
    votePassword: string;
  } = useStore();

  const vote = (
    isVote: boolean,
    name: string,
    result: string,
    votePassword: string
  ) => {
    if (!isVote) {
      if (name === "") {
        alert("이름은 공백일 수 없습니다.");
        return;
      }
      if (votePassword !== ADMIN_VOTE_PASSWORD) {
        alert("투표 비밀번호가 일치하지 않습니다.");
        return;
      }
      if (result === "찬성" || result === "반대" || result === "기권") {
        axios.post(POST_URL, { name: name, result: result }).then(() => {
          router.push("/result");
        });
        return;
      } else {
        alert("찬성 / 반대 / 기권을 제대로 입력해주세요.");
        return;
      }
    } else {
      alert("투표 결과에 반영중입니다. 조금만 기다려주세요.");
      return;
    }
  };

  return (
    <S.Container>
      <Form />
      <S.LoginButton
        onClick={() => {
          vote(isVote, name, result, votePassword);
        }}
      >
        투표하기
      </S.LoginButton>
      <p style={{ color: "black", textAlign: "center" }}>
        Copyright © 2022 BSSM{" "}
        <a href="https://github.com/J1min/ChungRyeol-Student-Council">J1min</a>{" "}
        All rights reserved.
      </p>
    </S.Container>
  );
};

const Form: NextPage = () => {
  const {
    setName,
    setResult,
    setVotePassword,
  }: {
    setName: any;
    setResult: any;
    setVotePassword: any;
  } = useStore();

  return (
    <>
      <Head>
        <title>충렬학생의회 본회의</title>
      </Head>
      <S.MainText>충렬학생의회 본회의</S.MainText>

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
            placeholder="찬성 / 반대 / 기권을 직접 입력해주세요."
            onChange={(e: any) => {
              setResult(e.target.value);
            }}
            required
          />
        </S.FormElement>
        <S.FormElement>
          <S.LoginLabel>투표 비밀번호</S.LoginLabel>
          <S.LoginInput
            type="text"
            placeholder="진행자가 알려준 비밀번호를 입력하세요."
            onChange={(e: any) => {
              setVotePassword(e.target.value);
            }}
            required
          />
        </S.FormElement>
      </S.FormContainer>
    </>
  );
};

export default Home;
