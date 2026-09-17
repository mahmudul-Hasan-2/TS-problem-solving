interface UserProfile {
  username: string;
  email: string;
  age: number;
}

type UpdateUser = Partial<UserProfile>;

function updateUser(user: UserProfile, updatedData: UpdateUser) {
  return {
    ...user,
    ...updatedData,
  };
}

const userProfile: UserProfile = {
  username: "Mahmudul",
  email: "Mahmudul@gmail.com",
  age: 16,
};

console.log(updateUser(userProfile, { email: "Mahmudul578@gmail.com" }));
