import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../components/auth/Background'
import Logo from '../../components/auth/Logo'
import Header from '../../components/auth/Header'
import Button from '../../components/auth/Button'
import TextInput from '../../components/auth/TextInput'
import BackButton from '../../components/auth/BackButton'
import { theme } from '../../components/theme'

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '' })

  const onLoginPressed = () => {
    // setUsername({...username, error: 'Usuario o contraseña inválidos'})
    // setPassword({value: ''})

    navigation.reset({
      index: 0,
      routes: [{ name: 'MainScreen' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>¡Bienvenido de nuevo!</Header>
      <TextInput
        label="Usuario"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: '' })}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize="none"
      />
      <TextInput
        label="Contraseña"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text })}
        error={!!username.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={onLoginPressed}>
        Acceder
      </Button>
      <View style={styles.row}>
        <Text>¿No tienes una cuenta? ¡Pues regístrate! </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})