
//a util for fatching data 
export const fetchApiHandler = async (url: string, options = {}) => {
  let response, data, error;

  try {
    response = await fetch(url, options);
    data = await response.json();
  } catch (err: any) {
    error = err;
  }

  return {
    data,
    response,
    error,
  };
};
