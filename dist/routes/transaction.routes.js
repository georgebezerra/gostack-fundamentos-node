"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var date_fns_1 = require("date-fns");
var TransactionsRepository_1 = __importDefault(require("../repositories/TransactionsRepository"));
var CreateTransactionService_1 = __importDefault(require("../services/CreateTransactionService"));
var transactionRouter = express_1.Router();
var transactionsRepository = TransactionsRepository_1.default;
transactionRouter.get('/', function (request, response) {
    try {
        var transactions = transactionsRepository.all();
        var balance = transactionsRepository.getBalance();
        return response.json({
            transactions: transactions,
            balance: balance
        });
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
transactionRouter.post('/', function (request, response) {
    try {
        var _a = request.body, title = _a.title, value = _a.value, date = _a.date, type = _a.type;
        var parsedDate = date_fns_1.parseISO(date);
        var createTransaction = new CreateTransactionService_1.default(transactionsRepository);
        var transaction = createTransaction.execute({
            title: title,
            value: value,
            date: parsedDate,
            type: type
        });
        return response.json(transaction);
    }
    catch (e) {
        return response.status(400).json({ error: e.message });
    }
});
exports.default = transactionRouter;
