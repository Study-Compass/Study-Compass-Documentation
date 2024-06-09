# Setting Up MongoDB

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
    Download the Community Server from the [MongoDB website](https://www.mongodb.com/try/download/community), I would recommend downloading as msi. Make sure to run the msi after download. This step may take a few minutes, and will download the community server as well as the `MongoDBCompass` application.

2. **Locate MongoDB Bin:**
    Locate the `bin` directory inside your MongoDB installation directory. For example, it might be `C:\Program Files\MongoDB\Server\<version>\bin`. MongoDB might also be inside `Program Files (x86)`

3. **Add To Path:** 
    Open Environment Variables, select `Path` under `System Variables`, click `Edit`, and add the bin path as a new variable.

4. **Verify Installation:** 
    To verify that the installation has been executed directly, restart powershell, and run the following command:
    ```sh
    mongod
    ```
    This action should not cause any errors.

#### **Install MongoDB Tools**

1. **Download Mongo Tools:**
    Dowlnoad the Mongo Tools from the [MongoDB website](https://www.mongodb.com/try/download/database-tools). I would recommend downnloading as msi. This should install the `mongodump` and `mongorestore` executables.
2. **Locate Mongo Tools Bin:**
    Locate the `bin` directory inside your MongoDB installation directory. For example, it might be `C:\Program Files\MongoDB\Tools\bin`. Mongo Tools might also be inside `Program Files (x86)`.
3. **Add to Path:**
    Reference above steps, add the bin path.
4. **Verify Installation**
        To verify that the installation has been executed directly, restart powershell, and run the following command:
    ```sh
    mongodump
    mongorestore
    ```
    This action should not cause any errors. You may have to halt the execution of the commands (this is normal and means that the tools have been installed correctly).


### Step 2: Export the MongoDB Atlas Database
First, you need to export your MongoDB Atlas database to a BSON (Binary JSON) file. You can use the `mongodump` tool for this. Make sure you have your own Mongo Atlas URL (should be given by James)

1. **Export the Database:**
   Use `mongodump` to export your database. You need your MongoDB Atlas connection string, which you can find in the Atlas UI.
   ```sh
   mongodump --uri="your-atlas-connection-string" --out=/path/to/dump
   ```

   :::note

    Your path to dump is just a temporary storage location so the location isn't very important. A good example would be `C:\Users\<usename>\dump`

    :::

   Replace `your-atlas-connection-string` with your actual connection string and `/path/to/dump` with the path where you want to save the dump files.

### Step 3: Import the Dump into Your Local MongoDB Instance
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

### Step 4: Verifying Databse

Open the MongoDBCompass App, click connect. Under Databases, if you see the `studycompass` database, the database has been installed correctly.
