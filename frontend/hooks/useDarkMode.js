import { useLocalStorage } from "./useLocalStorage";


export default function useDarkMode(){
    
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', false)

 return [darkMode, setDarkMode];
}


