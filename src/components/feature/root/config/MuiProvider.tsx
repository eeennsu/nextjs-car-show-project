'use client';

import type { FC, PropsWithChildren } from 'react';
import { CssBaseline, StyledEngineProvider, createTheme, ThemeProvider } from '@mui/material';

const MuiProvider: FC<PropsWithChildren> = ({ children }) => {

    let rootElement;

    if (typeof window !== 'undefined') {
        rootElement = window.document.body;
    }

    const theme = createTheme(
        rootElement !== undefined ? 
            {
                components: {
                    MuiCssBaseline: {
                        styleOverrides: {
                            '*': {
                                boxSizing: "border-box",
                                margin: 0,
                                padding: 0
                            }, 
                            'ul': {
                                listStyle: 'none'
                            },
                            'ol': {
                                listStyle: 'none'
                            },
                            'a': {
                                textDecoration: 'none',
                                color: 'inherit',
                                '&:visited': {
                                    color: 'inherit'
                                }
                            }
                        }
                    },
                    MuiInput: {
                        styleOverrides: {
                            underline: {
                                ":after": {
                                    borderBottomColor: 'black'
                                }
                            }
                        }
                    },
                    MuiPopover: {
                        defaultProps: {
                            container: rootElement,
                        }
                    },
                    MuiPopper: {
                        defaultProps: {
                          container: rootElement,
                        },
                      },
                    MuiModal: {
                        defaultProps: {
                            container: rootElement,
                        },
                    },
                }
            } : {

            }
    );

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                {children}
            </ThemeProvider>            
        </StyledEngineProvider>
    );
}

export default MuiProvider;