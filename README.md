# 📝 ThoughtStack - Notes Management App

A modern and fast notes management application built with React JS. Easily create, organize, and manage your notes with features like tagging, filtering, pinning, and localStorage persistence. The clean and responsive UI is inspired by Google Keep.

---

## 🚀 Live demo
https://thoughtstack.netlify.app/

## ✨ Features

### Core Features

- **Create & Manage Notes** – Add notes with a title and description
- **Card Layout** – Clean and responsive card-based UI for displaying notes
- **Expanded View** – View and edit notes in a modal or detailed page
- **Search Functionality** – Instantly search notes by title or content
- **Tag System** – Add multiple tags to notes and filter notes by tags

### Organization Features

- **Pin Notes** – Keep important notes at the top
- **Archive Notes** – Hide notes without permanently deleting them
- **Trash System** – Deleted notes move to trash where they can be restored or permanently deleted
- **LocalStorage Support** – All data is stored locally without requiring a backend

---

## 🛠️ Tech Stack

| Technology       | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| React 18         | UI Library with Hooks                          |
| TailwindCSS      | Styling and Responsive Design                  |
| React Router DOM | Multi-page routing for Archive and Trash pages |
| LocalStorage API | Data persistence                               |
| Vite             | Build tool and development server              |

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Rkthak/NotesApp.git
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

```bash
http://localhost:5173
```

---

## 📁 Project Structure

```bash
src/
│── Components/
│── Layout/ ---> Outlet
│── Pages/
│── Layout/
│── Store/  ----> context APIs
│── App.jsx
│── main.jsx
```

---
