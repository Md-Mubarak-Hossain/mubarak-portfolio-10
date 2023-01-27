
import { useEffect } from "react";
const useTitle = (title) => {
    useEffect(()=>{
        document.title=`${title}- Mubarak's Portfolio`
    },[title])
};

export default useTitle;