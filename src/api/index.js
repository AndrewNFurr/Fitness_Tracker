const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api';

export const getToken = () => {
    return localStorage.getItem("auth-token");
  };
  
  export const clearToken = () => {
    localStorage.removeItem("auth-token");
  };
  
  const setToken = (token) => {
      localStorage.setItem("auth-token", token);
    };

    function makeHeaders() {
        let base = {
          "Content-Type": "application/json",
        };
      
        if (getToken()) {
          base["Authorization"] = `Bearer ${getToken()}`;
        }
      
        return base;
      }

    export const auth = async (username, password, isNew = false) => {
        const url = `${BASE_URL}/users` + (isNew ? "/register" : "/login");
      
        const response = await fetch(url, {
          method: "POST",
          headers: makeHeaders(),
          body: JSON.stringify({
              username: username,
              password: password
          }),
        });
        console.log(response.json());
      
        const { token, user } = await response.json();
        console.log(token, user)
      
        if (error) {
          throw Error(error.message);
        }
      
        if (token) {
          setToken(token);
        }
        
        return data;
      };



      