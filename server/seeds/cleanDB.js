const cleanDB = async (db) => {
  try {
    if (!db) {
      throw new Error("Database connection not provided");
    }

    const collections = await db.collections;
    // Drop each collection
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    
    }

    console.log("Database cleaned successfully");
  } catch (error) {
    console.error("Error cleaning database:", error);
    throw error;
  }
};
module.exports = cleanDB;
