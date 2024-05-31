package com.teamprooject.team.user;


import lombok.AllArgsConstructor;
import lombok.Getter;

import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class User {

    @Id
    private String id;

    private String loginId;
    private String password;

    private String name;
    private String email;
    private String phone;

    private UserRole userRole;

}
