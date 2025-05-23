export const isValidAdmin = (username: string, password: string) => {
    return (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_HASH_PASSWORD
    );
  };
  