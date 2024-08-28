import { useState, FC } from "react";

export const MyCustomComponent: FC<{
  name: {
    lastName: string;
    firstName: string;
  };
  birthDate: Date
}> = ({ name , birthDate}) => {
  const [myNumber, setMyNumber] = useState<number | undefined>();

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    console.log(e);
  return (
    <div onClick={clickHandler}>
      MyCustomComponent with name {name.firstName}
      <div>the number is {myNumber}</div>
    </div>
  );
};