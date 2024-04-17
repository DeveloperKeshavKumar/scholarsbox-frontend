import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../services/operations/projectAPI';

export default function AllProjects() {
    const dispatch = useDispatch();
    const { allProjects } = useSelector((state) => state.project);

    useEffect(() => {
        dispatch(getAllProjects());
    }, [dispatch]);

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        if (typeof allProjects === 'object') {
            const projectsArray = Object.values(allProjects).flat();
            const rowData = projectsArray.map((project) => (
                {
                    Title: project.title,
                    Description: project.description,
                    Likes: project.likes?.length || 0,
                    Tags: project.tags.join(', '),
                    URL: project.url,
                    _id: project._id,
                }));
            setRowData(rowData);
        }
    }, [allProjects]);

    const columnDefs = useMemo(() => [
        {
            field: 'Title',
            cellRenderer: (params) => {
                const projectId = params.data._id;
                return (
                    <a href={`/projects/${projectId}`} target="_blank" rel="noreferrer noopener">
                        {params.value}
                    </a>
                );
            },
        },
        {
            field: 'Description',
            cellRenderer: (params) => {
                const projectId = params.data._id;
                return (
                    <a href={`/projects/${projectId}`} target="_blank" rel="noreferrer noopener">
                        {params.value}
                    </a>
                );
            },
        },
        {
            field: 'Likes'
        },
        {
            field: 'Tags',
            cellRenderer: (params) => {
                const projectId = params.data._id;
                return (
                    <a href={`/projects/${projectId}`} target="_blank" rel="noreferrer noopener">
                        {params.value}
                    </a>
                );
            },
        },
        {
            field: 'URL'
            ,
            cellRenderer: (params) => {
                return (
                    <a href={params.data.URL} target="_blank" rel="noreferrer noopener">
                        {params.value}
                    </a>
                );
            },
        },
        { field: '_id', hide: true },
    ], []);

    const defaultColDef = useMemo(() => ({
        filter: 'agTextColumnFilter',
        floatingFilter: true,
    }), []);

    const paginationPageSizeSelector = useMemo(() => [5, 10, 15], []);

    return (
        <div className="w-11/12 max-w-5xl mx-auto mt-8 mb-12">
            <div>
                <div style={{ height: "70vh" }} className="ag-theme-quartz">
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        rowSelection="multiple"
                        pagination={true}
                        paginationPageSize={10}
                        paginationPageSizeSelector={paginationPageSizeSelector}
                    />
                </div>
            </div>
        </div>
    );
}
