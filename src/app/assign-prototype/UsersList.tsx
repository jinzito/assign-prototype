import React, {useEffect, useMemo, useRef, useState} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column, ColumnProps} from 'primereact/column';
import ProductService from '../service/ProductService';
import {InputText} from "primereact/inputtext";
import styles from './UsersList.module.css'
import HighLightedSpan from "./HighLightedSpan";
import some from "lodash/some"

const UsersList = () => {
  const [clients, setClients] = useState([]);
  const productService = new ProductService();

  const [selectedClients, setSelectedClients] = useState([]);

  const [globalFilter, setGlobalFilter] = useState('');

  useEffect(() => {
    productService.getClients().then(data => setClients(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const dt = useRef<DataTable>(null);

  const header = (
    <div className={styles.dataTableHeader}>
      <span className="p-input-icon-left">
        <i className="pi pi-search"/>
        <InputText
          type="search"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Global Search"
        />
      </span>
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