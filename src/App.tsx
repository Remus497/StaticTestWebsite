import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  return (
    <main>
      skibidi
      <br />
      <a href = "https://www.youtube.com/watch?v=uhA1hmIuFPk">
        Test Link
      </a>
      <br />
      <div>
        <form action="/action_page.php">
          <label for="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" value="John"><br />
          <label for="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" value="Doe"><br /><br />
          <input type="submit" value="Submit">
        </form> 
      </div>
    </main>
  );
}

export default App;
