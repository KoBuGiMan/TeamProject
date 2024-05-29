package com.teamprooject.team.user;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserJoinDTO {


    private String loginId;
    private String password;

    private String firstName;
    private String lastName;
    private String email;
    private String phone;


    public static UserJoinDTO toUserJoinDTO(User user){
        UserJoinDTO userJoinDTO = new UserJoinDTO();
        userJoinDTO.setLoginId(user.getLoginId());
        userJoinDTO.setPassword(user.getPassword());
        userJoinDTO.setEmail(user.getEmail());
        userJoinDTO.setPhone(user.getPhone());
        userJoinDTO.setFirstName(user.getFirstName());
        userJoinDTO.setLastName(user.getLastName());

        return userJoinDTO;

    }
}
