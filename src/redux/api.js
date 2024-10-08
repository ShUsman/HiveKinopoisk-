const apiKey = 
'TJ9EKK9-CK5MV0W-HD3BW9G-RG3522B';
// 'W58KPZG-4654CXA-K5GC8H8-Z61ARE7';

export const fetchMoviesByName = async (searchInput) => {
    let apiUrl = `https://api.kinopoisk.dev/v1.3/movie?limit=60`;

    if (searchInput) {
        apiUrl += `&name=${encodeURIComponent(searchInput)}`;
    }

    const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
            accept: 'application/json',
            'X-API-KEY': apiKey,
        },
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.docs || [];
};
