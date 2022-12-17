Application requirements:

1. User should be able to create an account using email and 4 digit pin: save user name, email and pin in the db
2. User should be able to login with the same email id
3. if user login successfully then redirect user to the dashboard page
   -> else, show invalid login details message
4. once redirected to the dashboard page, show all the existing transaction from db and else show form to add new transaction.
5. Only loged in user can access the dashboards and do CRUD operation on their transaction only.

## Steps for the Backend and Steps for the Frontend together

| #   | feature      | Fronted                            | Backend                                                                           |
| --- | ------------ | ---------------------------------- | --------------------------------------------------------------------------------- |
| 1.  | Registration | -Registration UI form              | -API endpoint and UserSchema to store the data                                    |
| 2.  | login        | -Login UI form                     | -API endpoint and query user based on email and password and return user          |
| 3.  | Transaction  | -Table UI show all the transaction | -API endpoint for transaction to receive and add to the DB for the specific user  |
| 4.  | Transaction  | -Table UI show all the transaction | -API endpoint for transaction to fetch all the transactions for the specific user |
