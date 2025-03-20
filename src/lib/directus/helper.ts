/**
 * Generates a complete asset URL for Directus assets with optional transformations
 * 
 * @param {string} id - The asset ID
 * @param {Object} options - Optional parameters
 * @param {number} options.width - Optional width for image resizing
 * @param {number} options.height - Optional height for image resizing
 * @param {string} options.key - Optional access key
 * @param {string} options.directusUrl - Optional custom Directus URL (defaults to content.manifoldcollective.com)
 * @returns {string} The complete asset URL with any transformation parameters
 */
export function getAssetUrl(
    id: string, 
    { 
      width, 
      height, 
      key, 
      directusUrl = 'https://content.manifoldcollective.com' 
    }: {
      width?: number;
      height?: number;
      key?: string;
      directusUrl?: string;
    } = {}
  ): string {
    // Construct the base image URL
    let url = `${directusUrl}/assets/${id}`;
    
    // Collect query parameters
    const params: string[] = [];
    
    // Add width and/or height if provided
    if (width) params.push(`width=${width}`);
    if (height) params.push(`height=${height}`);
    if (key) params.push(`key=${key}`);
    
    // Add parameters to URL if there are any
    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }
    
    return url;
  }