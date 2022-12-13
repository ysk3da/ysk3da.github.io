type User = {
  id: number;
  name: string;
  email: string;
};

// const getUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users: User[] = await response.json();
//   return users;
// };

const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  );
  const users = await response.json();

  return users;
};

const UsersList = async () => {
  const users = await getUsers();

  const List = () => {
    return(
      <>
        {users && users.map((user) => {
          return (
            <li key={user.id}>{user.name}</li>
          )
        })}
      </>
    )
  }

  return (
    <>
      <h2 className="text-lg font-bold mt-4">ユーザ一覧</h2>
      <ul>
        <List/>
      </ul>
    </>
  );
};

export default UsersList;