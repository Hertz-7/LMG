import { openDB } from 'idb';

const DB_NAME = 'tourDatesDB';
const STORE_NAME = 'tourDatesStore';
const DB_VERSION = 1;

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      store.createIndex('uniqueDates', ['continent', 'city', 'state', 'date', 'venue','artist'], { unique: true });
    }
  },
});

export const addTourDate = async (tourDate) => {
  const db = await dbPromise;
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);

  try {
    await store.add(tourDate);
    await tx.done;
  } catch (e) {
    if (e.name === 'ConstraintError') {
      console.log('Duplicate entry not added');
    } else {
      throw e;
    }
  }
};

export const getTourDates = async () => {
  const db = await dbPromise;
  return await db.getAll(STORE_NAME);
};

export const clearTourDates = async () => {
  const db = await dbPromise;
  const tx = db.transaction(STORE_NAME, 'readwrite');
  await tx.objectStore(STORE_NAME).clear();
  await tx.done;
};
