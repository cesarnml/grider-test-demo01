<script lang="ts" context="module">
	export type User = {
		name: string
		email: string
	}
</script>

<script lang="ts">
	import AddUserForm from './AddUserForm.svelte'
	import UserList from './UserList.svelte'
	let users: User[] = []

	const addUser = (user: User) => {
		users = [...users, user]
	}
</script>

<div class="container w-screen h-screen space-y-4 p-8">
	<AddUserForm {addUser} />
	<UserList {users} />
</div>
