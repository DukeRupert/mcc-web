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
    if (!content) return 0;

    // Strip HTML tags for accurate word count
    const textOnly = content.replace(/<[^>]*>?/gm, '');
    const words = textOnly.split(/\s+/).filter(word => word.length > 0);

    // Average reading speed: 200-250 words per minute
    const wordsPerMinute = 225;
    const readTime = Math.ceil(words.length / wordsPerMinute);

    return readTime > 0 ? readTime : 1; // Minimum 1 minute read time
}