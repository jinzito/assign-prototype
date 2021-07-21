import React, {useState} from 'react';
import {OrganizationChart, OrganizationChartNodeData} from 'primereact/organizationchart';
import './AssignmentsOrgChart.css';
import {ScrollPanel} from "primereact/scrollpanel";

interface AssignmentsOrgChartProps {
  data?:OrganizationChartNodeData[]
}

const AssignmentsOrgChart: React.FC<AssignmentsOrgChartProps> = ({data}) => {

  const [selection, setSelection] = useState([]);

  const nodeTemplate = (node: any) => {
    if (node.type === "person") {
      return (
        <div>
          <div className="node-header">{node.label}</div>
          <div className="node-content">
            <div>{node.data.name}</div>
          </div>
        </div>
      );
    }

    if (node.type === "department") {
      return node.label;
    }
  }

  return (
    <div className="organizationchart-demo">
      <ScrollPanel style={{maxWidth: '50vw', width: '100%'}}>
        <div className="card">
          <OrganizationChart
            value={data}
            nodeTemplate={nodeTemplate}
            selection={selection}
            selectionMode="multiple"
          />
        </div>
      </ScrollPanel>
    </div>
  )
}

export default AssignmentsOrgChart;