import React, {useEffect, useState} from 'react';
import {Splitter, SplitterPanel} from "primereact/splitter";
import {Fieldset} from "primereact/fieldset";
import AssignItem from "./AssignItem";
import map from "lodash/map"
import isEmpty from "lodash/isEmpty"
import CenteredTree from "./CenteredTree";
import {TreeSelectionKeys} from "primereact/tree";
import {NodeService} from "../service/NodeService";
import RolesTree from "./RolesTree";
import UsersList4 from "./UsersList4";
import AssigneeList4 from "./AssigneeList4";

const existedItems = [
  {
    userName: "Donald Crabtree", userId: "51338-85845", assignments: [
      {type: "Engagement", id: "101", name: "Super 100"},
      {type: "Project", id: "101", name: " Some project namr"},
    ]
  },
  {
    userName: "Carl McKay", userId: "00818-11481", assignments: [
      {type: "User", id: "101", name: "Cris Dove 42343-23421"},
      {type: "Engagement", id: "101", name: "Pepsi UE"},
    ]
  }
];

const AssignPrototypePage4: React.FC = () => {
  useState()
  const [selectedClients, setSelectedClients] = useState([]);
  const [selectedAssignee, setSelectedAssignee] = useState(false);

  const [existedGroup, setExistedGroup] = useState(true);
  const [newGroup, setNewGroup] = useState(true);

  //Roles
  const [roles, setRoles] = useState([]);
  const [selectedRolesKeys, setSelectedRolesKeys] = useState<TreeSelectionKeys>(null);
  const nodeService = new NodeService();

  useEffect(() => {
    nodeService.getRolesTree().then(data => setRoles(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Splitter style={{height:"100%"}} >
      <SplitterPanel size={25} minSize={10}>
        <UsersList4
          selectedClients={selectedClients}
          setSelectedClients={(c) => setSelectedClients(c)}
        />
      </SplitterPanel>

      <SplitterPanel size={20} minSize={10}>
        <RolesTree
          roles={roles}
          selectedRolesKeys={selectedRolesKeys}
          setSelectedRolesKeys={setSelectedRolesKeys}
        />
      </SplitterPanel>

      <SplitterPanel size={35} minSize={10}>
          <AssigneeList4 />
      </SplitterPanel>

      <SplitterPanel size={20} minSize={20}>
        <div style={{display: "flex", flexDirection:"column"}}>
          {selectedAssignee && !isEmpty(selectedClients) &&
          <Fieldset
            legend="New assignment"
            toggleable
            collapsed={newGroup}
            onToggle={() => setNewGroup(!newGroup)}
          >
            <CenteredTree/>
          </Fieldset>}
          {!isEmpty(selectedClients) &&
          <Fieldset
            legend="Existed assignment"
            toggleable
            collapsed={existedGroup}
            onToggle={() => setExistedGroup(!existedGroup)}
          >
            {map(existedItems, (item) =>
              <AssignItem
                key={`assign-item-${item?.userName}`}
                userName={item?.userName}
                assignments={item?.assignments}
              />
            )}
          </Fieldset>}
        </div>
      </SplitterPanel>
    </Splitter>
  )
}

export default AssignPrototypePage4;