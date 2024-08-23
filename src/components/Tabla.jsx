import React, { useState } from 'react';
import { Table, Thead, Tr, Th, TBody, Td, Subtitle } from '../styled/Table';
import { classes } from '../data/class';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

export function Tabla() {
    const [selectedClass, setSelectedClass] = useState(null);

    const handleClassClick = (classId) => {
        const classData = classes.find(cls => cls.id === classId);
        setSelectedClass(selectedClass === classData ? null : classData);
    };

    return (
          <Table>
              <Thead>
                  <Tr>
                      <Th>Nombre de la Clase</Th>
                      <Th>Tema</Th>
                      <Th>Acción</Th>
                    </Tr>
              </Thead>
              <TBody>
                  {classes.map(cls => (
                      <React.Fragment key={cls.id}>
                          <Tr>
                              <Td>{cls.title}</Td>
                              <Td>{cls.summary}</Td>
                              <Td>
                                  <button
                                      onClick={() => handleClassClick(cls.id)}
                                      className="px-3 text-detail flex items-center justify-center"
                                  >
                                      {selectedClass?.id === cls.id ? <FaTimes /> : <FaChevronDown />}
                                  </button>
                              </Td>
                          </Tr>
                          {selectedClass?.id === cls.id && (
                              <Tr>
                                  <Td colSpan="3" className="px-0">
                                      <article className="p-4 bg-primary-dark border-t border-b border-Border">
                                          <h3 className="text-xl font-semibold mb-2 font-Roboto">Detalles de la Clase</h3>
                                          <p><Subtitle>Número de Clase:</Subtitle> {cls.details.numeroClase}</p>
                                          <p><Subtitle>Tema:</Subtitle> {cls.details.tema}</p>
                                          <p><Subtitle>Invitados:</Subtitle> {cls.details.invitados.join(', ')}</p>
                                          <p><Subtitle>Resumen:</Subtitle> {cls.details.resumen}</p>
                                          <div>
                                              <Subtitle>Puntos Clave:</Subtitle>
                                              <ul>
                                                  {cls.details.puntosClave.map((punto, index) => (
                                                      <li key={index}>- {punto}</li>
                                                  ))}
                                              </ul>
                                          </div>
                                      </article>
                                  </Td>
                              </Tr>
                          )}
                      </React.Fragment>
                  ))}
              </TBody>
          </Table>
    );
}