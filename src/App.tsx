import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PaperProvider  from 'react-native-paper';
import {ThemeProvider as PaperThemeProvider} from 'react-native-paper';
import {ThemeProvider} from 'rnfui';


import Loading from './Screens/Loading/Loading';
import HookForm from './Screens/Form.tsx/HookForm';
import PaperForm from './Screens/PaperForm/PaperForm';
import AppRouter from './Navigation/AppRouter';
import PaperTheme from './Config/PaperTheme';
import AppTheme from './Config/AppTheme';




function App(){
  return(
    <ThemeProvider value={AppTheme}>
        <PaperThemeProvider theme={PaperTheme}>
    <AppRouter/>
    </PaperThemeProvider>
    </ThemeProvider>
 )

}
export default App;



