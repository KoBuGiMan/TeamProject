package com.teamprooject.team.room;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RoomDTO {

    private int roomNum;
    private int roomPrice;
    private int roomCount;
    private RoomRole roomRole;


    public static RoomDTO toRoomDTO(Room room){
        RoomDTO roomDto  = new RoomDTO();
        roomDto.setRoomNum(room.getRoomNum());
        roomDto.setRoomPrice(room.getRoomPrice());
        roomDto.setRoomCount(room.getRoomCount());

        return roomDto;
    }

}
