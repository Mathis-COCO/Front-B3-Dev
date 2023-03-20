import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import '../css/Topnav.css'

function Groups () {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
        const result = await fetch("http://localhost:8080/groups", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        console.log(result, "result");
      const groupsData = await result.json();
      setGroups(groupsData);
    };
    fetchGroups();
  }, []);

  return (
    <div>
      <ul style={{display: "inline-flex"}}>
        {groups.map((group) => (
        <li key={group.id} style={{marginLeft: 100, marginRight: 100}}>
           {group.name}
           <div className="dropdown-content">
              <p><Categories group_id={group.id} /></p>
            </div>
        </li>
        ))}
    </ul>
    </div>
  );
};

export default Groups;
