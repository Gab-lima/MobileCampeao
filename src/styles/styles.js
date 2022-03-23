import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const TitleP14 = styled.Text`
color: ${props => `${props.color}`};
font-size: 14px;
font-weight: ${props => `${props.fontWeight}`};
text-align: ${props => `${props.textAlign}`};
`
export const TitleP12 = styled.Text`
color: ${props => `${props.color}`};
font-size: 12px;
font-weight: ${props => `${props.fontWeight}`};
text-align: ${props => `${props.textAlign}`};
`
export const TitleP16 = styled.Text`
color: ${props => `${props.color}`};
font-size: 16px;
font-weight: ${props => `${props.fontWeight}`};
text-align: ${props => `${props.textAlign}`};
`


export const Flex = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;

`
export const FlexNoSpace = styled.View`
flex-direction: row;
align-items: center;

`

export const FlexCenterTop = styled.View`
align-items: center;
margin-top: 123px;
margin-bottom: 150px;
`

export const FlexComponent = styled(Flex)`
margin-bottom: 25px;
align-items: center;

`

export const TitleP24 = styled.Text`
color: ${props => `${props.color}`};
text-align: ${props => `${props.textAlign}`};
font-size: 24px;
font-weight: 700;
margin-bottom: 12px;

`

export const CardPrincipalStyle = styled.View`
padding: 12px 25px;
background-color: ${props => `${props.backGround}`};
border-radius: 4px;
width: 47%;
align-items: center;
justify-content: center;
`

export const CardSmall = styled.View`
background-color: ${props => `${props.backGround}`};
border-radius: 4px;
width: 23%;
height: 23%;
-ms-transform: rotate(-90deg); 
-webkit-transform: rotate(-90deg); 
transform: rotate(-90deg);
justify-content: center;
align-items: center;
margin-left: -7.3%; //teste
`


export const Mb28 = styled.View`
margin-bottom: 28px;
`


export const imgGrafico = styled.Image`
margin-bottom: 28px;
`

export const ButtonText = styled.Button`
width: 15%;
border-radius: 4px;
padding: 10px 50px;
align-items: center;
justify-content: center;
`

export const InputStyleFilter = styled.TextInput`
width: 85%;
border-radius: 4px;
padding: 10px 50px;
align-items: center;
background-color: #FFF;
justify-content: center;
border: 1px solid #B7B6C4;
color: #3E3B5B;
`

export const InputSimple = styled(InputStyleFilter)`
width: 100%;
margin: 0;
`

export const InputIconStyle = styled(InputStyleFilter)`
width: 90%;
margin: 0;
border: 0px;
background-color: #000;
`

