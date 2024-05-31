package com.teamprooject.team.room;

import java.util.List;

public interface RoomService {

    Room createRoom(Room room);
    List<Room> getAllRooms();
    Room getRoomById(String id);
    void deleteRoomById(String id);


}
