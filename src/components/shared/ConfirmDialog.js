import React from 'react';
import { View } from 'react-native'
import { useConfirm } from 'react-native-confirm-dialog'

const ConfirmDialog = () => {
    const confirm = useConfirm()
    confirm({
        // ...config options
    })

    return <View />
}

export default ConfirmDialog;