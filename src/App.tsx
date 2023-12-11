import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState<Array<{ name: string }>>([]);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>users from msw mock api response</div>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
