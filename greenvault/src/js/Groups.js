import React, { useState, useEffect } from "react";

function Groups () {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
        const result = await fetch("http://localhost:8080/groups", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
      const groupsData = await result.json();
      setGroups(groupsData);
    };
    fetchGroups();
  }, []);

  return (
    <div>
      <ul>
        {groups.map((group) => (
        <li key={group.id}>
           {group.name}
        </li>
        ))}
    </ul>
    </div>
  );
};

export default Groups;
