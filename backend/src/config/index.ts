import * as dotenv from 'dotenv';
dotenv.config();

// server
const HOST: string = process.env.HOST || '127.0.0.1';
const PORT: number = +process.env.PORT || 3001;

// jsonwebtoken
const SECRET_OR_KEY: string = process.env.ACCESS_TOKEN_SECRET || 'secretKey';
const EXPIRES_IN = 60 * 60 * 24; // 1 day

// mongodb
const MONGO_USER: string = process.env.MONGO_USER || 'yucob';
const MONGO_PASS: string = process.env.MONGO_PASS || 'Security!2022';
const MONGO_DB: string = process.env.MONGO_DB || 'exceptionaly-test';
const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@atlascluster.2k5kzlt.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;

export { HOST, PORT, SECRET_OR_KEY, MONGO_URL, MONGO_DB, EXPIRES_IN };
