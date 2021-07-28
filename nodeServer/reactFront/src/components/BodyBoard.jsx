import { useEffect, useState, useRef } from 'react';
import BodyStyled from './BodyStyled.jsx';
import fetchFunc from './fetch.js';
import styled from 'styled-components';
import { Modal, Button, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StickyDiv from './customTags/StickyDiv.jsx';

// StyledComponent, can be empty, this means nothing special to add.
const BodyBoardStyled = styled(BodyStyled)`
`;

// AWS gateway URL.
const url = 'https://zu12qhehj4.execute-api.ca-central-1.amazonaws.com/BoardApiV1';
const optionsForGet = {
    method: 'GET',
}

// ReceiveData Container for Meterial UI Table.
let rows = [] 

// Injection Data Func.
const createRowDatas = (name, now, content, index) => {
    return rows.push({name, now, content, index});
}

// Injection CSS Func for Meterial UI Table.
const useStyles = makeStyles((theme) => ({
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
        fontSize: '1.3rem'
    },
    inputErr: {
        fontSize: '1.3rem',
        color: 'red',
        margin: '5vh 0 5vh 0',
        padding: '0 5vw 0 5vw',
        textAlign: 'center',
        width: '50vw'
    },
    input: {
        fontSize: '1.3rem',
    },
    inputNamePass: {
        fontSize: '1.3rem',
        textAlign: 'center',
        width: '40vw'
    },
    modalBody: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

// Main Component Func
function BodyBoard() {
    console.log('리렌더링됨');

    // --State-- 
    // Modal states
    const [open, setOpen] = useState(false);

    // State for Board Pagination.
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10); // Default RowsPerPage is 10
    
    // State value for recognizing data of the GuestBook changes.
    const [updateState, setUpdateState] = useState(false);

    // State for Data from.
    const [items, setItems] = useState(null);
    // --State End-- 


    //--Hooks--
    // Effect Hook for getting data.
    useEffect(() => {
        fetchFunc(url, optionsForGet).then((data) => {
            setItems(data.body);
        }).catch(err => console.error(err));
    }, [updateState]);
    
    // Meterial UI CSS Hook.
    const classes =  useStyles();
    
    // Ref Hook.
    const board = useRef();

    // Modal refHook.
    const modalContent = useRef();
    const modalPass = useRef();
    
    //--Hook End--


    // --Funtions--
    // API for Meterial UI Table Pagination.
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // API for Meterial UI Table Pagination.
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

    // Modal On/Off Funcs
    const openModal = (e) => {
        const sibling = e.target.nextSibling;

        const content = e.target.textContent;
        const name = sibling.textContent;
        const time = sibling.nextSibling.textContent;
        
        modalContent.current.innerText = content;
        
        
        
        
        
        setOpen(true);
    };
    
    const closeModal = () => {
        setOpen(false);
    };

    // WriteButtonFunc.
    const writeButtonFunc = async () => {
        // First al all, Have to check validation of inputs
        const name = document.getElementById('name').value;
        const content = document.getElementById('content').value;
        const pass = document.getElementById('pass').value;
        const inputErr = document.getElementById('inputErr');

        // Regex for validation.
        const checkContent = /^[가-힣a-zA-Z0-9.@_-\s]{3,116}$/; 
        const checkNamePass = /^[가-힣a-zA-z0-9.@_-]{3,16}$/;

        // create result of validation array.
        const arrVali = [
            checkContent.test(content),
            checkNamePass.test(name),
            checkNamePass.test(pass),
        ]
        
        // Check validation of inputs.
        let problemInput = '';
        let errString = 'Please Check Again This(These) : ';
        arrVali.map((arr, i) => {
        if(!arr) {
                if(i === 0) {
                    problemInput += ' "Content" ';
                }else if(i === 1) {
                    problemInput += ' "Name" ';
                }else if(i === 2) {
                    problemInput += ' "Password" ';
                }
            }
        });

        if(problemInput) {
            // There are invalidation.
            // Show success string to the front.
            inputErr.value = errString + problemInput;

            // Just Finish Func.
            return;
        }else{
            // All inputs content passed.
            // Creating options for POST.
            const optionsForPost = {
                method: 'POST',
                body: JSON.stringify({
                    content,
                    name,
                    pass
                })
            }

            // async await이 fetchFunc() 함수 내부에 있다
            // 하지만 왜 다시 밖에서 이렇게 async await를 불러줘야하는가?

            // Start API communication to AWS gateway.
            await fetchFunc(url, optionsForPost).then((res) => {
                console.log('쓰기 버튼 누르고 응답이 이제 도착했음.');
                console.log(res);

                // 실패했을 경우  프론트단 작성하지 않음.

            }).catch(err => console.error(err));

            // Show success string to the Front and Finish Func.
            inputErr.value = 'Your post has been uploaded. Check it out at the top';

            // setUpdateState(true);
            updateState === true ? setUpdateState(false) : setUpdateState(true);
            // setState() 이후의 코드는 노드 내부적으로 콜백 큐에 담겨 실행되므로, 순서를 보장되지 않는다. 
            // 확실한건 setState()를 만나면 일단 리렌더링이 먼저다.
            console.log(updateState);

            return 
        }
    }

    // Delete Button Func.
    const deleteButtonFunc = (event) => {
        console.log(event.target);
        return
    }

    // Sort Func.
    const sortFunc = (arr) => {
        // Use Quick Sort. (In Place Style)

        if(arr.length < 2) {
            // Create endpoint for recursive
            return arr;
        }

        // Sort by time in descending order. 
        const pivotInObj = [arr[0].now.S];

        const pivot = [arr[0]]
        const left = [];
        const right = [];

        for (let i = 1; i < arr.length; i++) {
            if(arr[i].now.S > pivotInObj) {
                left.push(arr[i]);
            }else if(arr[i].now.S < pivotInObj) {
                right.push(arr[i]);
            }else{
                pivot.push(arr[i]);
            }
        }
        
        return sortFunc(left).concat(pivot, sortFunc(right));
    }
    // --Funtions End--

    // Processing of the received data.
    if(!items) {
        return (
            <BodyBoardStyled>
                <h1> Loading... </h1>
            </BodyBoardStyled>
        );
    }else{
        // empty rows for insert data to Meterial Table.
        rows = [];
        
        // Processing of Sate data.
        sortFunc(items).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((obj, index) => {
            // Delete unnecessary string of Now.
            let date = '';
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
                        <TableRow hover key = {row.index}>
                            <TableCell onClick = {(e) => openModal(e)} style = {{cursor: 'pointer'}}>{row.content}</TableCell>
                            <TableCell align = "right">{row.name}</TableCell>
                            <TableCell align = "right">{row.now}</TableCell>
                        </TableRow>
                        ))}
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

            {/* Writing Part */}
            <Input id = 'content' type = 'text' classes = {{input: classes.input}} placeholder = 'Write here' 
            fullWidth = {true} multiline = {true} required /> 
            <Input id = 'name' type = 'text' classes = {{input: classes.inputNamePass}} placeholder = 'Name' required />
            <Input id = 'pass' type = 'password' classes = {{input: classes.inputNamePass}} placeholder = 'Password' 
                required /> 
            <Button classes = {{text: classes.inputNamePass}} 
                onClick = {() => writeButtonFunc()}
            >Write</Button> 
            <Input id = 'inputErr' type = 'text' classes = {{root: classes.inputErr}} multiline = {true} 
            defaultValue = 'Only English, numbers, underscore, dash, and at can be used. You can enter 3 to 116 characters for the content, and 3 to 16 characters for the name and password.'  
            error disableUnderline = {true} readOnly/> 

            {/* Modal */}
            <Modal
                open = {open}
                onClose = {closeModal}
                className = {classes.modal}
                keepMounted = {true}
                
                // closeAfterTransition = {true}
            >
                <div className = {classes.modalBody}>
                    <h1>Do you want to delete or edit?</h1>
                    <h2>Content</h2>
                    <Input type = 'text' ref = {modalContent} multiline = {true} fullWidth = {true}/>
                    <h2>Password</h2>
                    <Input type = 'password' ref = {modalPass} fullWidth = {true}/>
                    <Button onClick = {() => console.log('button')}><h2>Update</h2></Button>
                    <Button onClick = {() => console.log('button')}><h2>Delete</h2></Button>
                    <h3 style = {{color: 'red'}}>If you click DELETE, it will be deleted immediately.</h3>
                </div>
            </Modal>
        </BodyBoardStyled>
    );
}

export default BodyBoard;