export default interface RepositoryDatabase<T> {
    findAll(): Promise<any[]>;

    findOne(data: any): Promise<any>;

    insert(data: T): Promise<void>;

    update(data: T): Promise<void>;

    delete(data: T): Promise<void>;
}