import React from "react";
import { useState } from "react";

const ListRender = () => {
  const [lista] = useState(["Franquilei", "Kevin", "Natã", "Renan", "Gregory"]);

  const [users] = useState([
    {
      id: 1,
      name: "Jesus",
      number: 33,
    },
    {
      id: 9,
      name: "Papai do Chão",
      number: 666,
    },
    {
      id: 10,
      name: "Ronaldo",
      number: 10,
    },
  ]);

  return (
    <div>
      {/* Lista com index de chave */}
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
      {/* //Lista com id de chave */}
      
        {users.map((user) => (
          // console.log(user);
          <h2 key={user.id}> O nome é {user.name}, e seu número é {user.number}</h2>
        ))}
      
    </div>
  );
};

export default ListRender;
