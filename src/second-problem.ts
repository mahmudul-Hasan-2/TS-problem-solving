interface UserProfile {
  username: string;
  email: string;
  age: number;
}

type PublicUser = Pick<UserProfile, "username">;

function publicField(user: UserProfile): PublicUser {
  return { username: user.username };
}

const userProfile2: UserProfile = {
  username: "Mahmudul",
  email: "Mahmudul@gmail.com",
  age: 16,
};

console.log(publicField(userProfile2));
