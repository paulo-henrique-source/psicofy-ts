/* eslint-disable */
import * as Styled from "./styles";
import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { EventModal } from "../EventModal";
import { ScheduleProps } from "./types";

export const CalendarComponent = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [daySelected, setDaySelected] = useState("");

    const [events, setEvents] = useState([
        { title: "João Augusto", date: "2024-01-04T11:30:00.000" },
        { title: "Alisson Mendes", date: "2024-01-04T10:30:00.000" },
    ]);

    const handleDateClick = (arg: DateClickArg) => {
        setOpen(true);
        setDaySelected(arg.dateStr);
    };

    const handleSchedule = (schedule: ScheduleProps) => {
        setOpen(false);

        setEvents((prevState) => [
            ...prevState,
            {
                title: schedule.name,
                date: `${daySelected}T${schedule.time}:00.000`,
            },
        ]);
    };

    return (
        <>
            <Styled.Wrapper ref={containerRef}>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    locale={ptBrLocale}
                    events={events}
                    businessHours
                    duration={{
                        minutes: 30,
                    }}
                    slotDuration={60}
                    dateClick={(arg) => handleDateClick(arg)}
                    // eventClick={(arg) => handleDateClick(arg)}
                    eventBackgroundColor="#27ca37"
                />

                <EventModal
                    open={open}
                    setOpen={setOpen}
                    handleSchedule={handleSchedule}
                />
            </Styled.Wrapper>
        </>
    );
};
