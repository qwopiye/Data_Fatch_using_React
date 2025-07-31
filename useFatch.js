import {useState,useEffect} from "react";


 function useFatch(url) {
  const [data, setData] = useState(url);
  const [loading, setLoading] = useState(true);
   const [errorMsg, setErrorMsg] = useState(null); // renamed from 'Error'
 
   useEffect(() => {
     setTimeout(() => {
       fetch(url)
         .then((res) => {
           if (!res.ok) {
             throw new Error("Fetch was not successful");
           }
           return res.json(); 
         })
         .then((data) => {
           setData(data);
           setLoading(false);
           setErrorMsg(null);
         })
         .catch((err) => {
           setErrorMsg(err.message);
           setLoading(false);
         });
     }, 2000);
   }, [url]);
   
 return {data,loading,errorMsg}
}

export default useFatch;