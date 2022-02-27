export interface IRead<T> {
    find(item: T): Promise<T[]>;
    findOne(item: T): Promise<T>;
    findById(id: string): Promise<T>;
}
