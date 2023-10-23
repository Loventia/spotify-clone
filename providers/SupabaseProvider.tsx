"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import {Database} from "@/types_db";
import { SessionContextProvider } from "@supabase/auth-helpers-react";


interface SupabaseProviderProps{
    children: React.ReactNode;
};

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
    children
  }) => {
      const [supabaseClient] = useState(() =>
      createClientComponentClient<Database>({
        supabaseUrl: "https://pjpyniqseatntkpctkcp.supabase.co",
        supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcHluaXFzZWF0bnRrcGN0a2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMDc4MDcsImV4cCI6MjAxMjc4MzgwN30.296qGu73XzFGncwMofhvod5ngRh8v9YKSJ5inrRwajFI",
      }
      )
      
    );
  
    return ( 
      <SessionContextProvider supabaseClient={supabaseClient}>
        {children}
      </SessionContextProvider>
    );
  }
   
  export default SupabaseProvider;