const user = {
  name: 'Saulo',
  lastName: 'Michielin',
}

function User() {
  return <span>{`${user.name} ${user.lastName}`}</span>;
}

export default User;