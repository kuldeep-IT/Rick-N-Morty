import { useState } from "react";
import { APP_URLS } from "../config/app-urls";
import baseAxios from "../utils/baseAxios";

const useCharacterDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [characterData, setCharacterData] = useState([])

    const onSuccess = async (data) => {
        setCharacterData(data);
    };

    const getCharacter = async (isLoad = false) => {
        try {
            if (isLoad) {
                setIsLoading(true);
            } else {
                setIsLoading(false);
            }
            const { data } = await baseAxios.get(APP_URLS.characters());
            onSuccess(data.results);
            console.log("CHARACTER::", data)
            console.log("CHARACTER Results::", data.results)
            setIsLoading(false);
            return data;
        } catch (error) {
            console.log('error...', error);
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        characterData,
        getCharacter,
    };
}

export default useCharacterDetails