import React, {useEffect, useState} from 'react';
import {Splitter, SplitterPanel} from "primereact/splitter";
import UsersList from "./UsersList";
import {Fieldset} from "primereact/fieldset";
import map from "lodash/map"
import isEmpty from "lodash/isEmpty"
import RolesTree from "./RolesTree";
import AssignmentsOrgChart from "./AssignmentsOrgChart";
import {TreeSelectionKeys} from "primereact/tree";
import {NodeService} from "../service/NodeService";
import {TreeTableSelectionKeys} from "primereact/treetable";
import AssigneeList3 from "./AssigneeList3";
import {OrganizationChartNodeData} from "primereact/organizationchart";

export interface AssigneeListProps {
  isDataTree: boolean
  setIsDataTree: (value: boolean) => void
  setHasSelection: (value: boolean) => void
}

const data1 = [{
  label: 'Users',
  type: 'person',
  className: 'p-person',
  expanded: false,
  data: {name: 'Donald Crabtree  / Carl McKay'},
}];

const data2 = [{
  label: 'Users',
  type: 'person',
  className: 'p-person',
  expanded: true,
  data: {name: 'Donald Crabtree'},
  children: [
    {
      label: 'Role',
      type: 'person',
      className: 'p-person',
      expanded: true,
      data: {name: 'CEM Admin'},
    },
    {
      label: 'Role',
      type: 'person',
      className: 'p-person',
      expanded: true,
      data: {name: 'ETL User'},
    },
  ]
}];

const data3 = [{
  label: 'Users',
  type: 'person',
  className: 'p-person',
  expanded: true,
  data: {name: 'Donald Crabtree'},
  children: [
    {
      label: 'Role',
      type: 'person',
      className: 'p-person',
      expanded: true,
      data: {name: 'CEM Admin  ETL User'},
      children: [{
        label: 'Client Pepsi Co',
        className: 'department-cfo',
        expanded: true,
        children: [
          {
            label: 'Engagement Pepsi US',
            className: 'department-cfo',
            expanded: true,

          },
          {
            label: 'Engagement Pepsi PL',
            className: 'department-cfo',
            expanded: true,
          }
        ]
      }]
    }
  ]
}];


const AssignPrototypePage3: React.FC = () => {

  const [selectedUsers, setSelectedUsers] = useState([]);

  //Roles
  const [roles, setRoles] = useState([]);
  const [selectedRolesKeys, setSelectedRolesKeys] = useState<TreeSelectionKeys>(null);
  const nodeService = new NodeService();


  //Assignee
  const [assigneeList, setAssigneeList] = useState([]);
  const [selectedAssignees, setSelectedAssignees] = useState<TreeTableSelectionKeys>(null);

  useEffect(() => {
    nodeService.getRolesTree().then(data => setRoles(data));
    nodeService.getTreeNodes().then(data => setAssigneeList(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const userLegend = () => isEmpty(selectedUsers) ? "Select Users" :
    <div>
      {map(selectedUsers, (user) =>
        <div>
          {user["name"] || "unknown"}
        </div>
      )}
    </div>;

  const roleLegend = () => isEmpty(selectedRolesKeys) ? "Select Roles" : "CEM Admin, ETL User";

  const orgChartData: OrganizationChartNodeData[] = isEmpty(selectedUsers) ? [{expanded: false}] :
    isEmpty(selectedRolesKeys) ? data1 :
      isEmpty(selectedAssignees) ? data2 : data3;

  return (
    <Splitter>
      <SplitterPanel size={60} minSize={10}>
        <Fieldset legend={userLegend()} toggleable collapsed={false}>
          <UsersList
            selectedClients={selectedUsers}
            setSelectedClients={(c) => setSelectedUsers(c)}
          />
        </Fieldset>
        <Fieldset legend={roleLegend()} toggleable collapsed={true}>
          <RolesTree
            roles={roles}
            selectedRolesKeys={selectedRolesKeys}
            setSelectedRolesKeys={setSelectedRolesKeys}
          />
        </Fieldset>
        <Fieldset legend="Business Entities" toggleable collapsed={true}>
          <AssigneeList3
            list={assigneeList}
            selectedAssignees={selectedAssignees}
            setSelectedAssignees={setSelectedAssignees}
          />
        </Fieldset>
      </SplitterPanel>
      <SplitterPanel size={40} minSize={10}>
        <AssignmentsOrgChart data={orgChartData}/>
      </SplitterPanel>
    </Splitter>
  )
}

export default AssignPrototypePage3;