import React from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'
const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('')
	const [enteredAge, setEnteredAge] = useState('')
	const [error, setError] = useState(false)
	const [invalid, setInvalid] = useState(false)
	
	const usernameChangeHandler = (e) => {
		setEnteredUsername(e.target.value)
	}
	const ageChangeHanlder = (e) => {
		setEnteredAge(e.target.value)
	}
	const submitChangeHandler = (e) => {
		e.preventDefault()
		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0
		) {
			setError({
				title: 'invalid input',
				message: 'Please enter a valid name and age (non-emptu values)',
			})
			setInvalid(true)
			return
		}
		if (+enteredAge < 1) {
			setError({
				title: 'invalid age',
				message: 'Please enter a valid age (>0)',
			})
			setInvalid(true)
			return
		}
		props.onAddUser(enteredUsername, enteredAge)
		setEnteredUsername('')
		setEnteredAge('')
	}
	const errorHandler = () => {
		setError(null)
	}
	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
					invalid={invalid}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={submitChangeHandler}>
					<label htmlFor='username'>Username</label>
					<input
						value={enteredUsername}
						onChange={usernameChangeHandler}
						type='text'
						id='username'
					/>
					<label htmlFor='age'>Age</label>
					<input
						onChange={ageChangeHanlder}
						value={enteredAge}
						type='number'
						id='age'
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</>
	)
}

export default AddUser
