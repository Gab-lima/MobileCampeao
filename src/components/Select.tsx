import DropDownPicker from 'react-native-dropdown-picker';

export default function MenuComponent() {
   
  
    return (
        <DropDownPicker
    items={[
        {label: 'Item 1', value: 'item1'},
        {label: 'Item 2', value: 'item2'},
    ]}
    defaultValue="item1"
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => console.log(item.label, item.value)}
/>
    );
  }