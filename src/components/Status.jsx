import React from 'react';
import styled from "styled-components/native";
import getAvatarColor from "../utils/getAvatarColor";

const Status = ({fullName, online}) => {
    const avatarColors = getAvatarColor(fullName[0].toUpperCase());
    return (
        <HeaderContainer>
            <HeaderView/>
            <InfoContainer>
                <FullName>{fullName}</FullName>
                <UserStatus>{online ? 'онлайн' : 'офлайн'}</UserStatus>
            </InfoContainer>
            <AvatarContainer>
                <Avatar
                    style={{
                        backgroundColor: avatarColors.background
                    }}
                >
                    <Letter style={{ color: avatarColors.color }}>
                        {fullName[0].toUpperCase()}
                    </Letter>
                </Avatar>
            </AvatarContainer>
        </HeaderContainer>
    );
}

const InfoContainer = styled.View`
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;
const Avatar = styled.View`
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    border-radius: 50px;
    width: 40px;
    height: 40px;
`;

const Letter = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: -1px;
`;

const AvatarContainer = styled.View`
    width: 23%;
    justify-content: flex-end;
    flex-direction: row;
`;

const UserStatus = styled.Text``;
const FullName = styled.Text`
    font-size: 17px;
    font-weight: 600;
`;
const HeaderContainer = styled.View`
    background: white;
    height: 90px
    padding-top: 45px;
    justify-content: space-between;
    flex-direction: row;
`;
const HeaderView = styled.View`
    width: 23%;
`;

export default Status;
