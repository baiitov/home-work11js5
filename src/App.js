import AddUser from './components/Users/AddUser'
import { useState } from 'react'
import UserList from './components/Users/UserList'

function App() {
	const [userList, setUserList] = useState([])
	const addUserHandler = (uName, uAge) => {
		setUserList(prevUserList => {
			return [
				...prevUserList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			]
		})
	}
	return (
		<div className='App'>
			<AddUser onAddUser={addUserHandler} />
			<UserList users={userList} setUserList={setUserList}/>
		</div>
	)
}

export default App
