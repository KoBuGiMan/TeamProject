package com.teamprooject.team.reservation;

import com.teamprooject.team.room.RoomRole;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ReservationDTO {

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private RoomRole roomRole;
    private int roomNum;
    private int roomPrice;
    private int roomCount;

    public static ReservationDTO toReservationDTO(Reservation res){
        ReservationDTO resDto = new ReservationDTO();
        resDto.setFirstName(res.getFirstName());
        resDto.setLastName(res.getLastName());
        resDto.setEmail(res.getEmail());
        resDto.setPhone(res.getPhone());
        resDto.setRoomNum(res.getRoomNum());
        resDto.setRoomPrice(res.getRoomPrice());
        resDto.setRoomCount(res.getRoomCount());

        return resDto;
    }

}
