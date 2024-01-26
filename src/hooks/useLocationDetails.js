import { useCallback, useState } from "react";
import baseAxios from "../utils/baseAxios";

const useLocationDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [locationDetail, setLocationDetail] = useState()
    const [error, setError] = useState(null);
    const [residentData, setResidentData] = useState([])

    const onSuccess = async (data) => {
        setLocationDetail(data);
    };

    const getLocationDetail = async (url, isLoad = false) => {
        try {
            if (isLoad) {
                setIsLoading(true);
            } else {
                setIsLoading(false);
            }


            console.log("URLLLLL: in Location", url)
            const { data } = await baseAxios.get(url);
            console.log("HERE DATTAAA:::", data.residents)
            onSuccess(data);
            fetchResidents(data.residents)
            setIsLoading(false);
            return data;
        } catch (error) {
            console.log('error...', error);
            setIsLoading(false);
        }
    };

    const fetchResidents = useCallback(async (characterUrls) => {
        setIsLoading(true);
        setError(null);

        try {
            const charaterPromises = characterUrls.map(url =>
                baseAxios.get(url).then(res => res.data)
            );
            const episodesData = await Promise.all(charaterPromises);
            setResidentData(episodesData);
        } catch (err) {
            setError('Failed to fetch episodes');
            console.error("fetchCharacters:", err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        locationDetail,
        getLocationDetail,
        fetchResidents,
        residentData
    };
};

export default useLocationDetails;