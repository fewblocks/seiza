<script>
	import Introduction from './introduction/Introduction.svelte';
</script>

<div class="introduction-wrapper">
	<div class="introduction">
		<Introduction />
	</div>
</div>

<style>
	.introduction-wrapper {
		padding: 20px;
		display: flex;
		justify-content: center;
		flex-direction: row;
	}
	.introduction {
		max-width: 800px;
	}
</style>
