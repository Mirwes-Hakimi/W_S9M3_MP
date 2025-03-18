import React, { useState, useEffect } from "react";


export default function useDarkMode(initialValue = false){
    
    const [darkMode, setDarkMode] = useState(initialValue)

 return [darkMode, setDarkMode];
}


