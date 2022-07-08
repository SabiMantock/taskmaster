import React from 'react'
import { Text, View, TextInput, Image } from 'react-native'

const Duration = ({ hours, minutes }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        borderColor: '#909CC6',
        borderWidth: 2,
        width: 200,
        height: 120,
        borderRadius: 30,
        justifyContent: 'center'
      }}
    >
      <View>
        <Text style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.27)' }}>
          Duration
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ fontSize: 40, marginRight: 10, color: '#909CC6' }}>
            {hours}
          </Text>
          <Image
            source={require('../../assets/dot.png')}
            style={{ width: 12, height: 12 }}
          />
          <Text style={{ fontSize: 40, marginLeft: 10, color: '#909CC6' }}>
            {minutes}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Duration
