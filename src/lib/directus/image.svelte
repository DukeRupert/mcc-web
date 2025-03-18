<script>
	// Image props
	export let id; // Required: The Directus file ID
	export let width = null; // Optional: Image width
	export let height = null; // Optional: Image height
	export let alt = ''; // Optional: Alt text for accessibility
	export let className = ''; // Optional: Additional CSS classes

	// Directus instance URL
	const directusUrl = 'https://content.manifoldcollective.com';

	// Construct the image URL
	$: imageUrl = `${directusUrl}/assets/${id}`;

	// Add query parameters for transformations if needed
	$: fullImageUrl = (() => {
		// Start with the base URL
		let url = imageUrl;

		// Collect query parameters
		const params = [];

		// Add width and/or height if provided
		if (width) params.push(`width=${width}`);
		if (height) params.push(`height=${height}`);

		// Add parameters to URL if there are any
		if (params.length > 0) {
			url += `?${params.join('&')}`;
		}

		return url;
	})();
</script>

<img src={fullImageUrl} {alt} class={className} {width} {height} />
