import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import '../css/Topnav.css'

function Groups ({page = null}) {
  const [groups, setGroups] = useState([]);
  const [selectCurrentCategory, SetSelectCurrentCategory] = useState(null)

  function handleSelectGroup(id){
    console.log(id)
    SetSelectCurrentCategory(id)
  }

  useEffect(() => {
    const fetchGroups = async () => {
        const result = await fetch("http://172.16.70.217:8081/groups", {
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
      
      {page ? (
      <div>
      <select className='log-reg-input' name="categorie">
        {groups.map((group) => (
          <option key={group.id} style={{marginLeft: 100, marginRight: 100}} value={group.name} onClick={()=>handleSelectGroup(group.id)}>
            {group.name}
          </option>
        ))}
      </select>
      { selectCurrentCategory != null &&
        <Categories key={selectCurrentCategory} group_id={selectCurrentCategory} />
      }
      </div>
      ) : ( 
        //tu peux modifier
      <ul style={{display: "inline-flex"}}>
        {groups.map((group) => (
          <li className='filter-name' key={group.id} style={{marginLeft: 100, marginRight: 100}}>
            {group.name}
            <div>
              <p className='dropdown-content'><Categories key={group.id} group_id={group.id} page='noSelect'/></p>
            </div>
          </li>
          ))}
      </ul>
      //
      )}  
    </div>
  );
};

export default Groups;
