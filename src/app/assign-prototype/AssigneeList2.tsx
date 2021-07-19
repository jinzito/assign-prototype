import React, {useEffect, useRef, useState} from 'react';
import {Toast} from 'primereact/toast';
import {NodeService} from '../service/NodeService';
import {Tree, TreeSelectionKeys} from "primereact/tree";
import styles from "./AssigneeList.module.css"
import {SearchInput} from "./SearchInput";
import {InputSwitch} from "primereact/inputswitch";
import {AssigneeListProps} from "./AssignPrototypePage";


const AssigneeList2: React.FC<AssigneeListProps> = ({isDataTree, setIsDataTree, setHasSelection}) => {
  const [nodes, setNodes] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedKeys3, setSelectedKeys3] = useState<TreeSelectionKeys>(null);
  const toast = useRef<Toast | null>(null);

  useEffect(() => {
    setHasSelection(false);
    new NodeService().getTreeNodes().then(data => setNodes(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onNodeSelect = (node: any) => {
    toast.current?.show({severity: 'success', summary: 'Node Selected', detail: node?.label, life: 3000});
  }

  const onNodeUnselect = (node: any) => {
    toast.current?.show({severity: 'success', summary: 'Node Unselected', detail: node?.label, life: 3000});
  }

  console.log(">", selectedKeys3);

  const header = (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <InputSwitch checked={isDataTree} onChange={() => setIsDataTree(!isDataTree)}/>
      <SearchInput
        search={globalFilter}
        setSearch={setGlobalFilter}
        label="Search"
      />
    </div>
  );
  const onSelectionChange = (e: any) => {
    setSelectedKeys3(e.value);
    setHasSelection(!!e.value)
  }

  return (
    <>
      <Toast ref={toast}/>
      <Tree
        header={header}
        showHeader={true}
        className={styles.container}
        value={nodes}
        selectionMode="checkbox"
        selectionKeys={selectedKeys3}
        onSelectionChange={onSelectionChange}
        onSelect={onNodeSelect}
        onUnselect={onNodeUnselect}
      />
    </>
  )
}

export default AssigneeList2;