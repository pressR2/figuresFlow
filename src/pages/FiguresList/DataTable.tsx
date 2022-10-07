import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import NavWrapper from "../../components/NavWrapper/NavWrapper";
import "../Figures/Figures.css";
import "./DataTable.css";

interface RowFigureProps {
    id: number;
    title: string;
    date: string;
}

const DataTable = () => {
    const id = Math.floor(Math.random() * 100);
    const options = ["Actions", "Delete"];

    const [tableData, setTableData] = useState<RowFigureProps[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [pageSize, setPageSize] = React.useState<number>(2);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [arrIds, setArrIds] = useState<number[]>([]);

    //Handle Add Figure
    const handleAddFigureClick = () => {
        setTableData([...tableData, { id: id, title: "", date: "" }]);
    };

    //Handle Delete
    const handleDeleteClick = (id: any) => {
        setTableData(tableData.filter((row) => row.id !== id));
    };

    //Handle Filter
    const handleQueryChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setSearchQuery(e.target.value);
    };

    const filterData = (data: RowFigureProps[]) => {
        return data.filter(
            (item) =>
                item.date.includes(searchQuery) ||
                item.title.includes(searchQuery)
        );
    };

    //Handle Select
    const handleClick = (data: RowFigureProps[]) => {
        if (selectedIndex === 1) {
            setTableData(data.filter((item) => !arrIds.includes(item.id)));
        }
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        if (arrIds.length === 0) {
            setOpen(true);
        }
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    const columns: GridColDef[] = [
        {
            field: "title",
            headerName: "Title",
            editable: true,
            width: 130,
        },
        {
            field: "date",
            headerName: "Date",
            type: "date",
            editable: true,
            width: 180,
        },
        {
            field: "actions",
            headerName: "Actions",
            type: "actions",
            width: 130,
            renderCell: (params: GridRenderCellParams) => (
                <div>
                    <IconButton
                        aria-label="delete"
                        onClick={() => handleDeleteClick(params.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    <IconButton
                        component={Link}
                        to={params.row.id}
                        aria-label="view"
                    >
                        <VisibilityIcon />
                    </IconButton>
                    <IconButton
                        component={Link}
                        to={params.row.id}
                        aria-label="edit"
                    >
                        <EditIcon />
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
        <NavWrapper>
            <div className="figures-list">
                <h2>Figures List</h2>
            </div>
            <Box className="box">
                <div className="grid">
                    <div className="button-container">
                        <div className="action-search-btn">
                            <ButtonGroup
                                className="button-group"
                                disableElevation
                                variant="contained"
                                ref={anchorRef}
                                aria-label="split button"
                            >
                                <Button
                                    className="action-btn"
                                    onClick={() => handleClick(tableData)}
                                >
                                    {options[selectedIndex]}
                                </Button>
                                <Button
                                    className="drop-action-btn"
                                    size="small"
                                    aria-controls={
                                        open ? "split-button-menu" : undefined
                                    }
                                    aria-expanded={open ? "true" : undefined}
                                    aria-label="select merge strategy"
                                    aria-haspopup="menu"
                                    onClick={handleToggle}
                                >
                                    <ArrowDropDownIcon />
                                </Button>
                            </ButtonGroup>
                            <Popper
                                style={{
                                    zIndex: "1",
                                }}
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === "bottom"
                                                    ? "center top"
                                                    : "center bottom",
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener
                                                onClickAway={handleClose}
                                            >
                                                <MenuList
                                                    id="split-button-menu"
                                                    autoFocusItem
                                                >
                                                    {options.map(
                                                        (option, index) => (
                                                            <MenuItem
                                                                key={option}
                                                                disabled={
                                                                    index === 2
                                                                }
                                                                selected={
                                                                    index ===
                                                                    selectedIndex
                                                                }
                                                                onClick={(
                                                                    event
                                                                ) =>
                                                                    handleMenuItemClick(
                                                                        event,
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                {option}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                            <input
                                placeholder="Search"
                                value={searchQuery}
                                onChange={handleQueryChange}
                            />
                        </div>
                        <Button
                            className="add-figure-btn"
                            onClick={handleAddFigureClick}
                        >
                            Add Figure
                        </Button>
                    </div>
                    <DataGrid
                        rows={filterData(tableData)}
                        columns={columns}
                        editMode="row"
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) =>
                            setPageSize(newPageSize)
                        }
                        rowsPerPageOptions={[2, 10, 20]}
                        pagination
                        {...tableData}
                        checkboxSelection
                        disableSelectionOnClick
                        onSelectionModelChange={(id: any) => {
                            setArrIds(id);
                        }}
                        experimentalFeatures={{ newEditingApi: true }}
                    />
                </div>
            </Box>
        </NavWrapper>
    );
};

export default DataTable;