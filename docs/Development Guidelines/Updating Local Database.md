# Updating Local Database
### **Step 1: Export the MongoDB Atlas Database**
First, you need to export your MongoDB Atlas database to a BSON (Binary JSON) file. You can use the `mongodump` tool for this. Make sure you have your own Mongo Atlas URL (should be given by James)

1. **Export the Database:**
   Use `mongodump` to export your database. Replace `MONGO_URL` with the MONGO_URL variable in the `.env` file in `/backend`.
   ```sh
   mongodump --uri="MONGO_URL" --out=/path/to/dump
   ```

   :::note

    Your path to dump is just a temporary storage location so the location isn't very important. A good example would be `C:\Users\<usename>\dump`

    :::

   Replace `your-atlas-connection-string` with your actual connection string and `/path/to/dump` with the path where you want to save the dump files.

### **Step 2: Import the Dump into Your Local MongoDB Instance**
Next, you need to import the BSON files into your local MongoDB instance.

1. **Import the Database:**
   Use `mongorestore` to import the BSON files into your local MongoDB.

   ```sh
   mongorestore --db studycompass /path/to/dump/studycompass
   ```
    :::note

    For the mongorestore path, just take your dump path and add `studycompass` at the end. For example, if my dump path was `C:\Users\James\dump`, the monogrestore path would be `C:\Users\James\dump\studycompass`

    :::

   Replace `your-local-db-name` with the name you want for your local database, `/path/to/dump` with the path to the dump files, and `your-atlas-db-name` with the name of the database from MongoDB Atlas.