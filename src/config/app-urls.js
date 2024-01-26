export const baseURL = 'https://rickandmortyapi.com/api/';

export const APP_URLS = {
    characters: () => '/character',
    locations: () => '/location',
    episodes: () => '/episode',
    episodeDetail: (_id) => `/episode/${_id}`,
}