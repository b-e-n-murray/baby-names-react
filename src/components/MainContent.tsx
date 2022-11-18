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
          .filter((val) => {
            //filter through the array of objects containing id, name, sex
            //val denotes a single object of this array - works as an iterator?
            if (typedName === "") {
              return val;
              //if the current render has an empty search bar i.e. no user input in the search bar,
              //return this object in the new filtered array of objects
              //every name will be shown
            } else if (
              val.name.toLowerCase().includes(typedName.toLowerCase())
            ) {
              return val;
              //if the name value of this single object matches the input when both are l-case,
              //return this object to the new filtered array
              //only matching objects will be featured in the new obj array
            }
          })
          .map((filteredBabyData: BabyNameProps) => (
            //we are now mapping over our new filtered array of objects
            //filteredBabyData denotes a single object that passed the filter test and made the new array
            <BabyName oneName={filteredBabyData} key={filteredBabyData.name} />
            //Take the BabyName component (which returns a single name)
            //Create another new array where each object is passed into the BabyName component
            //This will mean that only the name is returned from each object
            // This new array gets rendered onto the screen
          ))}
      </div>
    </>
  );
}

export default MainContent;
