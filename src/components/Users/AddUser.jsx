import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Wrapper from "../UI/Wrapper/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";


        // setEnteredUsername('');
        // setEnteredAge('');
    };

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;

// import React, { useState, useRef } from 'react';

// import Card from '../UI/Card';
// import Button from '../UI/Button';
// import ErrorModal from '../UI/ErrorModal';
// import classes from './AddUser.module.css';
// import Wrapper from "../UI/Wrapper/Wrapper";

// const AddUser = (props) => {
//     const nameInputRef = useRef();
//     const ageInputRef = useRef();
//     const collegeInputRef = useRef();
//     // const [enetredUserName, setEnteredUserName] = useState("");
//     // const [enteredAge, setEnteredAge] = useState("");
//     // const [enterCollege, setEnteredCollege] = useState("");
//     const [error, setError] = useState();
//     const addUserHandler = (event) => {
//         event.preventDefault();

//         const enteredNameRef = nameInputRef.current.value;
//         const enteredAgeRef = ageInputRef.current.value;
//         const enteredCollegeRef = collegeInputRef.current.value;

//         if (
//             enteredNameRef.trim().length === 0 ||
//             enteredAgeRef.trim().length === 0
//         ) {
//             setError({
//                 title: "Invalid Input",
//                 message: "Please eneter a valid name and age (non-Empty values)",
//             });
//             return;
//         }
//         if (+enteredAgeRef < 1) {
//             setError({
//                 title: "Invalid age",
//                 message: "Please eneter a valid  age (>0)",
//             });
//             return;
//         }
//         const userData = {
//             name: enteredNameRef,
//             age: enteredAgeRef,
//             college: enteredCollegeRef,
//             id: Math.random().toString(),
//         };
//         props.onSave(userData);
//         enteredAgeRef.current.value = "";
//         enteredAgeRef.current.value = "";
//         enteredCollegeRef.current.value = "";
//         // setEnteredUserName("");
//         // setEnteredAge("");
//         // setEnteredCollege("");
//     };

//     // const userNameChangeHandler = (event) => {
//     //   setEnteredUserName(event.target.value);
//     // };
//     // const ageChangeHandler = (event) => {
//     //   setEnteredAge(event.target.value);
//     // };
//     // const collegeNameChangeHandler = (event) => {
//     //   setEnteredCollege(event.target.value);
//     // };
//     const errorHandler = () => {
//         setError(null);
//     };
//     return (
//         <Wrapper>
//             {error && (
//                 <ErrorModal
//                     title={error.title}
//                     message={error.message}
//                     onConfirm={errorHandler}
//                 />
//             )}
//             <Card className={classes.input}>
//                 <form onSubmit={addUserHandler}>
//                     <label htmlFor="username">User Name</label>
//                     <input
//                         type="text"
//                         id="username"
//                         ref={nameInputRef}
//                     // value={enetredUserName}
//                     // onChange={userNameChangeHandler}
//                     />
//                     <label htmlFor="age">Age (Years)</label>
//                     <input
//                         type="number"
//                         id="age"
//                         ref={ageInputRef}
//                     // value={enteredAge}
//                     // onChange={ageChangeHandler}
//                     />
//                     <label htmlFor="collegeName">College Name</label>
//                     <input
//                         type="text"
//                         id="collegeName"
//                         ref={collegeInputRef}
//                     // value={enterCollege}
//                     // onChange={collegeNameChangeHandler}
//                     />
//                     <Button type="submit">Add User </Button>
//                 </form>
//             </Card>
//         </Wrapper>
//     );
// };

// export default AddUser;