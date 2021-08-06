import React, {useState} from 'react';
import {Column} from "primereact/column";
import {SearchInput} from "./SearchInput";
import {DataTable} from "primereact/datatable";
import {Dropdown} from "primereact/dropdown";

const businessEntitiesItems = [
  {label: 'Client', value: 'Client'},
  {label: 'Engagement', value: 'Engagement'},
  {label: 'Project', value: 'Project'},
];

const clientsList = [
  {
    "name": "Pepsi Co - 51338-85845",
    "type": "Client"
  },
  {
    "name": "Microsoft 00818-11481",
    "type": "Client"
  },
  {
    "name": "GM - 51228-11225",
    "type": "Client"
  }

]

const engagementsList = [
  {
    "name": "Super Name 1",
    "type": "Engagement"
  },
  {
    "name": "Pepsi Poland",
    "type": "Engagement"
  }, {
    "name": "X-BOX",
    "type": "Engagement"
  },
  {
    "name": "Office",
    "type": "Engagement"
  },
  {
    "name": "Azure",
    "type": "Engagement"
  },
  {
    "name": "GM A 2019",
    "type": "Engagement"
  },
  {
    "name": "GM RND India 2020",
    "type": "Engagement"
  }


];

const projectsList = [
  {
    "name": "Project1",
    "type": "Project"
  },
  {
    "name": "Project2",
    "type": "Project"
  },
  {
    "name": "Invoices.txt",
    "type": "Project"
  },
  {
    "name": "Project1",
    "type": "Project"
  },
  {
    "name": "Project2",
    "type": "Project"
  },
  {
    "name": "Project1",
    "type": "Project"
  },
  {
    "name": "Project2",
    "type": "Project"
  },
  {
    "name": "Project1",
    "type": "Project"
  },
  {
    "name": "Project2",
    "type": "Project"
  }
];

const AssigneeList4: React.FC = () => {

  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedObjects, setSelectedObjects] = useState([]);

  console.log(">", selectedObjects);

  const data = selectedType === "Client" ? clientsList
    : selectedType === "Engagement" ? engagementsList : selectedType === "Project" ? projectsList : [];

  const header = (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <SearchInput
        search={globalFilter}
        setSearch={setGlobalFilter}
        label="Search"
      />
      <div style={{width: "1rem"}}/>
      <Dropdown
        options={businessEntitiesItems}
        placeholder="Select an Entity"
        onChange={(e) => setSelectedType(e.value)}
      />
    </div>
  );

  return (
    <div className="card" style={{minHeight: "50vh"}}>
      <DataTable
        header={header}
        selectionMode="checkbox"
        selection={selectedObjects}
        // selectionKeys={selectedAssignees}
        // onSelectionChange={onSelectionChange}
        onSelectionChange={e => setSelectedObjects(e.value)}
        resizableColumns columnResizeMode="fit"
        value={data}
        frozenValue={selectedObjects}
      >
        <Column selectionMode="multiple" headerStyle={{width: '3em'}}/>
        <Column field="name" header="Name" sortable style={{width: '60%'}}/>
      </DataTable>
    </div>
  )
}

export default AssigneeList4;