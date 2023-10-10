import { Contacto, contactos } from "../src/contactos";
//por parametro recibe todos los contactos que son un array de contactos y devuelve un array de contactos
const updateIPAddress = (contactos: Contacto[]): Contacto[] => {
  //recorre el array de contactos y por cada contacto le agrega el id al final de la ip_address
  //como forEach no devuelve nada, se le asigna el valor a la misma variable que recibe por parametro
  contactos.forEach((contacto) => {
    contacto.ip_address = contacto.ip_address + "." + contacto.id;
  });
  return contactos;
};
export { updateIPAddress };
