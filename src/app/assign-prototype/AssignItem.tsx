import React, {useState} from 'react';
import {Fieldset} from "primereact/fieldset";

export interface AssignItemProps {
  userName: string
  userId?: string
  assignments?: { type: string, id?: string, name?: string }[]
}

export const AssignItem: React.FC<AssignItemProps> = ({userName = "User Name"}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Fieldset
      legend={userName}
      toggleable
      collapsed={collapsed}
      onToggle={() => setCollapsed(!collapsed)}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Fieldset>
  )
}
export default AssignItem;

