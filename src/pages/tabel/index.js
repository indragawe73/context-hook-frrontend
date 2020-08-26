import React, { useContext, useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom'

import MainNavigation from './../../components/Navigation/MainNavigation';
import { Store } from '../../store/Store';

import './Tabel.css';

import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import { dataTable } from './dataTable';

import ReactHTMLTableToExcel from 'react-html-table-to-excel';
// import Dropzone from 'react-dropzone';
import {useDropzone} from 'react-dropzone'
import Papa from 'papaparse';

// const data = dataTable;

const Tabel = (props) => {

  const { state } = useContext(Store);
  const listNo = props.match.params.id
  const dataList = state.peopleList[listNo]

  const [listPeople, setListPeople] = useState([]);

  useEffect (() => {
    setListPeople(dataTable)
  }, [])

  useEffect (() => {
    console.log('listPeople', listPeople)
    try{
      document.querySelector('table.pvtUi').id = 'table-to-xls';
    } catch {}
  }, [listPeople])

  const onDrop = useCallback(files => {
    Papa.parse(files[0], {
        skipEmptyLines: true,
        error: e => alert(e),
        complete: parsed => {

            setListPeople(parsed.data)
            console.log('xxxxxxxxxxxxxxxxxx', parsed.data)
           
        }
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


  return (
    <div>
      <MainNavigation logo="SWAPI" imageLogo={false} type="2"/>
      <div className="list_area">
        <div className="wrap_list">


        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>

          {/*<Dropzone
              onDrop={onDrop}
              accept="text/csv"
              className="dropzone"
              activeClassName="dropzoneActive"
              rejectClassName="dropzoneReject"
          >
              <p>
                  Drop a CSV file here, or click to choose a file
                  from your computer.
              </p>
          </Dropzone>*/}
          <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>

          <PivotTableUI
              data={listPeople}
              onChange={s => setListPeople(s)}
              {...listPeople}
          />


        </div>
      </div>
    </div>
  );
};

export default Tabel;
