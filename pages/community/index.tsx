import { useState } from "react";

const Community = () => {
  console.log("COMMUNITY COMPONENT -_ PAGES ROUTER");
  const [title, setTitle] = useState<string>("Hello");
  return (
    <div>
      Community{" "}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        Press ME
      </button>
    </div>
  );
};

export default Community;
