import { useEffect, useState, useRef } from 'react';
import BodyStyled from './BodyStyled.jsx';
import fetchFunc from './fetch.js';
import styled from 'styled-components';import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StickyDiv from './customTags/StickyDiv.jsx';

// StyledComponent, can be empty, this means nothing special to add.
const BodyBoardStyled = styled(BodyStyled)`
    /* padding: 7rem 7vw 7rem 7vw; */
`;

// AWS gateway URL.
const url = 'https://zu12qhehj4.execute-api.ca-central-1.amazonaws.com/BoardApiV1';
const options = {
    method: 'GET',
}

// ReceiveData Container for Meterial UI Table.
let rows = [] 

// Injection Data Func
const createRowDatas = (name, now, content, index) => {
    return rows.push({name, now, content, index});
}

// Injection CSS Func for Meterial UI Table.
const useStyles = makeStyles({
    table: {
        backgroundColor: 'rgba(240, 237, 221, 0.4)',
        '& th': {
            fontSize: '2rem',
            fontWeight: 'bold'
        },
        '& td': {
            fontSize: '1.5rem'
        },
    },
    toolbar: {
        '& > :nth-child(n)': {
            fontSize: '1.5rem',
        },
        '& svg': {
            fontSize: '2rem'
        },
    },
    menuItem: {
        fontSize: '1.5rem'
    }
});

// Main Component Func
function BodyBoard() {
    // State for Board Pagination.
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10); // Default RowsPerPage is 10
    
    // State for Data from.
    const [items, setItems] = useState(null);
    
    // Meterial UI CSS Hook.
    const classes =  useStyles();
    
    // Effect Hook for getting data.
    useEffect(() => {
        const promiseData = fetchFunc(url, options);
        promiseData.then((data) => {
        setItems(data.body);
    });
    }, [])

    // Ref Hook
    const board = useRef();

    // API for Meterial UI Table Pagination.
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    // API for Meterial UI Table Pagination.
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

    // Processing of the received data.
    if(!items) {
        return (
            <BodyBoardStyled>
                <h1> Loading... </h1>
            </BodyBoardStyled>
        );
    }else{
        // empty rows
        rows = [];

        // Processing of Sate data
        items
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((obj, index) => {
            let date = '';
            // Delete unnecessary string of Now
            date = obj.now.S.slice(2, 19); 

            return createRowDatas(obj.name.S, date, obj.content.S, index+1);
        });
    }
    
    return (
        <BodyBoardStyled ref = {board}>
            <StickyDiv text = '-Guest Book-' parent = {board} />

            <TableContainer component = {Paper}>
                <Table className = {classes.table} aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            <TableCell >Content</TableCell>
                            <TableCell  align = "right">Name</TableCell>
                            <TableCell  align = "right">Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow key = {row.index}>
                            <TableCell>{row.content}</TableCell>
                            <TableCell align = "right">{row.name}</TableCell>
                            <TableCell align = "right">{row.now}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions = {[5, 10, 25]}
                component = "div"
                count = {items.length}
                rowsPerPage = {rowsPerPage}
                page = {page}
                onPageChange = {handleChangePage}
                onRowsPerPageChange = {handleChangeRowsPerPage}
                classes = {{
                    toolbar: classes.toolbar,
                    menuItem: classes.menuItem,
                }}
            />
        </BodyBoardStyled>
    );
}

export default BodyBoard;