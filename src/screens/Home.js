import { useForm } from "react-hook-form";
import styled from "styled-components";
import { logoutUser } from "../apollo";
import { Authlayout } from "../components/Authlayout";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { PageTitle } from "../components/PageTitle";
import { Title } from "../components/Title";

const ListWrap = styled.ul`
  width: 100%;
`;

const List = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ListCon = styled.span``;

const ListClick = styled.p``;

export const Home = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = () => {
    console.log(getValues());
  };

  console.log(errors);

  // console.log(isValid);

  return (
    <Authlayout>
      <PageTitle title="해야할일" />
      <Title>해야할 일</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("todolist", {
            required: "내용 입력은 필수입니다",
          })}
          type="text"
          placeholder="일정을 입력해주세요"
        />
        {errors?.todolist?.message}
        <Button opacity={isValid ? "1" : "0.5"} text="일정추가" />
      </Form>
      <ListWrap>
        <List>
          <ListCon></ListCon>
          <ListClick>+</ListClick>
        </List>
      </ListWrap>
      <button onClick={() => logoutUser()}>로그아웃</button>
    </Authlayout>
  );
};
