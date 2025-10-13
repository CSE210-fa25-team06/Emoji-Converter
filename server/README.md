# Running the Server Locally

Follow these steps to set up and run the server. Commands for both **Windows** and **Mac/Linux** are provided.

---

## 1. Navigate to the server directory

**Windows & Mac/Linux:**
```sh
cd server
```

---

## 2. Initialize a Python virtual environment named `myenv`

**Windows:**
```powershell
python -m venv myenv
```
**Mac/Linux:**
```sh
python3 -m venv myenv
```

---

## 3. Activate the virtual environment

**Windows:**
```powershell
myenv/scripts/activate
```

**Mac/Linux:**
```sh
source myenv/bin/activate
```

---

## 4. Install dependencies
```sh
pip install -r requirements.txt

**Windows & Mac/Linux:**
```sh
pip install -r requirements.txt
```

---

## 5. Run the server

```sh
flask run
```