import { Contacto, contactos } from "../src/contactos";
const findOneByEmail = (SoloUncontacto: string): Contacto => {
  function BuscarMail(contacto: Contacto) {
    return contacto.email === SoloUncontacto;
  }
  const encontrados = contactos.filter(BuscarMail);
  return encontrados[0];
};

export { findOneByEmail };
