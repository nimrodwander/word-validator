import { useEffect, useState } from 'react';
import { fetchApiHandler } from './fetchApiHandler';
import { EReqestStatuses } from './Types';

/**
 * util function spell checking using the following dictionary
 * @link https://api.dictionaryapi.dev/api/v2/entries/en/<english-word>
 */
export const useSpellCheck = (shouldSpellCheck: boolean, word: string) => {
    const [hasTypo, setHasTypo] = useState<boolean | null>(null);
    const [loadingStatus, setLoadingStatus] =
      useState<EReqestStatuses | null>(null);
    useEffect(() => {

        
    const fetchData = async () => {
        setLoadingStatus(EReqestStatuses.PENDING);
        const { data, response, error } = await fetchApiHandler(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );
            if (error ||  !response?.ok) {
                setLoadingStatus(EReqestStatuses.REJECTED);
            }
            else {
                setLoadingStatus(EReqestStatuses.FULLFILLED);
            }
        //status 404 means the english word was not found in the dictionary
        setHasTypo(!response?.ok);
        };

        if (shouldSpellCheck) {
        fetchData();
        }
        else {
            setHasTypo(null);
            setLoadingStatus(null);
        }
  }, [shouldSpellCheck]);

  return { hasTypo, typoCheckStatus: loadingStatus };
};
