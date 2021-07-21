import React, {useState} from 'react';
import {Tree, TreeSelectionKeys} from "primereact/tree";
import styles from "./AssigneeList.module.css"
import {SearchInput} from "./SearchInput";

interface RolesTreeProps {
  roles: never[]
  selectedRolesKeys: TreeSelectionKeys;
  setSelectedRolesKeys: (value: any) => void;
}

const RolesTree: React.FC<RolesTreeProps> = ({roles, selectedRolesKeys, setSelectedRolesKeys}) => {

  const [globalFilter, setGlobalFilter] = useState("");

  const header = (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <SearchInput
        search={globalFilter}
        setSearch={setGlobalFilter}
        label="Search"
      />
    </div>
  );
  const onSelectionChange = (e: any) => {
    setSelectedRolesKeys(e.value)
    console.log(">>e", e);
  }

  return (
    <Tree
      header={header}
      showHeader={true}
      className={styles.container}
      value={roles}
      selectionMode="checkbox"
      selectionKeys={selectedRolesKeys}
      onSelectionChange={onSelectionChange}
    />
  )
}

export default RolesTree;