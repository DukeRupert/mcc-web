<script lang="ts">
	import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
	import { Button, Search } from 'flowbite-svelte';
    import { debounce } from '$lib';
    interface Props {
        debounceTime?: number
        placeholder?: string
    }

    let { debounceTime = 300, placeholder = "Search..." }: Props = $props()
	let initialValue = $state('');
	let searchValue = initialValue;

	const updateUrl = debounce((value: string) => {
		const url = new URL(window.location.href);
		url.searchParams.set('q', value);
        goto(url)
	}, debounceTime);

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		updateUrl(target.value);
	}

	onMount(() => {
		if (!initialValue) {
			const url = new URL(window.location.href);
			searchValue = url.searchParams.get('q') || '';
		}
	});
</script>

<div class="mx-auto mb-6 max-w-2xl">
	<Search bind:value={searchValue} on:input={handleInput} {placeholder}>
		<Button class="me-1">Search</Button>
	</Search>
</div>
