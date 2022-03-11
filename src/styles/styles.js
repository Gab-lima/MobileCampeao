import styled from 'styled-components/native';

export const TitleP12 = styled.Text`
color: ${props => `${props.color}`};
font-size: 16px;
font-weight: ${props => `${props.fontWeight}`};
text-align: ${props => `${props.textAlign}`};
`

export const Flex = styled.View`
flex-direction: row;
justify-content: space-between;
`

export const FlexComponent = styled(Flex)`
margin-bottom: 25px;
align-items: center ;
`

export const TitleP24 = styled.Text`
color: ${props => `${props.color}`};
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

export const Mb28 = styled.View`
margin-bottom: 28px;
`


export const imgGrafico = styled.Image`
margin-bottom: 28px;
`

export const ButtonText = styled.Button`
width: 45%;
border-radius: 4px;
padding: 10px 50px;
align-items: center;
justify-content: center;
color: #f5f5;
`