import { render, screen } from '@testing-library/svelte'
import { vi } from 'vitest'
import user from '@testing-library/user-event'
import AddUserForm from './AddUserForm.svelte'

test('it shows two inputs and a button', () => {
	const mock = vi.fn()
	render(AddUserForm, { props: { addUser: mock } })

	const nameInput = screen.getByRole('textbox', {
		name: /name/i,
	})
	const emailInput = screen.getByRole('textbox', {
		name: /email/i,
	})
	const button = screen.getByRole('button', {
		name: /add/i,
	})

	expect(nameInput).toBeInTheDocument()
	expect(emailInput).toBeInTheDocument()
	expect(button).toBeInTheDocument()
})

test('it calls addUser when the form is submitted with correct arguments', async () => {
	const testUser = { name: 'Cesar', email: 'cmejia@gmail.com' }
	const mock = vi.fn()
	render(AddUserForm, { props: { addUser: mock } })

	const nameInput = screen.getByRole('textbox', {
		name: /name/i,
	})
	const emailInput = screen.getByRole('textbox', {
		name: /email/i,
	})
	const button = screen.getByRole('button', {
		name: /add/i,
	})

	await user.click(nameInput)
	await user.keyboard(testUser.name)
	await user.click(emailInput)
	await user.keyboard(testUser.email)

	await user.click(button)

	expect(mock).toHaveBeenCalledTimes(1)
	expect(mock).toHaveBeenCalledWith(testUser)

	// Expect inputs to be cleared after submission
	expect(nameInput).toHaveValue('')
	expect(emailInput).toHaveTextContent('')
})
