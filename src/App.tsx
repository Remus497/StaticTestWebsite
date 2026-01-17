import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  return (
    <main>
      skibidi
      <br />
      <a href = "https://www.youtube.com/watch?v=uhA1hmIuFPk">
        Test Link
      </a>
      <br />
    </main>
  );
}

export default App;
