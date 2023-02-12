// Functions to interact with the inference API

export const getPredictions = async (sentence: string) => {
  const response = await fetch("/api/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sentence }),
  });

  // TODO: Improve the error handling by trying to parse the response for an eventual error message
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API returned ${response.status}: ${text}`);
  }

  return response.json();
};
