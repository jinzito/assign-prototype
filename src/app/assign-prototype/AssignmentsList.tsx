import React from 'react';
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";

const AssignmentsList: React.FC = () => {

  return (
    <div className="card" style={{minHeight: "50vh"}}>
      <DataTable
        resizableColumns
        columnResizeMode="fit"
      >
        <Column field="user" header="User" expander sortable />
        <Column field="role" header="Role" sortable />
        <Column field="object" header="Object" sortable />
      </DataTable>
    </div>
  )
}

export default AssignmentsList;