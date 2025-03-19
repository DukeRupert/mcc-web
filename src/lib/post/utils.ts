// Format date helper function
export function formatDate(dateString: string): string {
    if (!dateString) return '';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Format read time (rough estimate based on word count)
export function getReadTime(content: string): number {
    console.log('Getting read time')
    console.log(content)
    if (!content) return 0;

    // Strip HTML tags for accurate word count
    const textOnly = content.replace(/<[^>]*>?/gm, '');
    const words = textOnly.split(/\s+/).filter(word => word.length > 0);
    console.log(`Words: ${words.length}`)

    // Average reading speed: 200-250 words per minute
    const wordsPerMinute = 225;
    const readTime = Math.ceil(words.length / wordsPerMinute);
    console.log(`Read time: ${readTime}`)

    return readTime > 0 ? readTime : 1; // Minimum 1 minute read time
}