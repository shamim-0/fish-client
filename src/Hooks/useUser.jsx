const useUser = (email) => {
    fetch(`http://localhost:5000/user_email?email=rainbosoft@gmail.com`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not OK');
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  


export default useUser;