package com.teamprooject.team.reservation;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/reservations")
public class ReservationController {
    @Autowired
    private final ReservationService reservationService;

    @PostMapping
    public Reservation createReservation(@RequestBody Reservation res) {
        return reservationService.createReservation(res);
    }
    @GetMapping
    public List<Reservation> getAllReservations(){
        return reservationService.getAllReservations();
    }
    @GetMapping("/{id}")
    public Reservation getReservationById(@PathVariable String id){
        return reservationService.getReservationById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteReservationById(@PathVariable String id){
        reservationService.deleteReservationById(id);
    }


}
