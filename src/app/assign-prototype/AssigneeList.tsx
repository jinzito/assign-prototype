import React, {useEffect, useRef, useState} from 'react';
import {Toast} from 'primereact/toast';
import {NodeService} from '../service/NodeService';
import {TreeTable, TreeTableEventParams, TreeTableSelectionKeys} from "primereact/treetable";
import {Column} from "primereact/column";
import {SearchInput} from "./SearchInput";
import {InputSwitch} from "primereact/inputswitch";
import {AssigneeListProps} from "./AssignPrototypePage";


const AssigneeList: React.FC<AssigneeListProps> = (
  {
    isDataTree,
    setIsDataTree,
    setHasSelection
  }
) => {
  const [nodes, setNodes] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedNodeKeys3, setSelectedNodeKeys3] = useState<TreeTableSelectionKeys>(null);
  const toast = useRef<Toast>(null);
  const nodeService = new NodeService();

  useEffect(() => {
    setHasSelection(false);
    nodeService.getTreeNodes().then(data => setNodes(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onNodeSelect = (event: TreeTableEventParams) => {
    toast.current?.show({severity: 'success', summary: 'Node Selected', detail: event?.node?.label, life: 3000});
  }

  const onNodeUnselect = (event: TreeTableEventParams) => {
    toast.current?.show({severity: 'success', summary: 'Node Unselected', detail: event?.node?.label, life: 3000});
  }

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
    setSelectedNodeKeys3(e.value);
    setHasSelection(!!e.value)
  }

  return (
    <>
      <Toast ref={toast}/>
      <div className="card">
        <TreeTable
          header={header}
          value={nodes}
          selectionMode="checkbox"
          selectionKeys={selectedNodeKeys3}
          onSelectionChange={onSelectionChange}
          onSelect={onNodeSelect}
          onUnselect={onNodeUnselect}
          resizableColumns columnResizeMode="fit"
        >
          <Column field="name" header="Name" expander sortable style={{width:'60%'}}/>
          <Column field="type" header="Type" sortable style={{width:'40%'}}/>
        </TreeTable>
      </div>
    </>
  )
}

export default AssigneeList;