export function useTextUtils() {
    function truncateWords(text: string, wordLimit: number = 10): string {
        if (!text) return '';
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    }

    return {
        truncateWords
    };
}