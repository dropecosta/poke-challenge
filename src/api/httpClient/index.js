export const HttpClient = async ({ url }) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        accept: "application/json",
        "Content-Type": "application/json",
      });
      console.log("Get response:", response);
      return await response?.json();
    } catch (e) {
      console.error(e);
      return e;
    }
  };
  