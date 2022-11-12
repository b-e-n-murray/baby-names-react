// import React from "react";
// import { babyNames } from "../babyNamesData";
import { BabyNameProps } from "../babyNamesData";

interface OneBabyNameProps {
  oneName: BabyNameProps;
}
function BabyName(props: OneBabyNameProps): JSX.Element {
  return <div className="name">{props.oneName.name}</div>;
}

export default BabyName;
