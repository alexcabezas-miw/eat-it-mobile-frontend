
import React from 'react'
import Background from '../../components/auth/Background'
import Button from '../../components/auth/Button'
import Logo from '../../components/auth/Logo'
import Paragraph from '../../components/auth/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Paragraph>
        ¡La app en la que debes confiar!
      </Paragraph>
      <Paragraph>
        ¿Listo para la aventura?
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Acceder
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')} //TODO 
      >
        Registrarse
      </Button>
    </Background>
  )
}
