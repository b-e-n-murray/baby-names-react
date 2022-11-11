import { useState } from "react";

function userInput(): JSX.Element {
    const [typedName, setTypedName] = useState("");
    return (
      <>
       <input
          value={typedName}
          onChange={(event) => {
            setTypedName(event.target.value);
          }}
          />
        </>
    )
}

export default userInput