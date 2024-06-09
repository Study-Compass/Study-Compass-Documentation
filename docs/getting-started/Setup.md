# Setting Up Your Environment

There are a number of things you must do before study compass is ready to run on your machine. Make sure you have asked James for the **`.env`** file, as that will be necessary for starting the setup.

Before following the steps in this tutorial, make sure you have the necessary tools installed. If you're not sure, you can check by running all the following commands in powershell or zsh:
```sh
mongodump
mongorestore
mongod
```
If any of the above commands cause errors, you do not have the necessary tools installed.
### Step 1: Download and Install Mongo Community Server and Tools
If you have all the necessary tools installed, you can skip this step.

#### **Install MongoDB Community Server:**

1. **Download Community Server:**
    Download the Community Server from the [MongoDB website](https://www.mongodb.com/try/download/community), I would recommend downloading as msi. Make sure to run the msi after download. This step may take a few minutes.

2. **Locate MongoDB Bin:**
    Locate the `bin` directory inside your MongoDB installation directory. For example, it might be `C:\Program Files\MongoDB\Server\<version>\bin`. MongoDB might also be inside `Program Files (x86)`

3. **Add To Path:** 
    Open Environment Variables, select `Path` under `System Variables`, click `Edit`, and add the bin path as a new variable.

4. **Verify Installation:** 
    To verify that the installation has been executed directly, restart powershell, and run the following command:
    ```sh
    mongod
    ```
    This action should not cause any errors

#### **Install MongoDB Tools**


### Step 1: Export the MongoDB Atlas Database
First, you need to export your MongoDB Atlas database to a BSON (Binary JSON) file. You can use the `mongodump` tool for this.

1. **Install MongoDB Tools:**
   If you haven't already, install the MongoDB Database Tools which include `mongodump` and `mongorestore`. You can download them from the [MongoDB website](https://www.mongodb.com/try/download/database-tools).

2. **Export the Database:**
   Use `mongodump` to export your database. You need your MongoDB Atlas connection string, which you can find in the Atlas UI.

   ```sh
   mongodump --uri="your-atlas-connection-string" --out=/path/to/dump
   ```

   Replace `your-atlas-connection-string` with your actual connection string and `/path/to/dump` with the path where you want to save the dump files.

### Step 2: Import the Dump into Your Local MongoDB Instance
Next, you need to import the BSON files into your local MongoDB instance.

1. **Ensure MongoDB is Running Locally:**
   Make sure your local MongoDB server is running. You can start it using:

   ```sh
   mongod --dbpath /path/to/your/db
   ```

2. **Import the Database:**
   Use `mongorestore` to import the BSON files into your local MongoDB.

   ```sh
   mongorestore --db your-local-db-name /path/to/dump/your-atlas-db-name
   ```

   Replace `your-local-db-name` with the name you want for your local database, `/path/to/dump` with the path to the dump files, and `your-atlas-db-name` with the name of the database from MongoDB Atlas.

