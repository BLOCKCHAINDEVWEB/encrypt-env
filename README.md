# Get Started

Install the dependencies:  
```text
npm install
```

Create an environnement .env file with your globals environnements and completed encryption key words.  

Choice your 'production' or 'development' environnement in the NODE_ENV global variable for realize your encrypted file.  

Create a encrypted-prod.json and encrypted-dev.json file and added the global variables env witch you want to encrypt.  

Run the script for encrypt yours globals environnements in encrypted.js file.  
```text
node index.js
```

Copy the data of the encrypted.txt file into your frontend in a file with a service-account-enc.txt, a service-account-local-enc.txt or another name file.  

# Deploy in Vercel

Delete global variables env witch choice encrypted in the settings of yours fronts.  

Create global variables env encryption key word in the settings of yours fronts.  

Redeploy build for run with global variables env encrypted.  

# Deploy local

Create global variables env encryption key word in the settings of yours fronts.  

Create a encrypted-dev.json file and added the global variables env witch you want to encrypt.  

Copy the data of the encrypted.txt file into your frontend in a file with a service-account-local-enc.txt or another name file.  
