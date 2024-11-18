"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRotue_1 = __importDefault(require("./routes/productRotue"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        const port = process.env.PORT || 3000;
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.send('Hello World');
        });
        this.app.use(productRotue_1.default);
    }
}
exports.default = App;
