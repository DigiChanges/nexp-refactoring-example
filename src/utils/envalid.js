import dotenv from 'dotenv';
import { cleanEnv, port, str } from 'envalid';

dotenv.config();

const envValidation = () =>
{
  const env = cleanEnv(process.env, {
    NODE_ENV:     str({ choices: ['development', 'test', 'production', 'staging'] }),
    NODE_PATH:    str(),
    SERVER_PORT:  port(),
    DB_URL:       str(),
    TZ:           str()
  });

  process.env = { ...process.env, ...env };
};

export default envValidation;
