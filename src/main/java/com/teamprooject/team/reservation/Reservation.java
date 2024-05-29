package com.teamprooject.team.reservation;

import com.teamprooject.team.room.RoomRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reservations")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {

    @Id
    private String id;

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private RoomRole roomRole;
    private int roomNum;
    private int roomPrice;
    private int roomCount;
}
