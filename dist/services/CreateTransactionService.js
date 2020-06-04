"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var CreateTransactionService = /** @class */ (function () {
    function CreateTransactionService(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    CreateTransactionService.prototype.execute = function (_a) {
        var title = _a.title, value = _a.value, date = _a.date, type = _a.type;
        var transactionDate = date_fns_1.startOfHour(date);
        if (!["income", "outcome"].includes(type)) {
            throw new Error("Transaction type is invalid");
        }
        var total = this.transactionsRepository.getBalance().total;
        if (type === 'outcome' && total < value) {
            throw new Error('You do not have enought balance');
        }
        var transaction = this.transactionsRepository.create({
            title: title,
            value: value,
            date: transactionDate,
            type: type
        });
        return transaction;
    };
    return CreateTransactionService;
}());
exports.default = CreateTransactionService;
