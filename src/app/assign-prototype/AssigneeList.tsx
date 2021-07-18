import React, {useEffect, useRef, useState} from 'react';
import {Toast} from 'primereact/toast';
import {NodeService} from '../service/NodeService';
import {TreeTable, TreeTableEventParams, TreeTableSelectionKeys} from "primereact/treetable";
import {Column} from "primereact/column";


const AssigneeList = () => {
  const [nodes, setNodes] = useState([]);
  // const [selectedKeys3, setSelectedKeys3] = useState<TreeSelectionKeys>(null);

  const [selectedNodeKeys3, setSelectedNodeKeys3] = useState<TreeTableSelectionKeys>(null);
  const toast = useRef<Toast>(null);
  const nodeService = new NodeService();

  useEffect(() => {
    nodeService.getTreeTableNodes().then(data => setNodes(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onNodeSelect = (event: TreeTableEventParams) => {
    toast.current?.show({severity: 'success', summary: 'Node Selected', detail: event?.node?.label, life: 3000});
  }

  const onNodeUnselect = (event: TreeTableEventParams) => {
    toast.current?.show({severity: 'success', summary: 'Node Unselected', detail: event?.node?.label, life: 3000});
  }

  return (
    <>
      <Toast ref={toast}/>
      <div className="card">
        {/*<Tree*/}
        {/*  className={styles.container}*/}
        {/*  value={nodes}*/}
        {/*  selectionMode="checkbox"*/}
        {/*  selectionKeys={selectedKeys3}*/}
        {/*  onSelectionChange={e => setSelectedKeys3(e.value)}*/}
        {/*  onSelect={onNodeSelect}*/}
        {/*  onUnselect={onNodeUnselect}*/}
        {/*/>*/}
        <TreeTable
          value={nodes}
          selectionMode="checkbox"
          selectionKeys={selectedNodeKeys3}
          onSelectionChange={e => setSelectedNodeKeys3(e.value)}
          onSelect={onNodeSelect}
          onUnselect={onNodeUnselect}
        >
          <Column field="name" header="Name" expander/>
          <Column field="size" header="Size"/>
          <Column field="type" header="Type"/>
        </TreeTable>
      </div>
    </>
  )
}

export default AssigneeList;