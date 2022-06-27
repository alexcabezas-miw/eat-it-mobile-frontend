import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../components/auth/Background'
import Logo from '../../components/auth/Logo'
import Header from '../../components/auth/Header'
import Button from '../../components/auth/Button'
import TextInput from '../../components/auth/TextInput'
import BackButton from '../../components/auth/BackButton'
import { theme } from '../../components/theme'
import ValuePicker from '../../components/auth/ValuePicker'

export default function PersonalInformationRegistrationScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [username, setUsername] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [nationality, setNationality] = useState({ value: '', error: '' })
  const [age, setAge] = useState({ value: '', error: '' })
  const [gender, setGender] = useState({
    value: '',
    list: [
      { label: 'Hombre', value: 'Hombre' },
      { label: 'Mujer', value: 'Mujer' },
      { label: 'Otro', value: 'Otro' },
    ],
    selectedList: [],
    error: '',
  });

  const validateFieldNotBlank = (field) => {
      if(!field) {
          return "¡Este campo debe tener valor!"
      }
      return ""
  }

  const validateFields = () => {
    const nameError = validateFieldNotBlank(name.value)
    const userNameError = validateFieldNotBlank(username.value)
    const passwordError = validateFieldNotBlank(password.value)
    const nationalityError = validateFieldNotBlank(nationality.value)
    const ageError = validateFieldNotBlank(age.value)
    const genderError = validateFieldNotBlank(gender.value)

    setName({...name, error: nameError})
    setUsername({...username, error: userNameError})
    setPassword({...password, error: passwordError})
    setNationality({...nationality, error: nationalityError})
    setAge({...age, error: ageError})
    setGender({...gender, error: genderError})

    return [nameError, userNameError, passwordError, nationalityError, ageError, genderError].every(err => err === "")

  }

  const onSignUpPressed = () => {
    const validFields = validateFields()
    if(validFields) {
        const user = {
            name: name.value,
            username: username.value,
            age: age.value,
            nationality: nationality.value,
            password: password.value,
            gender: gender.value,
        }

        navigation.navigate({
          name: "IngredientsRegistrationScreen",
          params: {
            userdata: user
          }
        })
    }
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>¡Bienvenido/a a bordo!</Header>
        <Header>1/2: Información personal</Header>
        <TextInput
            label="Nombre completo"
            returnKeyType="next"
            value={name.value}
            onChangeText={(text) => setName({ value: text, error: '' })}
            error={!!name.error}
            errorText={name.error}
        />
        <TextInput
            label="Nombre de usuario"
            returnKeyType="next"
            textContentType="username"
            value={username.value}
            onChangeText={(text) => setUsername({ value: text, error: '' })}
            error={!!username.error}
            errorText={username.error}
        />
        <TextInput
            label="Contraseña"
            returnKeyType="next"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
        />
        <TextInput
            label="Nacionalidad"
            returnKeyType="next"
            value={nationality.value}
            onChangeText={(text) => setNationality({ value: text, error: '' })}
            error={!!nationality.error}
            errorText={nationality.error}
        />
        <View style={{width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
                containerStyle={{width: "45%"}}
                label="Edad"
                returnKeyType="next"
                value={age.value}
                keyboardType="number-pad"
                onChangeText={(text) => setAge({ value: text, error: '' })}
                error={!!age.error}
                errorText={age.error}
            />
            <ValuePicker
                placeholder={{label: "Género", value: null, color: '#9EA0A4',}}
                onValueChange={(value) => setGender({...gender, value})}
                items={gender.list}
                error={gender.error}
            />
        </View>
        <Button
            mode="contained"
            onPress={onSignUpPressed}
            style={{ marginTop: 24 }}
        >
            Configurar Ingredientes
        </Button>
        <View style={styles.row}>
            <Text>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
            <Text style={styles.link}> Accede</Text>
            </TouchableOpacity>
        </View>
        
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 40
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})