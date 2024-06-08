import { useEffect } from "react";
import { eventhub } from "./MyActionListener";

export const useEventListener = (
  action: string,
  callback: (data: any) => any,
  dependenciesList?: any[]
) => {
  useEffect(() => {
    eventhub.registerListener(action, callback);
    return () => {
      eventhub.removeListener(action);
    };
  }, dependenciesList || []);
    
    //if there are more than one listener returns the last executed action for a givven callback
    return { action };
};
