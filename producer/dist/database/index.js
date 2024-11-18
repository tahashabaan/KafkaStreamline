"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const product_1 = require("../entity/product");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const database = process.env.DB_NAME;
const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const port = parseInt(process.env.DB_PORT || '5432', 10);
if (!database || !host || !username || !password) {
    throw new Error('Database connection details are missing in environment variables');
}
const connectdb = () => (0, typeorm_1.createConnection)({
    type: 'postgres',
    host,
    port,
    username,
    password,
    database,
    synchronize: true,
    entities: [product_1.Product],
    logging: true,
    ssl: {
        rejectUnauthorized: false,
    },
    // entities: [Product],
}).then(() => {
    console.log('Database connected');
}).catch((error) => console.log('Error: ', error));
exports.default = connectdb;
