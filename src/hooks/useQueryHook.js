import { useQuery } from "@tanstack/react-query";

const useQueryHook = (key, url) => {
  const fetchQuery = async () => {
    // const url = ; // Replace with your API URL
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  };

  return useQuery({
    queryKey: [url],
    queryFn: fetchQuery,
    refetchOnMount: true,
  });
};

export default useQueryHook;
