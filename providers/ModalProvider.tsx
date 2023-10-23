"use client";

import { useEffect, useState } from "react";


import React from 'react'

const ModalProvider = () => {
    const [isMoutend, setIsMounted]= useState(false);
    useEffect(()=>{
        setIsMounted(true)
        },[]);
    if(!isMoutend){
        return null;
    }
  return (
    <div>Modals!</div>
  )
}

export default ModalProvider;
