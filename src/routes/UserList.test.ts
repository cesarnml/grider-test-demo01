import { render, screen } from '@testing-library/svelte'
import UserList from './UserList.svelte'

test('it renders one row per user', () => {
	const testUsers = [
		{
			name: 'Cesar',
			email: 'cmejai@email.com',
		},
		{
			name: 'Jane',
			email: 'jane@email.com',
		},
	]

	const { container } = render(UserList, { props: { users: testUsers } })

	const rows = container.querySelectorAll('tbody tr')

	expect(rows).toHaveLength(testUsers.length)
})

test('render the email and name of each user', async () => {
	const testUsers = [
		{
			name: 'Cesar',
			email: 'cmejai@email.com',
		},
		{
			name: 'Jane',
			email: 'jane@email.com',
		},
	]

	render(UserList, { props: { users: testUsers } })

	testUsers.forEach((user) => {
		const nameCell = screen.getByRole('cell', { name: new RegExp(user.name) })
		const emailCell = screen.getByRole('cell', { name: new RegExp(user.email) })
		expect(nameCell).toHaveTextContent(user.name)
		expect(emailCell).toHaveTextContent(user.email)
	})
})
