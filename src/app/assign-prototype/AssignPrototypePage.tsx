import React from 'react';
import {Splitter, SplitterPanel} from "primereact/splitter";
import UsersList from "./UsersList";


const AssignPrototypePage: React.FC = () => {
  return (
    <Splitter >
      <SplitterPanel size={35} minSize={10}>
        <UsersList/>
      </SplitterPanel>
      <SplitterPanel size={30} minSize={20}>
          Panel 2
      </SplitterPanel>
      <SplitterPanel size={35} minSize={10}>
          Panel 1
      </SplitterPanel>
  </Splitter>
  )
}

export default AssignPrototypePage;