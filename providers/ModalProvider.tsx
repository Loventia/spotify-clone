"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import React from 'react'
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import {Auth} from "@supabase/auth-ui-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";


const ModalProvider = () => {
    const [isMoutend, setIsMounted]= useState(false);
    useEffect(()=>{
        setIsMounted(true)
        },[]);
    if(!isMoutend){
        return null;
    }

     // Initialize the Supabase client with your URL and API key
     const supabase = createClient("https://pjpyniqseatntkpctkcp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcHluaXFzZWF0bnRrcGN0a2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMDc4MDcsImV4cCI6MjAxMjc4MzgwN30.296qGu73XzFGncwMofhvod5ngRh8v9YKSJ5inrRwajFI");
  return (
    <>
     

    <Modal
       
       title="Welcome Back"
       description="Login to your account"
       onChange={() => {}}
       isOpen
      >
    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />

      </Modal>
     
    </>
  )
}

export default ModalProvider;
