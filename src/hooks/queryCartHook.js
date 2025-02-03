import { useQuery } from "@tanstack/react-query";

export const queryGetCart = (key, url, token) => {
  const fetchCart = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  };

  return useQuery({
    queryKey: [key, token],
    queryFn: fetchCart,
    refetchOnMount: true,
    enabled: !!token,
  });
};

export const queryUpdateCart = (
  key,
  url,
  update_cart_data,
  token,
  controllerRef,
) => {
  if (controllerRef.current) {
    controllerRef.current.abort();
  }

  controllerRef.current = new AbortController();
  const signal = controllerRef.current.signal;

  const fetchCart = async () => {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(update_cart_data),
      signal,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  };

  return useQuery({
    queryKey: [key, url],
    queryFn: fetchCart,
    enabled: !!token,
  });
};

export const queryAddCart = (key, url, add_cart_data, token) => {
  const fetchCart = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(add_cart_data),
      signal,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  };

  return useQuery({
    queryKey: [key, url],
    queryFn: fetchCart,
    refetchOnMount: true,
    enabled: !!token,
  });
};
