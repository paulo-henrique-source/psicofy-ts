import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 6rem 6rem 6rem;

    width: 100%;

    .fc-daygrid-day-events {
        gap: 2px;
        display: flex;
        flex-direction: column;
    }

    .fc-daygrid-event-harness {
        background-color: #3183fe;
        cursor: pointer;
    }

    @media (max-width: 431px) {
        padding: 2rem;
        height: 90vh;

        .fc.fc-media-screen.fc-direction-ltr.fc-theme-standard {
            height: 100%;
        }
    }
`;
