import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  padding: 20px 30px ${Platform.OS === 'android' ? 100 : 40}px;
`;

export const Title = styled.Text`
  color: #f4ede8;

  font-family: 'RobotoSlab-Medium';
  font-size: 20px;

  margin: 24px 0;
  text-align: left;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;

  border-radius: 98px;

  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;
