import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
    DataGrid,
    GridColDef,
    GridRenderCellParams,
    GridToolbar,
} from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";

interface RowFigureProps {
    id: number;
    title: string;
    date: string;
}

const DataTable = () => {
    const id = Math.floor(Math.random() * 100);
    const [tableData, setTableData] = useState<RowFigureProps[]>([]);

    const handleClick = () => {
        setTableData([...tableData, { id: id, title: "", date: "" }]);
    };

    const handleDeleteClick = (id: any) => {
        console.log("d");
        setTableData(tableData.filter((row) => row.id !== id));
    };

    const columns: GridColDef[] = [
        {   
            field: "title",
            headerName: "Title",
            editable: true,
            width: 130
        },
        {
            field: "date",
            headerName: "Date",
            type: "date",
            editable: true,
            width: 180
        },
        {
            field: "actions",
            headerName: "Actions",
            type: "actions",
            editable: true,
            width: 130,
            renderCell: (params: GridRenderCellParams) => (
                <div>
                    <IconButton
                        aria-label="delete"
                        onClick={() => handleDeleteClick(params.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="edit">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="view">
                        <VisibilityIcon />
                    </IconButton>
                </div>
            ),
        },
    ];

    useEffect(() => {
        fetch("http://localhost:3000/data.json")
            .then((response) => response.json())
            .then((data) => setTableData(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Box sx={{ height: 400, width: 1 }}>
            <div style={{ height: 400, width: "100%" }}>
                <div>
                    <Button onClick={handleClick}>Add Figure</Button>
                </div>
                <DataGrid
                    rows={tableData}
                    columns={columns}
                    editMode="row"
                    pageSize={30}
                    rowsPerPageOptions={[2, 5, 10]}
                    checkboxSelection
                    experimentalFeatures={{ newEditingApi: true }}
                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                    components={{ Toolbar: GridToolbar }}
                    componentsProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}
                />
            </div>
        </Box>
    );
};

export default DataTable;
