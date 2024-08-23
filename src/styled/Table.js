import styled from "styled-components";

// Tabla principal
export const Table = styled.table`
    width: 85%;
    border-spacing: 0;
    border: 1px solid rgba(255, 255, 0, 0.2);
    border-collapse: collapse;
    box-shadow: 0 4px 8px rgba(255, 255, 0, 0.2);

    @media (min-width: 1280px){
        width: 65%;
    }
`;

// Encabezado de la tabla
export const Thead = styled.thead`
    display: table-header-group;
`;

// Fila de la tabla
export const Tr = styled.tr`
    display: table-row;
    vertical-align: middle;
    outline: 0;
`;

// Celda de encabezado
export const Th = styled.th`
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: 0.01071em;
    display: table-cell;
    vertical-align: inherit;
    text-align: left;
    padding: 16px;
    color: rgb(255, 255, 255);
    border-bottom: 1px solid rgba(255, 255, 0, 0.2);
`;

// Cuerpo de la tabla
export const TBody = styled.tbody`
    display: table-row-group;
`;

// Celda de datos
export const Td = styled.td`
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    display: table-cell;
    vertical-align: inherit;
    text-align: left;
    padding: 16px;
    color: rgb(255, 255, 255);
    border-bottom: 1px solid rgba(255, 255, 0, 0.2);
    transition: all 300ms ease;
`;

export const Subtitle = styled.p`
    font-family : "Roboto";
    font-size : 1rem;
    font-weight: bold;
    margin : 4px 0;
`