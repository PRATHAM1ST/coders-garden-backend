# Live API

https://coders-garden-backend.vercel.app/


# Backend API README

Welcome to our Backend API documentation for our project. This API provides two main routes for your use. Here's a breakdown of the API structure and how to use it effectively:

## API Response Structure

All responses from the API follow this structure:

```json
{
    "status": true, // Status boolean indicating success or failure
    "data": {},     // Data on success, can be an object, an array, a string, null, or undefined
    "message": ""   // Message providing additional information for errors and success
}
```

## Route 1: /

This route is a simple "Hello, world!" message. It's a great way to check if the API is up and running.

**Example Response:**

```http
    GET /
```

```json
{
    "status": true,
    "data": "Hello, world!",
    "message": "Success"
}
```

## Route 2: /members

This route returns a JSON array of objects containing details of GitHub community members. The details provided include:

- `name`: Name
- `username`: GitHub username
- `profile_pic_url`: Profile picture URL
- `followers`: Number of followers
- `following`: Number of people they follow
- `repositories`: Number of repositories
- `bio`: Bio
- `github_link`: GitHub profile URL

**Example Response:**

```http
    GET /members
```

```json
{
    "status": true,
    "data": [
        {
            "name": "John Doe",
            "username": "johndoe123",
            "profile_url": "https://github.com/johndoe123/profile.jpg",
            "followers": "1000",
            "following": "500",
            "repositories": "50",
            "bio": "I'm a software engineer."
            // ... Other details
        },
        // ... More member objects
    ],
    "message": "Success"
}
```

## Route 3: /members/:username

This route returns a JSON object containing details of a specific GitHub community member. The details provided include:

- `name`: Name
- `username`: GitHub username
- `profile_pic_url`: Profile picture URL
- `followers`: Number of followers
- `following`: Number of people they follow
- `repositories`: Number of repositories
- `bio`: Bio
- `github_link`: GitHub profile URL

**Example Response:**

```http
    GET /member/PRATHAM1ST
```

```json
{
    "status": true,
    "data": {
        "name": "Pratham",
        "username": "PRATHAM1ST",
        "github_link": "https://github.com/PRATHAM1ST",
        "profile_pic_url": "https://avatars.githubusercontent.com/u/52632050?v=4",
        "followers": "11",
        "following": "13",
        "repositories": "48",
        "bio": "Interested in Web Development and Coding! ",
        // ... Other details
    },
    "message": "Member found"
}
```

## Route 4: /graphql

Checkout the [GraphQL API](https://graphql.org/graphql-js/running-an-express-graphql-server/) section for more details.

Checkout this video for more details [GraphQL by Web Dev Simplified](https://www.youtube.com/watch?v=ZQL7tL2S0oQ)

This route returns a JSON object containing details of a specific GitHub community member. This is a GraphQL API. The details provided include:

- `name`: Name
- `username`: GitHub username
- `profile_pic_url`: Profile picture URL
- `followers`: Number of followers
- `following`: Number of people they follow
- `repositories`: Number of repositories
- `bio`: Bio
- `github_link`: GitHub profile URL

**Example Response for getting a single user:**

```http
    POST /graphql
```

```json
{
    "query": `
        query { 
            member(username: "PRATHAM1ST") { 
                name 
                github_link 
                profile_pic_url 
                bio 
            } 
        }
    `
    // member(username: \"$github_username\")
}
```

```json
{
    "data": {
        "member": {
            "name": "Pratham",
            "github_link": "https://github.com/PRATHAM1ST",
            "profile_pic_url": "https://avatars.githubusercontent.com/u/52632050?v=4",
            "bio": "Interested in Web Development and Coding! ",
        }
    }
}

```

**Example Response for getting all users:**

```http
    POST /graphql
```

```json
{
    "query": `
        query { 
            members { 
                name 
                github_link 
                profile_pic_url 
                bio 
            } 
        }
    `
}
```

```json
{
    "data": {
        "members": [
            {
                "name": null,
                "github_link": "https://github.com/AyushiVachhani",
                "profile_pic_url": "https://avatars.githubusercontent.com/u/133210173?v=4",
                "bio": ""
            },
            {
                "name": null,
                "github_link": "https://github.com/chirag-11-k",
                "profile_pic_url": "https://avatars.githubusercontent.com/u/104491213?v=4",
                "bio": "Chirag Kuriya"
            },

            ...
            
            {
                "name": "Pratham",
                "github_link": "https://github.com/PRATHAM1ST",
                "profile_pic_url": "https://avatars.githubusercontent.com/u/52632050?v=4",
                "bio": "WEB is Love 😌✨"
            },
            {
                "name": null,
                "github_link": "https://github.com/purvipatel183",
                "profile_pic_url": "https://avatars.githubusercontent.com/u/100862029?v=4",
                "bio": ""
            },
            {
                "name": null,
                "github_link": "https://github.com/zaidkhan16",
                "profile_pic_url": "https://avatars.githubusercontent.com/u/121684903?v=4",
                "bio": ""
            }
        ]
    }
}

```

**Example Error Response:**

```http
    POST /graphql
```

```json
{
    "query": `
        query { 
            members { 
                name 
                bioData 
            } 
        }
    `

    // Note that bioData is a custom field that is not available in the database. It is just for document purposes
}
```

```json
{
    "errors": [
        {
            "message": "Cannot query field \"bioData\" on type \"Member\".",
            "locations": [
                {
                    "line": 3,
                    "column": 14
                }
            ]
        }
    ]

    // This is the error that you will get if you try to query a field that is not available in the database.
}

```


## Route 5: /whoami

This route returns a JSON object containing details of the user who is logged in. The details provided include:

> ### Requires
> search query needed
> - name : name of the user empty_string or name
> - profile_pic_url : profile_pic_url

**Example Response:**

```http
    GET /whoami?name=Pratham&profile_pic_url=https://avatars.githubusercontent.com/u/52632050?v=4
```

```json
{
    "status": true,
    "data": {
        "role": "Owner",
        "admin": true,
    },
    "message": "Member found"
}
```

## Using the API

To interact with this API, simply send a GET request to the appropriate route. For example, to retrieve the list of community members, send a GET request to `/members`.

## Running the API Locally

Here are the steps to run the API on your local machine:

1. Clone this repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Start the server by running `npm start`.
4. The API will be available at `http://localhost:3000`.

## Code Quality and Linting

We maintain code quality by using ESLint with the Airbnb style guide. You can check for and automatically fix common code style issues with these commands:

- To check for issues: `npm run lint`
- To automatically fix fixable issues: `npm run lint:fix`

## Code testing

We use Jest for testing. You can run the tests with `npm test`.

# Tech Stack
- TypeScript
- Express
- Axios
- Super-test
- Jest
- Morgan
- Nodemon
- ESLint
- Dotenv
- Express-Graphql
- GraphQL

That's it! You are now ready to use our API to access community member data or explore other available routes. If you have any questions or encounter issues, feel free to reach out to us. Happy coding!
