import React, {useEffect, useMemo, useRef, useState} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column, ColumnProps} from 'primereact/column';
import ProductService from '../service/ProductService';
import styles from './UsersList.module.css'
import HighLightedSpan from "./HighLightedSpan";
import some from "lodash/some"
import {SearchInput} from "./SearchInput";

export interface UsersListProps {
  selectedClients: never[],
  setSelectedClients: (clients: []) => void,

}

const UsersList: React.FC<UsersListProps> = ({selectedClients, setSelectedClients}) => {

  const [clients, setClients] = useState([]);
  const productService = new ProductService();

  const [globalFilter, setGlobalFilter] = useState('');

  useEffect(() => {
    productService.getClients().then(data => setClients(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const dt = useRef<DataTable>(null);

  const header = (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <SearchInput
        search={globalFilter}
        setSearch={setGlobalFilter}
        label="User search"
      />
    </div>
  );

  const renderer = (data: any, props: ColumnProps) => {
    const text: string = data?.[props.field || ""];
    return <HighLightedSpan value={text} highlight={globalFilter} highlightClassName={styles.highlight}/>
  }

  const data: any[] = useMemo(() => {
    return clients.filter(client =>
      !some(selectedClients, {"id": client?.["id"]})
    )
  }, [selectedClients, clients])

  return (
    <DataTable
      scrollable
      scrollHeight="50vh"
      ref={dt}
      header={header}
      globalFilter={globalFilter}
      value={data}
      selection={selectedClients}
      onSelectionChange={e => setSelectedClients(e.value)}
      stripedRows
      dataKey="id"
      frozenValue={selectedClients}
      emptyMessage={(frozen) => frozen ? "No User Selected" : "No clients found"}
    >
      <Column selectionMode="multiple" headerStyle={{width: '3em'}}/>
      <Column field="id" header="id" sortable body={renderer}/>
      <Column field="name" header="Name" sortable body={renderer}/>
    </DataTable>
  );
}

export default UsersList;