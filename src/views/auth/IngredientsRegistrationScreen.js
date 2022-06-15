import React, { Component } from 'react'
import Background from '../../components/auth/Background'
import BackButton from '../../components/auth/BackButton'
import AddElementsButton from '../../components/auth/AddElementsButton'
import Header from '../../components/auth/Header'
import Button from '../../components/auth/Button'
import Logo from '../../components/auth/Logo'

import UsersService from '../../service/users/UsersService'

import { View, Text, Alert, ActivityIndicator } from 'react-native'
import RestrictionsModalComponent from '../../components/product/RestrictionsModalComponent'

export default class IngredientsRegistrationScreen extends Component {

    constructor(props) {
      super(props)
      this.userService = new UsersService()
      this.selectedRestrictions = []
      this.state = {
        restrictionModalVisible: false,
        ingredientModalVisible: false,
        userRestrictions: [],
        isLoading: false
      }
    }

    toggleRestrictionModal = () => {
      this.setState({restrictionModalVisible: !this.state.restrictionModalVisible})
    }

    toggleIngredientsModal = () => {
      this.setState({ingredientModalVisible: !this.state.ingredientModalVisible})
    }

    onSignUpPressed = () => {
      this.setState({isLoading: true})
      Alert.alert(
        "¿Estás seguro?",
        "Ten en cuenta que por el momento tus datos no se pueden modificar... ¿Quieres continuar?",
        [
            {
                text: "No",
                style: "cancel"
            },
            {
                text: "Si",
                onPress: () => {
                    this.finishSignUp()
                }
            }
        ]
      );
    }

    finishSignUp() {
      const {userdata} = this.props.route.params
      userdata.restrictions = this.state.userRestrictions
      this.userService.createUser(userdata, err => {
        if(err) {
            this.setState({isLoading: false})
            if(err.status == 400) {
              alert("El usuario " + userdata.username + " ya existe. ¡Asegúrate de cambiarlo!")
            }
            else {
              alert(err.errorMessage)
            }
            return;
        } else {
          alert("¡Usuario creado! Por favor, inicie sesión para poder comenzar el viaje")
        }
        this.setState({isLoading: false})
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
      })
    }

    render() {
      return(
          <Background>
            <BackButton goBack={this.props.navigation.goBack} />
            <Logo/>
            <Header>2/2 Información alimentaria</Header>
            <Text>¡Ahora queremos saber sobre tus gustos!</Text>
            <View style={{marginTop: 20}}>
              <View>
                <Header>1. ¿Tienes alguna restriccion alimentaria en concreto?</Header>
                <Text>Nos referimos a si, por ejemplo, pertecenes a algún colectivo o tu restriccion tiene nombre, como una alergia o el veganismo</Text>
                <AddElementsButton label={"Añadir restricciones"} onTouch={this.toggleRestrictionModal}/>
              </View>
              <View>
                <Header>2. ¿Hay algun alimento que el primer apartado no cubra y quieras eliminar de tu dieta?</Header>
                <Text>Si hay algun alimento que no haya sido cubierto por el apartado anterior, ¡Este es el momento de añadirlo!</Text>
                <AddElementsButton label={"Añadir ingredientes"} onTouch={() => console.log("Hello ingredientes!!")}/>
              </View>
            </View>
            <RestrictionsModalComponent
                isVisible={this.state.restrictionModalVisible}
                onCancelButton={() => {
                  this.setState({userRestrictions: this.selectedRestrictions})
                  this.toggleRestrictionModal()
                }}
                selectedItems={this.selectedRestrictions}
            />
            {this.state.isLoading && <ActivityIndicator/>}
            {!this.state.isLoading && <Button
              mode="contained"
              onPress={this.onSignUpPressed}
              style={{ marginTop: 24 }}
            >
              Registrarse
              </Button>
            }
          </Background>
      )
    }
}

/*




*/