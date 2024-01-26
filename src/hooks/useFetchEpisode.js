import { useCallback, useState } from "react";
import baseAxios from "../utils/baseAxios";

const useFetchEpisode = () => {
    const [episodes, setEpisodes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchEpisodes = useCallback(async (episodeUrls) => {
        setIsLoading(true);
        setError(null);

        try {
            const episodePromises = episodeUrls.map(url =>
                baseAxios.get(url).then(res => res.data)
            );
            const episodesData = await Promise.all(episodePromises);
            setEpisodes(episodesData);
        } catch (err) {
            setError('Failed to fetch episodes');
            console.error("useFetchEpisode:", err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        error,
        fetchEpisodes,
        episodes
    };
};

export default useFetchEpisode;