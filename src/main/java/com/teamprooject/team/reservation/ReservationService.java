package com.teamprooject.team.reservation;

import java.util.List;

public interface ReservationService {

    Reservation createReservation(Reservation res);

    List<Reservation> getAllReservations();
    Reservation getReservationById(String id);
    void deleteReservationById(String id);


}
