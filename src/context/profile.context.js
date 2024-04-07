import React from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { auth, database } from "../misc/firebase";


const ProfileContext = createContext();

export const ProfileProvider = ({childern}) => {

    let userRef;

    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
      const authUnsub =  auth.onAuthStateChanged(authObj => {
            if(authObj){

                userRef = database.ref(`/profiles/${authObj.uid}`);
                userRef.on('value', (snap)=>{
                    const {name, createdAt, avatar} = snap.val();
                    
                    const data = {
                        name,
                        createdAt,
                        avatar,
                        uid : authObj.uid,
                        email : authObj.email,
    
                    };
                    setProfile(data);
                    isLoading(false);
                });

                
            }
            else{

                if(userRef){
                    useRef.off();
                }

                setProfile(null);
                isLoading(false);
            }
        });
        return () => {
            authUnsub();

            if(userRef){
                userRef.off();
            }
        }
    },[]); 


    return (
        <ProfileContext.Provider value={{isLoading, profile}}>
        {childern}
    </ProfileContext.Provider>
    )
    
}

export const useProfile = () => useContext(ProfileContext);