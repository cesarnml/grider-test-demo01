import { render, screen } from '@testing-library/svelte'
import html from 'svelte-htm'
import Layout from './+layout.svelte'
import Page from './+page.svelte'

test('it renders a layout component', () => {
	render(html`<${Layout}><${Page}/></${Layout}>`)
	const formHeading = screen.getByRole('heading', { name: /add a user/i })
	const tableHeading = screen.getByRole('heading', { name: /list of users/i })
	expect(formHeading).toBeInTheDocument()
	expect(tableHeading).toBeInTheDocument()
})
