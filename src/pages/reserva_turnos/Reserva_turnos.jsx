import React from 'react'
import "./reserva_turnos.js";
import "./reserva_turnos.css";


function ReservaDeTurnos() {
    return (
        <div>
            <div className="Container_dia_reserva">Reserva el día</div><br />
            <div className="container">
                <div className="calendar">
                    <div className="header">
                        <div className="month">Julio 2021</div>
                        <div className="btns">
                            {/* today */}
                            <div className="btn today">
                                <i className="fas fa-calendar-day"></i>
                            </div>
                            {/* previous month */}
                            <div className="btn prev">
                                <i className="fas fa-chevron-left"></i>
                            </div>
                            {/* next month */}
                            <div className="btn next">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="weekdays">
                        <div className="day">Domingo</div>
                        <div className="day">Lunes</div>
                        <div className="day">Martes</div>
                        <div className="day">Miércoles</div>
                        <div className="day">Jueves</div>
                        <div className="day">Viernes</div>
                        <div className="day">Sábado</div>
                    </div>
                    <div className="days">
                        {/* render days with js */}
                    </div>
                </div>
            </div><br />
            <div className="Container_dia_reserva">Reserva el horario</div><br /><br />
            <div className="Reserv">
                <h3 className="Title_hrs">Horarios del día</h3>
                <button id="hora830" className="hrs">8:30</button>
                {/* Botones de hora restantes */}
            </div>
        </div>
    );
}

export default ReservaDeTurnos;
