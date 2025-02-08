import {useInView } from "framer-motion";
import { useRef } from "react";

const useAnimatedInView =()=>{
    const ref = useRef<HTMLDivElement|null>(null);
    const isInView = useInView(ref);

    return {ref,isInView};

}
export default useAnimatedInView;