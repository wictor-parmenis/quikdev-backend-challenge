# Backend Developer Test

Make sure you read the whole document **carefully** and follow the guidelines in it.

## Context

Build a RESTful API that can `get/create/update/delete` user data from a persistence database

### User Model

```
{
  "id": "xxx",                  // user ID 
  "name": "test",           	// full person name
  "username": "test",           // user name
  "birthdate": "",              // date of birth
  "address": "",                // user address
  "addressNumber": "",          // user address number
  "primaryPhone": "",           // primary phone formatted as (XX) XXXX-XXXX
  								// 							  or (XX) XXXXX-XXXX
  "description": "",            // user description
  "createdAt": ""               // user created date
}
```

## Requirements

### Functionality

- The API should follow typical RESTful API design pattern.
- The data should be saved in the DB (Mongo is preferred).
- Provide proper API document.
- Provide proper unit test.

### Tech stack

- Use Node.js with any or no framework.
- Use any DB. Mongo DB is **highly preferred**.
- Provide a Docker stack
- Provide  **CLEAR README**  information like versions required, step-by-step to setup environment, etc

### Bonus

- Write clear documentation on how it's designed and how to run the code.
- Write good in-code comments.
- Write good commit messages.

### Advanced requirements

*These are used for some further challenges. You can safely skip them if you are not asked to do any, but feel free to try out.*

- Provide a complete user auth (authentication/authorization/etc.) strategy.
- Provide a complete logging (when/how/etc.) strategy.
- Imagine we have a new requirement right now that the user instances need to link to each other, i.e., a list or "friends". Can you find out how you would design the model structure and what API you would build for querying or modifying it?
- Related to the requirement above, suppose the address of user now includes a geographic coordinate (i.e., latitude and longitude), can you build an API that,
  - given a user name
  - return the nearby friends


## What We Care About

Feel free to use any open-source library as you see fit, but remember that we are **evaluating your coding skills** and **problem solving skills**.

Here's what you should aim for:

- Good use of current Node.js & API design best practices.
- Good testing approach.
- Extensible code.

## FAQ

> Where should I send back the result when I'm done?

Fork this repo and send us a pull request when you think it's ready for review. You don't have to finish everything prior and you can continue to work on it. 

> What if I have a question?

Create a new issue in the repo and we will get back to you shortly.