class Expense {
    id: string;
    amount: number;
    description: string;
    createdAt: number;

    constructor(id: string = '', description: string, amount: number, createdAt: number = 0) {
        this.id = id;
        this.amount = amount;
        this.description = description;
        this.createdAt = createdAt;
    }
}

export default Expense;