import { useState } from "react";
import BabyName from "./BabyName";
import { babyNames, BabyNameProps } from "../babyNamesData";

function MainContent(): JSX.Element {
  const [typedName, setTypedName] = useState("");
  return (
    <>
      <input
        value={typedName}
        onChange={(event) => {
          setTypedName(event.target.value);
        }}
      />
      <div>
        {babyNames
          .filter((val) => {
            if (typedName === "") {
              return val;
            } else if (
              val.name
                .toLocaleLowerCase()
                .includes(typedName.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((nameItem: BabyNameProps) => (
            <BabyName oneName={nameItem} key={nameItem.name} />
          ))}
      </div>
    </>
  );
}

export default MainContent;
