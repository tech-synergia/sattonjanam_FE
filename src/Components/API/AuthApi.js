import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

function AuthApi() {
    const [isLogged, setIsLogged] = useState(false)
    

    const [user,setUser] = useState(false)
    const [isUser,setIsUser] = useState(false)

    const initData = useCallback(() => {
        const getUser = async () => {
          const token = localStorage.getItem("accessToken") || false;
          console.log("token =", token);
          if (token) {
            const res = await axios.get(`https://sattonjanam.onrender.com/api/v1/auth/currentUser`, {
              headers: {
                Authorization: token,
              },
            });
            console.log("current user =", res.data);
            setUser(res.data.user);
            setIsLogged(true);
            
          }
        };
    
        getUser();
      }, [isLogged, isUser, user]);

      useEffect(() => {
        initData();
      }, []);

      return {
        isLogged: [isLogged, setIsLogged],
        isUser: [isUser, setIsUser],
         user: [user, setUser] 
      };

}

export default AuthApi;