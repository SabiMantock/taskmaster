import { useState } from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native'

const SAMPLE_ARRAY = Array(50).fill(1)
const { width, height } = Dimensions.get('window')

const ITEM_HEIGHT = 100
const ITEM_WIDTH = 200
const Scroller = ({ lists = SAMPLE_ARRAY }) => {
  const [selectedItemState, setSelectedItemState] = useState(0)

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 850,
        marginTop: 50,
        borderRadius: 50
        // marginHorizontal: 30
      }}
    >
      <View
        style={{
          height: ITEM_HEIGHT,
          overflow: 'visible',
          marginTop: 50
        }}
      >
        <ScrollView
          onScroll={e => {
            const currentIndex = Math.round(
              e.nativeEvent.contentOffset.y / ITEM_HEIGHT
            )

            console.log({ currentIndex })

            setSelectedItemState(currentIndex)
            // onScroll({ index: currentIndex, list: list[currentIndex] })
          }}
          onMomentumScrollBegin={e => {
            const currentIndex = e.nativeEvent.contentOffset.y / ITEM_HEIGHT
            if (selectedItemState) {
              setSelectedItemState(currentIndex)
            }
          }}
          // onMomentumScrollEnd={e => {
          //   const currentIndex = e.nativeEvent.contentOffset.y / ITEM_HEIGHT
          //   console.log({ currentIndex })
          //   if (currentIndex >= 0 && currentIndex < list.length - 3 * 2) {
          //     setSelectedItemState(currentIndex)
          //   }

          //   // onChange(list[currentIndex])
          // }}
          // onScrollBeginDrag={e => {
          //   const currentIndex = e.nativeEvent.contentOffset.y / ITEM_HEIGHT
          //   if (currentIndex >= 0 && currentIndex < list.length - 3 * 2) {
          //     setSelectedItemState(currentIndex)
          //   }
          // }}
          // onScrollEndDrag={e => {
          //   const currentIndex = e.nativeEvent.contentOffset.y / ITEM_HEIGHT
          //   if (currentIndex >= 0 && currentIndex < list.length - 3 * 2) {
          //     setSelectedItemState(currentIndex)
          //   }
          // }}
          showsVerticalScrollIndicator={false}
          // pagingEnabled
          style={{
            height: ITEM_HEIGHT,
            width: ITEM_WIDTH,
            overflow: 'visible'
          }}
          contentContainerStyle={{
            borderColor: 'blue'
          }}
          // snapToInterval={ITEM_HEIGHT}
          stickyHeaderIndices={selectedItemState}
        >
          {lists.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  height: ITEM_HEIGHT,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={{ fontSize: 58 }} size={30}>
                  {item}
                </Text>
              </View>
            )
          })}
        </ScrollView>
        <View
          pointerEvents='none'
          style={{
            position: 'absolute',
            // borderWidth: 1,
            width: '100%',
            height: '100%'
          }}
        />
      </View>
    </View>
  )
}

export default Scroller
