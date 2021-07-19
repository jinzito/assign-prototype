import styles from "./UsersList.module.css";
import {InputText} from "primereact/inputtext";
import React from "react";

interface SearchInputProps {
  search: string,
  setSearch: (newValue: string) => void,
  label?: string
}

export const SearchInput: React.FC<SearchInputProps> = ({search, setSearch, label}) =>
  <div className={styles.dataTableHeader}>
      <span className="p-input-icon-left">
        <i className="pi pi-search"/>
        <InputText
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={label}
        />
      </span>
  </div>;