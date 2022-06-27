import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScanComponent({ navigation, route }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [showingDialog, setShowingDialog] = useState(false);


    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        navigation.navigate({
            name: "Product",
            params: { barcode: data }
        })
        setTimeout(() => {
            setScanned(false)
        }, 3000)
    };

    showDialogNotFound = () => {
        setShowingDialog(true)
        Alert.alert(
            "¡Bien visto!",
            "Parece que este producto no lo tenemos registrado... ¡Lo sentimos!",
            [
                {
                    text: "Cerrar",
                    onPress: () => {
                        route.params.notFound = false
                        setShowingDialog(false)
                    },
                    style: "cancel"
                },
            ]
        );
    }


    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned || route.params.notFound ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {route.params.notFound && !showingDialog && <View>{showDialogNotFound()}</View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});