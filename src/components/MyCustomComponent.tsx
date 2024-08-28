import { FC, useState } from "react";

export const MyCustomComponent: FC<{ name: string }> = ({ name }) => {
  const [myNumber, setMyNumber] = useState<number | undefined>();

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    console.log(e);
  return (
    <div onClick={clickHandler}>
      MyCustomComponent with name {name}
      <div>the number is {myNumber}</div>
    </div>
  );
};
