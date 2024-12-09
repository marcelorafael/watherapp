import React, { createContext, useState } from "react";

import { ThemeProvider as ThemeProviderStyled } from 'styled-components/native'
import dark from "./dark";
import light from "./light";

enum ThemeType {
    light = 'light',
    dark = 'dark'
}

export const ThemeContext = createContext({
    theme: ThemeType.light,
    toggleTheme: () => { },
})
const themes = {
    dark: dark,
    light: light
}


export const ThemeProvider: React.FC = ({ children }: any) => {
    const [theme, setTheme] = useState(ThemeType.light);

    function toggleTheme() {
        if (theme === ThemeType.light) {
            setTheme(ThemeType.dark);
        } else {
            setTheme(ThemeType.light);
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProviderStyled theme={themes[theme]}>
                {children}
            </ThemeProviderStyled>
        </ThemeContext.Provider>
    )
}