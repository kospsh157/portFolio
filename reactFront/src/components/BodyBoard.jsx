import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import BodyStyled from './BodyStyled.jsx';
import { Modal, Button, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StickyDiv from './customTags/StickyDiv.jsx';
import fetchFunc from './fetch.js';

// --Resources outside of component function.--

// Keys in .env.
const SECRETKEY = process.env.REACT_APP_KEY;
const URL = process.env.REACT_APP_URL;

// StyledComponent, can be empty, this means nothing special to add.
const BodyBoardStyled = styled(BodyStyled)`
`;

// HashFunction module and Func.
const crypto = require('crypto');
const cryptoFunc = (secretKey, password) => {
    return crypto.createHmac('sha256', secretKey).update(password).digest('hex');
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
        padding: theme.spacing(2, 4, 3)
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));


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

    for(let i = 1; i < arr.length; i++) {
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

// Vaildation Func.
const testVali = (content='noArg', name='noArg', pass='noArg') => {
    // Regex for validation.
    const checkContent = /^[가-힣a-zA-Z0-9.,'"`<>():;~!@#$%^&*()_+=/-\s]{4,160}$/; 
    const checkNamePass = /^[가-힣a-zA-z0-9.,':()!?@_-\s]{4,21}$/;

    // Create result of validation array.
    const arrVali = [
        checkContent.test(content),
        checkNamePass.test(name),
        checkNamePass.test(pass),
    ]

    // Check where to invalid
    let invalid = '';
    
    arrVali.map((arr, i) => {
        if(!arr) {
            if(i === 0) {
                invalid += ' "Content" ';
            }else if(i === 1) {
                invalid += ' "Name" ';
            }else if(i === 2) {
                invalid += ' "Password" ';
            }
        }
    });

    return invalid;
}

// --Resources outside of component function END.--




// Main Component Func.
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
        const optionsForGet = {method: 'GET'};
        fetchFunc(URL, optionsForGet).then((data) => {
            setItems(sortFunc(data.body));
        }).catch(err => console.error(err));
    }, [updateState]);
    
    // Meterial UI CSS Hook.
    const classes =  useStyles();
    
    // Ref Hook.
    const board = useRef();
    // Modal refHook.
    const modalContent = useRef();
    const modalPass = useRef();
    const modalErrStr = useRef();
    const hiddenName = useRef();
    const hiddenTime = useRef();
    
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
    
    // API for Meterial UI Modal.
    const openModal = (e) => {
        const content = e.target.innerText;
        const name = e.target.nextSibling;
        const time = name.nextSibling;

        // Filling data to modal.
        modalContent.current.value = content;
        hiddenName.current.value = name.innerText;
        hiddenTime.current.value = time.innerText;

        setOpen(true);
    };
    
    const closeModal = () => {
        modalContent.current.value = '';
        modalPass.current.value = '';
        hiddenName.current.value = '';
        hiddenTime.current.value = '';
        modalErrStr.current.innerText = 'If you click UPDATE, DELETE, it will be worked immediately.';
        setOpen(false);
    };

    // find exactTime in itemsState Func.
    const findTime = (tempTime) => {
        const time = tempTime.split('T')[1]; // Time of table of front.
        let reqTime = '';
        for(let i = 0; i < items.length; i++) {
            /*************************
                If there are duplicate posts with the same name and time (up to seconds), 
                the most recent post is deleted(even if the password is the same too).
                But that will seldom happen.
                It's basically my design fault. If an issue arises, I'll fix it.
            **************************/
            const timeInItems = items[i].now.S.split('T')[1].split('.')[0]; // Time of items.
            if(timeInItems === time) {
                reqTime = items[i].now.S
                break;
            }
        }
        
        return reqTime;
    }

    // AWS error handler
    /*************************
    Assuming that the above-mentioned issue does not occur, 
    the following code is valid.
    If the above issue occurs, even if the user enters the correct password, 
    maybe his/her post will not be deleted.
    **************************/
    const awsErrHandler = (errorType) => {
        switch(errorType) {
            case 'ConditionalCheckFailedException':
                modalPass.current.value = '';
                modalErrStr.current.innerText = 'Please check password again.';
                modalPass.current.focus();
                break;
            case 'LimitExceededException':
                modalPass.current.value = '';
                modalErrStr.current.innerText = 'Sorry, please wait a while and try again.';
                modalPass.current.focus();
                break;
            case 'RequestLimitExceeded':
                modalPass.current.value = '';
                modalErrStr.current.innerText = 'Sorry, the server has exceeded the request limit.';
                modalPass.current.focus();
                break;
            case 'ResourceInUseException':
                modalPass.current.value = '';
                modalErrStr.current.innerText = 'Sorry, The resource is in use. try again.';
                modalPass.current.focus();
                break;
            case 'ResourceNotFoundException':
                modalPass.current.value = '';
                modalErrStr.current.innerText = 'Sorry, Requested resource not found';
                modalPass.current.focus();
                break;
            default: 
                modalPass.current.value = '';
                modalErrStr.current.innerText = 'Oh No..I am very sorry, there are unknown error..';
                modalPass.current.focus();
                break;
        }
    }
    

    // CRUD Funtions(Read funcions is in useEffect Hook.).
    // WriteButtonFunc.
    const writeButtonFunc = async () => {
        // First al all, Have to check validation of inputs
        const name = document.getElementById('name').value;
        const content = document.getElementById('content').value;
        const pass = document.getElementById('$%^%^$%^').value;
        const inputErr = document.getElementById('inputErr');
        
        // test vaildation.
        const invaild = testVali(content, name, pass);
        let errString = 'Please Check Again This(These) : ';

        if(invaild) {
            // There are invalidation.
            // Show success string to the front.
            inputErr.value = errString + invaild;

            // Just Finish Func right now.
            return;
        }else{
            // All inputs content passed.

            // Strating encrypt.
            const encryptedPass = cryptoFunc(SECRETKEY, pass);

            // Creating options for POST.
            const optionsForPost = {
                method: 'POST',
                body: JSON.stringify({
                    pass: encryptedPass,
                    content,
                    name
                })
            }

            // async await이 fetchFunc() 함수 내부에 있다
            // 하지만 왜 다시 밖에서 이렇게 async await를 불러줘야하는가?

            // Start API communication to AWS gateway.
            await fetchFunc(URL, optionsForPost).then((res) => {
                if(res.errorType){
                    // There are AWS API error.
                    inputErr.value = "I'm sorry, there are error in aws server.";

                    return;
                }else{
                    // Writing complete.
                    // Show success string to the Front and Finish Func.
                    inputErr.value = 'Your post has been uploaded. Check it out at the top';
                    // Make empty input
                    document.getElementById('content').value = '';
                    document.getElementById('name').value = '';
                    document.getElementById('$%^%^$%^').value = '';
                    updateState ? setUpdateState(false) : setUpdateState(true);
                    
                    return ;
                } 
            }).catch(err => console.error(err));
        }
    }

    // Delete Button Func.
    const deleteButtonFunc = () => {
        const tempTime = hiddenTime.current.value;
        const name = hiddenName.current.value;
        const pass = modalPass.current.value;
        const modalErr = modalErrStr.current;

        // Check Validation.
        const invalid = testVali(undefined, undefined, pass);
        if(invalid) {
            // There is invalid.
            modalErr.innerText = 'Please check password again.';
            modalPass.current.value = '';
            modalPass.current.focus();

            // Finish Func.
            return;
        }else{
            // There are no invalids.
            // Finded realTime data in Items.
            const reqTime = findTime(tempTime);

            // Strating encrypt.
            const encryptedPass = cryptoFunc(SECRETKEY, pass);

            // Starting AWS API.
            const optionsForDelete = {
                method: 'DELETE',
                body: JSON.stringify({
                    pass: encryptedPass,
                    now: reqTime,
                    name,
                })
            };

            fetchFunc(URL, optionsForDelete).then((res) => {
                if(res.errorType){
                    // There are some error in AWS API.
                    awsErrHandler(res.errorType);
                }else{
                    // Delete complete.
                    document.getElementById('inputErr').value = 'Delete Success!';
                    closeModal();
                    updateState ? setUpdateState(false) : setUpdateState(true);
                }
            }).catch(err => console.error(err));

            return;
        }
    }

    // Update Func.
    const updateButtonFunc = () => {
        const content = modalContent.current.value;
        const pass = modalPass.current.value;
        const tempTime = hiddenTime.current.value;
        const name = hiddenName.current.value;
        const modalErr = modalErrStr.current;
        const errString = 'Please Check Again This(These) : ';
        
        // Check validation.
        const invalid = testVali(content, undefined, pass);
        
        if(invalid) {
            // There are invaild.
            modalPass.current.value = '';
            modalErr.innerText = errString + invalid;

            return;
        }else{
            // Vaildation Passed.
            // Find reqTime.
            const reqTime = findTime(tempTime);

            // Strating encrypt.
            const encryptedPass = cryptoFunc(SECRETKEY, pass);

            // Starting AWS API.
            const optionsForUpdate = {
                method: 'PATCH',
                body: JSON.stringify({
                    pass: encryptedPass,
                    now: reqTime,
                    content,
                    name,
                })
            };

            fetchFunc(URL, optionsForUpdate).then((res) => {
                if(res.errorType) {
                    // There are some error in AWS API.
                    awsErrHandler(res.errorType);
                }else{
                    // Update Complete.
                    document.getElementById('inputErr').value = 'Update Success!';
                    closeModal();
                    updateState ? setUpdateState(false) : setUpdateState(true);
                }
            }).catch(err => console.error(err));

            return;
        }
    }
    // --CRUD Funtions End--
    // --Funtions End--




    // Processing of the received data.
    if(!items) {
        return (
            <BodyBoardStyled>
                <h2 style = {{fontSize: '100%'}}> HOLD YOUR MOUSE! 
                <br />
                LOADING... </h2>
                <img src = '/images/doge.png' 
                        alt = 'Loading' 
                        width = '50%'
                />
            </BodyBoardStyled>
        );
    }else{
        // empty rows for insert data to Meterial Table.
        rows = [];
        
        // Processing of Sate data.
        items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                            <TableCell align = "right">Name</TableCell>
                            <TableCell align = "right">Time</TableCell>
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
            <Input id = 'inputErr' type = 'text' classes = {{root: classes.inputErr}} multiline = {true} 
            defaultValue = "CONTENT: Only English, numbers, special characters, and one space between 4 and 160 characters are allowed. NAME and PASSWORD: Only English, numbers and special characters: , . ' ( ) ! ? @ _ -, one space between 4 and 21 characters are allowed." 
            error disableUnderline = {true} fullWidth = {true} readOnly/> 
            <Input id = 'content' type = 'text' classes = {{input: classes.input}} placeholder = 'Write here' 
            fullWidth = {true} multiline = {true} required /> 
            <Input id = 'name' type = 'text' classes = {{input: classes.inputNamePass}} placeholder = 'Name' required />
            <Input id = '$%^%^$%^' type = 'password' classes = {{input: classes.inputNamePass}} placeholder = 'Password' autoComplete = 'new-password' required/> 
            <Button classes = {{text: classes.inputNamePass}} 
                onClick = {() => writeButtonFunc()}
            >Write</Button> 
            
            {/* Modal */}
            <Modal
                open = {open}
                onClose = {closeModal}
                className = {classes.modal}
                keepMounted = {true}
            >
                {/* Modal Body */}
                <div className = {classes.modalBody}>
                    <h1>Do you want to delete or edit?</h1>
                    <h3 ref = {modalErrStr} style = {{color: 'red'}}>If you click UPDATE, DELETE, it will be worked immediately.</h3>
                    <h2>Content</h2>
                    <Input type = 'text' inputRef = {modalContent} multiline = {true} fullWidth = {true}/>
                    <h2>Password</h2>
                    <Input type = 'password' inputRef = {modalPass} fullWidth = {true} autoComplete = 'new-password'/>
                    <Button onClick = {() => updateButtonFunc()}><h2>Update</h2></Button>
                    <Button onClick = {() => deleteButtonFunc()}><h2>Delete</h2></Button>

                    {/* to get the name and time value */}
                    <input type = 'hidden' ref = {hiddenName} />
                    <input type = 'hidden' ref = {hiddenTime} />   
                </div>
            </Modal>
            <br /><br /><br /><br />
        </BodyBoardStyled>
    );
}

export default BodyBoard;