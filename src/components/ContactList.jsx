export const ContactList = ({ listContact }) => {
  return listContact.map(cont => {
    return (
      <p key={cont.id}>
        {cont.name} {cont.number}
      </p>
    );
  });
};
