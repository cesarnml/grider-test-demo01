<script lang="ts">
	import type { User } from './+page.svelte'

	export let users: User[]
</script>

<h2 class="font-bold text-xl">List of Users</h2>
<table class="table table-zebra">
	<thead>
		<tr>
			<th />
			<th>Name</th>
			<th>Email</th>
		</tr>
	</thead>
	<tbody>
		{#each users as user, index (user.email)}
			<tr>
				<th>{index + 1}</th>
				<td>{user.name}</td>
				<td>{user.email}</td>
			</tr>
		{/each}
	</tbody>
</table>
