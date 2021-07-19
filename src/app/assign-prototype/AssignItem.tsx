import React, {useState} from 'react';
import {Fieldset} from "primereact/fieldset";
import map from "lodash/map";

export interface AssignItemProps {
  userName: string;
  userId?: string;
  assignments?: { type: string, id?: string, name?: string }[];
}

export const AssignItem: React.FC<AssignItemProps> = (
  {
    userName = "User Name",
    assignments
  }
) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Fieldset
      legend={userName}
      toggleable
      collapsed={collapsed}
      onToggle={() => setCollapsed(!collapsed)}
      style={{display: "flex", flexFlow: "column", alignItems: "start"}}
    >
      {map(assignments, (({type, name}) => (
        <p key={`assignment-${name}`}>
          {`Assigned to ${type} ${name}`}
        </p>
      )))
      }
    </Fieldset>
  )
}
export default AssignItem;

