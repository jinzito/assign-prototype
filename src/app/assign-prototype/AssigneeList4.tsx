import React, {useEffect, useState} from 'react';
import {Column} from "primereact/column";
import {SearchInput} from "./SearchInput";
import {DataTable} from "primereact/datatable";
import {Dropdown} from "primereact/dropdown";
import {NodeService} from "../service/NodeService";

const businessEntitiesItems = [
  {label: 'Client', value: 'Client'},
  {label: 'Engagement', value: 'Engagement'},
  {label: 'Project', value: 'Project'},
];

const AssigneeList4: React.FC = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    new NodeService().getTreeNodes().then(
      data => {
        setNodes(data)
      }
    );
  }, [selectedType]); // eslint-disable-line react-hooks/exhaustive-deps

  const header = (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <SearchInput
        search={globalFilter}
        setSearch={setGlobalFilter}
        label="Search"
      />
      <div style={{width : "1rem"}}/>
      <Dropdown
        options={businessEntitiesItems}
        placeholder="Select an Entity"
        onChange={(e) => setSelectedType(e.value)}
      />
    </div>
  );

  // const onSelectionChange = (e: any) => {
  //   setSelectedAssignees(e.value);
  // }

  return (
    <div className="card" style={{minHeight: "50vh"}}>
      <DataTable
        header={header}
        selectionMode="checkbox"
        // selectionKeys={selectedAssignees}
        // onSelectionChange={onSelectionChange}
        resizableColumns columnResizeMode="fit"
      >
        <Column field="name" header="Name" expander sortable style={{width: '60%'}}/>
        <Column field="type" header="Type" sortable style={{width: '40%'}}/>
      </DataTable>
    </div>
  )
}

export default AssigneeList4;