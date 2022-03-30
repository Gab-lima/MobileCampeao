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

export const TitleP20 = styled.Text`
color: ${props => `${props.color}`};
font-size: 20px;
font-weight: ${props => `${props.fontWeight}`};
text-align: ${props => `${props.textAlign}`};
`

export const TitleP24 = styled.Text`
color: ${props => `${props.color}`};
text-align: ${props => `${props.textAlign}`};
font-size: 24px;
font-weight: 700;
`
export const TextRotate = styled.Text`
color: '#000' !important;
text-align: center;
font-size: 50px;
font-weight: 300;
-ms-transform: rotate(-48deg); 
-webkit-transform: rotate(-48deg); 
transform: rotate(-48deg);
`



export const Flex = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const FlexSelect = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
border: 1px solid #025579; 
border-radius: 4px;
padding-left: 2px;
background-color: '#FFF'; 
padding-right: 20px;
margin-right: 20px;
`
export const FlexSelectComplete = styled(FlexSelect)`
width: 100%;
height: 50px;
border: 1px solid #B7B6C4; 

`

export const FlexNoSpace = styled.View`
flex-direction: row;
align-items: center;
`

export const FlexInput = styled.View`
flex-direction: row;
align-items: center;
background-color: '#FFF';
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



export const CardPrincipalStyle = styled.View`
padding: 12px 25px;
background-color: ${props => `${props.backGround}`};
border-radius: 4px;
width: 47%;
align-items: center;
justify-content: center;
 height: 100px;
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

export const Mb12 = styled.View`
margin-bottom: 12px;
`


export const imgGrafico = styled.Image`
margin-bottom: 28px;
`

export const ButtonText = styled.TouchableOpacity`
width: 15%;
border-radius: 4px;
padding: 10px 50px;
align-items: center;
justify-content: center;
`

export const InputStyle = styled.TextInput`
width: 85%;
border-radius: 4px;
padding: 10px 50px;
align-items: center;
background-color: #FFF;
justify-content: center;
border: 1px solid #B7B6C4;
color: #3E3B5B;
`

export const InputStyleFilter = styled(InputStyle)`
width: 88%;
border: none;
color: "#000";
`

export const InputSimple = styled(InputStyle)`
width: 100%;
margin: 0;
`

export const InputIconStyle = styled(InputStyle)`
max-width: 90%;
min-width: 90%;
margin: 0;
border: 0px;
padding: 10px 0px;
padding-left: 15px;

`

export const InputIconStyleFilter = styled(InputIconStyle)`
max-width: 82%;
min-width: 82%;
border-radius: 12px;

`

export const TouchableOpacityStyle = styled.TouchableOpacity`
background-color: ${props => `${props.backGround}`};
padding: 10px 0;
border-radius: 4px;
`




