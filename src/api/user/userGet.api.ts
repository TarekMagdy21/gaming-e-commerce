export const userGet = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  