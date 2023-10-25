"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/Modal";


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
    <>
      <Modal
       
       title="Test Modal"
       description="Test Description"
       onChange={() => {}}
       isOpen
      >
        Test Children

      </Modal>
    </>
  )
}

export default ModalProvider;
