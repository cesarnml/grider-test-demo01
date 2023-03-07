<script lang="ts">
	import type { User } from './+page.svelte'

	let name = ''
	let email = ''

	export let addUser: (user: User) => void
</script>

<form
	class="flex-col flex gap-4 items-start border p-8 rounded-lg shadow-md max-w-screen-sm"
	on:submit|preventDefault={() => {
		addUser({ name, email })
		name = ''
		email = ''
	}}
>
	<h2 class="text-zinc-100 font-bold text-xl">Add a User</h2>
	<label class="label space-x-4">
		<span class="label-text">Name:</span>
		<input class="input input-secondary" type="text" name="name" bind:value={name} />
	</label>
	<label class="label space-x-4">
		<span class="label-text">Email:</span>
		<input class="input input-secondary" type="email" name="email" bind:value={email} />
	</label>
	<button class="btn btn-secondary self-end">Add User</button>
</form>
