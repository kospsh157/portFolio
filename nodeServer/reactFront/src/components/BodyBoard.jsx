import { useEffect, useState, useRef } from 'react';
import BodyStyled from './BodyStyled.jsx';
import fetchFunc from './fetch.js';
import styled from 'styled-components';
import { Button, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StickyDiv from './customTags/StickyDiv.jsx';


// WriteButtonFunc
const writeButtonFunc = () => {
    const name = document.getElementById('name').value;
    const content = document.getElementById('content').value;
    const pass = document.getElementById('pass').value;
    
    // First at all, have to check validation.
    console.log(content, name, pass);

    const checkContent = /^[가-힣a-zA-Z0-9.@_-\s]{4,300}$/; 
    const checkNamePass = /^[가-힣a-zA-z0-9.@_-]{4,16}$/;

    console.log(!checkContent.test(content));
    console.log(!checkNamePass.test(name));
    console.log(!checkNamePass.test(pass));

    // if(!checkContent.test(content) && !checkNamePass.test(name) && !checkNamePass.test(pass)) {
    //   console.log('false');
    // }else{
    //   console.log('true');
    // }
}

// StyledComponent, can be empty, this means nothing special to add.
const BodyBoardStyled = styled(BodyStyled)`
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
        margin: '0 0 3rem 0'
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
    },
    button: {
        fontSize: '1.5rem',
        color: 'black',
    },
    inputErr: {
        fontSize: '1.5rem',
        color: 'red'
    },
    input: {
        fontSize: '1.3rem',
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
            <Paper className = {classes.table} >
            <TableContainer>
                <Table aria-label="simple table">
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

                    <TableBody>
                        <TableRow>
                            <TableCell> 
                                <Input id = 'content' classes = {{input: classes.input}} placeholder = 'Write here' 
                                fullWidth = {true} multiline = {true} required /> 
                            </TableCell>
                            <TableCell> 
                                <Input id = 'name' classes = {{input: classes.input}} placeholder = 'Name' required />
                            </TableCell>
                            <TableCell> 
                                <Input id = 'pass' classes = {{input: classes.input}} placeholder = 'Password' 
                                type = 'password' required /> 
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell> 
                                <Input classes = {{root: classes.inputErr}} multiline = {true} 
                                defaultValue = 'Only alphabets and numbers underscore, dash, and at can be used
                                You can enter 4 to 300 characters for the content, and 4 to 16 characters for the name and password.'  
                                error disableUnderline = {true} fullWidth = {true} readOnly/> 
                            </TableCell>
                            <TableCell> </TableCell>
                            <TableCell> 
                                <Button fullWidth = {true} classes = {{text: classes.button}}
                                    onClick = { () => writeButtonFunc()}
                                >Write</Button> 
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
                 


            <TablePagination
                rowsPerPageOptions = {[5, 10, 25]}
                component = 'label'
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
            </Paper>
        </BodyBoardStyled>
    );
}

export default BodyBoard;