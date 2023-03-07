import { render, screen } from '@testing-library/svelte'
import FormData from './FormData.svelte'

test('it works', async () => {
	render(FormData)

	const form = screen.getByRole('form')
	expect(form).toContainRole('button', 2)
})
