import React, {useEffect, useState} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import ProductService from '../service/ProductService';
import {Panel} from "primereact/panel";

const UsersList = () => {
  const [products, setProducts] = useState([]);
  const productService = new ProductService();

  useEffect(() => {
    productService.getProductsSmall().then(data => setProducts(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
      <div>
        <Panel>
          <DataTable value={products} stripedRows>
            <Column field="code" header="Code"/>
            <Column field="name" header="Name"/>
            <Column field="category" header="Category"/>
            <Column field="quantity" header="Quantity"/>
          </DataTable>
        </Panel>
      </div>
  );
}

export default UsersList;