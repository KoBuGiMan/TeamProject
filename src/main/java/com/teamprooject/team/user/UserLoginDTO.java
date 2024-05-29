package com.teamprooject.team.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserLoginDTO {

    private String loginId;
    private String password;

    public static UserLoginDTO toUserLoginDTO(User user){
        UserLoginDTO userLoginDTO = new UserLoginDTO();
        userLoginDTO.setLoginId(user.getLoginId());
        userLoginDTO.setPassword(user.getPassword());
        return userLoginDTO;
    }
}
