import { useCallback, useState } from "react";
import baseAxios from "../utils/baseAxios";
import { APP_URLS } from "../config/app-urls";

const useEpisodeDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [episodeDetail, setEpisodeDetail] = useState()
    const [error, setError] = useState(null);
    const [characterData, setCharacterData] = useState([])

    const onSuccess = async (data) => {
        setEpisodeDetail(data);
    };

    const getEpisodeDetail = async (_id, isLoad = false) => {
        try {
            if (isLoad) {
                setIsLoading(true);
            } else {
                setIsLoading(false);
            }

            let url = APP_URLS.episodeDetail(_id)
            console.log("URLLLLL:", url)
            const { data } = await baseAxios.get(url);
            console.log("HERE DATTAAA:::", data.characters)
            onSuccess(data);
            fetchCharacters(data.characters)
            setIsLoading(false);
            return data;
        } catch (error) {
            console.log('error...', error);
            setIsLoading(false);
        }
    };

    const fetchCharacters = useCallback(async (characterUrls) => {
        setIsLoading(true);
        setError(null);

        try {
            const charaterPromises = characterUrls.map(url =>
                baseAxios.get(url).then(res => res.data)
            );
            const episodesData = await Promise.all(charaterPromises);
            setCharacterData(episodesData);
        } catch (err) {
            setError('Failed to fetch episodes');
            console.error("fetchCharacters:", err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        episodeDetail,
        getEpisodeDetail,
        fetchCharacters,
        characterData
    };
};

export default useEpisodeDetails;