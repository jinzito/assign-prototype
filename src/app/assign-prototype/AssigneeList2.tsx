import React, {useEffect, useRef, useState} from 'react';
import {Toast} from 'primereact/toast';
import {NodeService} from '../service/NodeService';
import {Tree, TreeSelectionKeys} from "primereact/tree";
import styles from "./AssigneeList.module.css"


const AssigneeList2 = () => {
  const [nodes, setNodes] = useState([]);
  const [selectedKeys3, setSelectedKeys3] = useState<TreeSelectionKeys>(null);
  const toast = useRef<Toast | null>(null);

  useEffect(() => {
    new NodeService().getTreeNodes().then(data => setNodes(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onNodeSelect = (node: any) => {
    toast.current?.show({severity: 'success', summary: 'Node Selected', detail:node?.label, life: 3000});
  }

  const onNodeUnselect = (node: any) => {
    toast.current?.show({severity: 'success', summary: 'Node Unselected', detail: node?.label, life: 3000});
  }

  return (
    <>
      <Toast ref={toast}/>
      <Tree
        className={styles.container}
        value={nodes}
        selectionMode="checkbox"
        selectionKeys={selectedKeys3}
        onSelectionChange={e => setSelectedKeys3(e.value)}
        onSelect={onNodeSelect}
        onUnselect={onNodeUnselect}
      />
    </>
  )
}

export default AssigneeList2;