export type LoginType = {
  email: string;
  password: string;
};

export type UserType = {
  user: string;
};

export type Error = {
  message?: string;
};

export type Modal = {
  open: boolean;
  message?: string;
};
