// place files you want to import through the `$lib` alias in this folder.

export interface SocialLink {
    name: string
    url: string
    icon: string
}

/**
     * Creates a debounced function that delays invoking the provided function
     * until after the specified wait time has elapsed since the last time it was invoked.
     *
     * @param func The function to debounce
     * @param wait The number of milliseconds to delay
     * @returns A debounced version of the original function
     */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: number | undefined;

    return function (...args: Parameters<T>): void {
        // Clear the previous timeout
        clearTimeout(timeout);

        // Set a new timeout
        timeout = window.setTimeout(() => {
            func(...args);
        }, wait);
    };
}