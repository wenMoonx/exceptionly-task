import * as bcrypt from 'bcrypt';

const hash = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};

const compare = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

export { hash, compare };
