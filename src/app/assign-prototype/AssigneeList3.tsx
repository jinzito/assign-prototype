import React, {useState} from 'react';
import {TreeTable, TreeTableSelectionKeys} from "primereact/treetable";
import {Column} from "primereact/column";
import {SearchInput} from "./SearchInput";

interface AssigneeList3Props {
  list: never[],
  selectedAssignees: TreeTableSelectionKeys
  setSelectedAssignees: (value: any) => void
}

const AssigneeList3: React.FC<AssigneeList3Props> = (
  {
    list,
    selectedAssignees,
    setSelectedAssignees
  }
) => {
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
    setSelectedAssignees(e.value);
  }

  return (
    <div className="card">
      <TreeTable
        header={header}
        value={list}
        selectionMode="checkbox"
        selectionKeys={selectedAssignees}
        onSelectionChange={onSelectionChange}
        resizableColumns columnResizeMode="fit"
      >
        <Column field="name" header="Name" expander sortable style={{width: '60%'}}/>
        <Column field="type" header="Type" sortable style={{width: '40%'}}/>
      </TreeTable>
    </div>
  )
}

export default AssigneeList3;