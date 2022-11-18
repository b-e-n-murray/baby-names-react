import { BabyNameProps } from "../babyNamesData";

interface OneBabyNameProps {
  oneName: BabyNameProps;
}
function BabyName(props: OneBabyNameProps): JSX.Element {
  let sex = "";
  if (isMale(props.oneName) === true) {
    sex = "male";
  } else if (isMale(props.oneName) === false) {
    sex = "female";
  }
  return <div className={sex}>{props.oneName.name}</div>;
}

function isMale(givenName: { sex: string }): boolean {
  if (givenName.sex === "m") {
    return true;
  } else {
    return false;
  }
}

export default BabyName;
