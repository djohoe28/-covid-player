/**
 * Data Access Object (DAO) interface.
 * 
 * @see https://en.wikipedia.org/wiki/Data_access_object
 * 
 * @template T Type of item to store in database.
 * @template K Type of key to use to identify items in database.
 */
export default interface DAO<T, K> {
	/**
	 * Creates a copy of the given item in the database, and returns it.
	 * 
	 * @param item Item to create (add to database).
	 * @returns The created item.
	 */
	create(item: T): Awaited<T>;
	/**
	 * Reads the item with the given key from the database, and returns it.
	 * 
	 * @param key Key to read item from database.
	 * @returns The item with the given key.
	 */
	read(key: K): Awaited<T>;
	/**
	 * Updates the given item in the database, and returns it;
	 * - If a key is provided: the item with that key will be updated.
	 * - If a key is not provided: the item's key will be used.
	 * 
	 * @todo // TODO: What happens if the given item's key is different from the key parameter?
	 * 
	 * @param item Item to update in database.
	 * @param key Key to update item in database.
	 * @returns The updated item.
	 */
	update(item: T, key?: K): Awaited<T>;
	/**
	 * Deletes the given item from the database, and returns it.
	 * 
	 * @param item Item to delete from database.
	 * @returns The deleted item.
	 */
	delete(item: T): Awaited<T>;
	/**
	 * Deletes the item with the given key from the database, and returns it.
	 * 
	 * @param key Key of item to delete from database.
	 * @returns The deleted item.
	 */
	delete(key: K): Awaited<T>;
	/**
	 * Deletes the given item - or the item with the given key - from the database, and returns it.
	 * 
	 * @param itemOrKey Item or key to delete from database.
	 * @returns The deleted item.
	 */
	delete(itemOrKey: T | K): Awaited<T>;
	/**
	 * Reads all items from the database, and returns them.
	 * 
	 * @returns All items in the database.
	 */
	readAll(): Awaited<T[]>;
	// TODO: Repository should have a method to read all items that match a given query.
}
