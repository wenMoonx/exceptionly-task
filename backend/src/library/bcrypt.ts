import * as bcrypt from 'bcrypt';

const hash = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};

const compare = async (password: string, _hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, _hash);
};

export { hash, compare };
