export type CreateSessionDTO = {
  email: string;
  password: string;
};

type UserData = {
  password: string;
  permissions: string[];
  roles: string[];
};

export type UsersStore = Map<string, UserData>;

export type RefreshTokenStore = Map<string, string[]>;

export type DecodedToken = {
  sub: string;
};
