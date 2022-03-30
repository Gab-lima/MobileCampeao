import React, { useState } from "react";
import {StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

export default function MenuComponent() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: 'Hoje', value: 'hoje'},
    {label: 'Este mês', value: 'esseMes'},
    {label: 'Último 7 dias', value: 'ultimo7'},
    {label: 'Último 15 dias', value: 'ultimo15'},
    {label: 'Último 30 dias', value: 'ultimo30' },
    
  ]);

  return (
    <DropDownPicker style={styles.container}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={(e) => setValue('nu')}
      setItems={setItems}

    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    margin: 0,
  },
});
