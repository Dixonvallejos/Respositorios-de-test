import { Contacto } from "../src/contactos";
const indOneByEmail = (email: string): Contacto[] => {
  if (email === "") {
    return contactos;
  }
  return contactos.filter((contacto) => contacto.email.includes(email));
};

export { indOneByEmail };
