http:

CRUD

C: CREATE | POST

Use when adding something to the database

R: READ | GET
Use when getting, retrieving something from the database

U: UPDATE | PUT
Use when updating an already existing record in the database

D: DESTROY | DELETE
Use when deleting a record from the database

- - - -  - - - - - - -  - - - - - - - - - -  -- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

JSON

Rules:

1) No trailing comma on the last entry in a JSON object. This applies to any last entry in the json file and there will be many of them to look out for

2) Use double quotes " " when identifying keys in the key value pairs

3) Does not accept methods, functions... only object, string, number, or array

(see example json file)

Example file has one key, with value of an array, that stores multiple objects

- - - -  - - - - - - -  - - - - - - - - - -  -- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

URLs
    - Uniform Resource Locator
    
    - www.amazon.com/clothing

    # Base Url
        - www.amazon.com
        
    # Endpoint
        - /clothing/jackets
        
    # Parameter - requesting specific resources from a database (id)
        - /clothing/jackets/:_id
        - /clothing/jackets/8v9je9joqj98
        
    # Query (query strings)
        - www.amazon.com/clothing/jackets?color=black&type=leather
        
        const query = {
            color: black,
            type: leather
        }