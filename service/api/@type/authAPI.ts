export type LoginUserPayload = {
  username?: string;
  password?: string;
};

export type LoginUserResponse = {
  email: string;
  firstName: string;
  gender: string;
  id: string | number;
  image: string;
  lastName: string;
  token: string;
  username: string;
};
