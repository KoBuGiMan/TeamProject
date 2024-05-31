package com.teamprooject.team.reservation;

import com.teamprooject.team.room.RoomRole;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class ReservationDTO {

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String roomId;
    private RoomRole roomRole;
    private int roomPrice;
    private int roomCount;
    private LocalDate startDate;
    private LocalDate endDate;

    public static ReservationDTO toReservationDTO(Reservation res){
        ReservationDTO resDto = new ReservationDTO();
        resDto.setFirstName(res.getFirstName());
        resDto.setLastName(res.getLastName());
        resDto.setEmail(res.getEmail());
        resDto.setPhone(res.getPhone());
        resDto.setRoomPrice(res.getRoomPrice());
        resDto.setRoomCount(res.getRoomCount());
        resDto.setStartDate(res.getStartDate());
        resDto.setRoomRole(res.getRoomRole());
        resDto.setEndDate(res.getEndDate());

        return resDto;
    }

}
