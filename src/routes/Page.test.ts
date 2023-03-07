import { render, screen } from '@testing-library/svelte'
import user from '@testing-library/user-event'
import Page from './+page.svelte'

test('it renders the root page', () => {
	render(Page)
	const formHeading = screen.getByRole('heading', { name: /add a user/i })
	const tableHeading = screen.getByRole('heading', { name: /list of users/i })
	expect(formHeading).toBeInTheDocument()
	expect(tableHeading).toBeInTheDocument()
})

test('it can receive a new user and show it on a list', async () => {
	render(Page)
	const nameInput = screen.getByRole('textbox', { name: /name/i })
	const emailInput = screen.getByRole('textbox', { name: /email/i })
	const button = screen.getByRole('button')

	await user.click(nameInput)
	await user.keyboard('cesar')
	await user.click(emailInput)
	await user.keyboard('cmejia@gmail.com')
	await user.click(button)

	const nameCell = screen.getByRole('cell', { name: /cesar/i })
	const emailCell = screen.getByRole('cell', { name: /cmejia@gmail.com/i })
	expect(nameCell).toHaveTextContent('cesar')
	expect(emailCell).toHaveTextContent('cmejia@gmail.com')
})
