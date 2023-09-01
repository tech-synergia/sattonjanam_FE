import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

function AuthApi() {
    const [isLogged, setIsLogged] = useState(false)
    const token = localStorage.getItem("accessToken") || false;
    const [isAdmin, setIsAdmin] = useState(false);
    const [user,setUser] = useState(false)
    const [isUser,setIsUser] = useState(false)
    const [prof,setProf] = useState(false)

    const initData = useCallback(() => {
        const getUser = async () => {
          const token = localStorage.getItem("accessToken") || false;
          // console.log("token =", token);
          if (token) {
            const res = await axios.get(`https://sattonjanam.onrender.com/api/v1/auth/currentUser`, {
              headers: {
                Authorization: token,
              },
            });
            // console.log("current user =", res.data);
            setUser(res.data.user);
            setIsLogged(true);
            if (res.data.user.role === "superadmin") {
              setIsAdmin(true);
            } else if (res.data.user.role === "user") {
              // setIsUser(true);
              setIsUser(true)
            }
          }
        };
    
        getUser();
      }, [isAdmin,isLogged, isUser, user]);

      const update = async (user) => {
        console.log('profile = ', user)
        const check = prof.every(item => {
          return item._id !== user._id
        })

        if(check) {
          console.log('profile added to card')
          setProf([...prof, {...user}])
        } else {
          console.log('profile already in card')
         }
      }

      useEffect(() => {
        initData()
      }, [])

      return {
        isLogged: [isLogged, setIsLogged],
        isUser: [isUser, setIsUser],
        isAdmin: [isAdmin, setIsAdmin],
         user: [user, setUser] ,
         prof: [prof,setProf],
         update: update
      };

}

export default AuthApi;