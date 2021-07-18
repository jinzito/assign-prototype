import React, {useState} from 'react';
import {Splitter, SplitterPanel} from "primereact/splitter";
import UsersList from "./UsersList";
import {Fieldset} from "primereact/fieldset";
import AssignItem, {AssignItemProps} from "./AssignItem";
import map from "lodash/map"
import CenteredTree from "./CenteredTree";
import AssigneeList2 from "./AssigneeList2";

const AssignPrototypePage: React.FC = () => {
  useState()
  const [existedGroup, setExistedGroup] = useState(false);
  const [existedItems, setExistedItems] = useState<AssignItemProps[]>([
    {
      userName: "Donald Crabtree", userId: "51338-85845", assignments: [
        {type: "Engagement", id: "101", name: "Engagement Super 100"},
        {type: "Engagement", id: "101", name: "Engagement 101"},
      ]
    },
    {
      userName: "Carl McKay", userId: "00818-11481", assignments: [
        {type: "Engagement", id: "101", name: "Engagement Super 100"},
        {type: "Engagement", id: "101", name: "Engagement 101"},
      ]
    }
  ]);
  const [newGroup, setNewGroup] = useState(false);

  return (
    <Splitter>
      <SplitterPanel style={{height: "70vh"}} size={25} minSize={10}>
        <UsersList/>
      </SplitterPanel>
      <SplitterPanel style={{height: "70vh"}} size={40} minSize={20}>
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
        </Fieldset>
        <Fieldset
          legend="New assignment"
          toggleable
          collapsed={newGroup}
          onToggle={() => setNewGroup(!newGroup)}
        >
          <CenteredTree/>
        </Fieldset>
      </SplitterPanel>
      <SplitterPanel style={{height: "70vh"}} size={35} minSize={10}>
        <AssigneeList2/>
      </SplitterPanel>
    </Splitter>
  )
}

export default AssignPrototypePage;