import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import classes from './UserList.module.css'
const UserList = ({ users, setUserList }) => {
	const [error, setError] = useState(false)
	const [isButton, setIsButton] = useState(false)
	const deleteHandler = (e) => {
		setUserList(users.filter((el) => el.id !== e.target.id))
	}
	const errorModal = () => {
		setError({
			title: 'Удаление пользователя !',
			message: 'Вы действительно удалить ?',
		})
		setIsButton(true)
	}
	const addListHandler = () => {
		setError(null)
	}
	return (
		<Card className={classes.users}>
			<ul>
				{users.map((el) => (
					<div>
						{error && (
							<ErrorModal
								title={error.title}
								message={error.message}
								onConfirm={addListHandler}
								isButton={isButton}
								deleteHandler={deleteHandler}
								id={el.id}
							/>
						)}
						<li key={el.id}>
							{el.name} {el.age} years old
							<Button id={el.id} onClick={errorModal}>
								delete
							</Button>
						</li>
					</div>
				))}
			</ul>
		</Card>
	)
}

export default UserList
