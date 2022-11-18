import { useState } from "react";
import BabyName from "./BabyName";
import { babyNames, BabyNameProps } from "../babyNamesData";

function MainContent(): JSX.Element {
  const [typedName, setTypedName] = useState("");
  return (
    <>
      <div className="searchBar">
        <input
          value={typedName}
          onChange={(event) => {
            setTypedName(event.target.value);
          }}
        />
      </div>
      <div className="listedNames">
        {babyNames
          .filter((singleBabyData) => {
            if (typedName === "") {
              return true;
            } else if (
              singleBabyData.name.toLowerCase().includes(typedName.toLowerCase())
            ) {
              return true;
            }
            return false
          })
          .map((filteredBabyData: BabyNameProps) => (
            <BabyName oneName={filteredBabyData} key={filteredBabyData.name} />
          ))}
      </div>
    </>
  );
}

export default MainContent;
