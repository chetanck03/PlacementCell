# Training & Placement Cell

## Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud)
- Cloudinary account for media storage

## Installation

### Step 1: Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/chetanck03/PlacementCell.git
```

### Step 2: Install dependencies
Navigate to the project directory and install all required dependencies:

```
cd PlacementCell
npm install
```
### Step 3: Setup environment variables
Create a .env.local file in the root directory and configure the following variables:
```
MONGODB_URL = mongodb+srv://chetan:chetan@cluster0.yz9xq.mongodb.net/
JWT_SECRET = fgu74tdttdth
```

### Step 4: Start the development server
Once everything is set up, you can run the application:
```
npm run dev
```

This will start the development server. Open http://localhost:3000 to view it in the browser.

### Technologies Used
- Next.js: Server-side rendering and static site generation
- MongoDB: Database for storing data
- Cloudinary: For media storage and management