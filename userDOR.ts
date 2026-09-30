import { BaseDAO } from "./baseDAO";

interface User {
    id: number;
    name: string;
    email: string;
}

export class UserDAO extends BaseDAO {
    protected iniTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE
            )
        `);
    }

    public insert(name: string, email: string): boolean {
        const stmt = this.db.prepare('INSERT INTO users(name, email) VALUES(?, ?)');
        const result = stmt.run(name, email);
        return result.changes > 0;
    }

    public findAll(): User[] {
        const stmt = this.db.prepare('SELECT * from users');
        const rows = stmt.all() as { id: number, name: string, email: string }[];
        return rows.map(row => ({
            id: row.id,
            name: row.name,
            email: row.email
        }));
    }
}