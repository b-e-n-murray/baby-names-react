import BabyName from "./BabyName";
import { babyNames, BabyNameProps } from "../babyNamesData";

export function MainContent(): JSX.Element {
  return (
    <div>
      {babyNames.map((nameItem: BabyNameProps) => (
        <BabyName oneName={nameItem} key={nameItem.name} />
      ))}
    </div>
  );
}

export default MainContent;
