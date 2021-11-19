import React  from 'react';
import {
  Text, 
  View,
  Image,
  StatusBar } 
  from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';  
import IlustrationImg from '../../assets/illustration.png';

import {style} from './styled';

export function SignIn() {

    return (
      <View style={style.Container}>
        <StatusBar 
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        <Image source={IlustrationImg} 
        style={style.image}
        resizeMode='stretch'
        />

        <View style={style.content}>
          <Text style={style.title}>
            Organize {`\n`}
            suas jogatinas {`\n`}
            facilmente{`\n`}
          </Text>

          <Text style={style.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon 
          title='Entrar com o Discord'
          activeOpacity={0.7}
          />
        </View>
      </View> 
      
    );
  }