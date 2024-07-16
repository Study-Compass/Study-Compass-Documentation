# Setting Up and Running Migration Scripts

This guide provides instructions on how to set up a Python virtual environment to run migration scripts located in the `backend/migrations` directory. It covers creating the virtual environment, installing dependencies from `requirements.txt`, and running an example migration script.

## **Step 1: Navigate to the Migrations Directory**

First, open your terminal or command prompt and navigate to the `backend/migrations` directory:

```sh
cd backend/migrations
```

## **Step 2: Create a Python Virtual Environment**

To avoid conflicts with other Python projects, it's recommended to create a virtual environment. Run the following command to create a virtual environment named `venv`:

```sh
python -m venv venv
```

## **Step 3: Activate the Virtual Environment**

After creating the virtual environment, activate it using the appropriate command for your operating system:

### On Windows:

```sh
.\venv\Scripts\activate
```

### On macOS and Linux:

```sh
source venv/bin/activate
```

Once activated, you should see the virtual environment's name (e.g., `(venv)`) prefixed to your terminal prompt.

## **Step 4: Install Dependencies**

With the virtual environment activated, install the required dependencies listed in `requirements.txt`:

```sh
pip install -r requirements.txt
```

This command will install all the necessary packages specified in the `requirements.txt` file.

## **Step 5: Running Migration Scripts**

To run a migration script, use the Python executable from the virtual environment. For example, to run the `version1.0.py` migration script, use the following command:

```sh
python version1.0.py
```

This will execute the `version1.0.py` script using the Python interpreter from the virtual environment.

## **Deactivating the Virtual Environment**

After you have finished running the migration scripts, you can deactivate the virtual environment by simply running:

```sh
deactivate
```

This will return your terminal to the global Python environment.

