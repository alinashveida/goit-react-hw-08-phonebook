import axios from "axios";

let one = "https://611570c58f38520017a384f9.mockapi.io/contacts/";

export async function fetchContacts() {
  const { data } = await axios.get(`${one}/contactsList`);

  console.log(data);
  return data;
}

export async function createContact(contact) {
  return await axios.post(`${one}/contactsList`, contact);
}

export const deleteContact = (id) => {
  return axios.delete(`${one}/contactsList/${id}`);
};
