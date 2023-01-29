# banking-application-cli


In this cli application we can create an account, add some amount in that account, withdraw available amount and can check the available balance also.

There are two ways-

1) Commands are -

To create an account- CREATE ACC <account_number> <account_holder_name>
example- CREATE ACC 001 Rohan

To deposite some amount- DEPOSITE ACC <account_number> <deposite_amount>
example- DEPOSITE ACC 001 10000

To withdraw amount-  WITHDRAW ACC <account_number> <withdraw_amount>
example- WITHDRAW ACC 001 1000

To check available balance- BALANCE ACC <account_number>
example- BALANCE ACC 001


2) Commands are -

To create an account- bank CREATE <account_number> <account_holder_name>
example-bank CREATE 001 Rohan

To deposite some amount- DEPOSITE <account_number> <deposite_amount>
example- bank DEPOSITE 001 10000

To withdraw amount-  WITHDRAW <account_number> <withdraw_amount>
example- bank WITHDRAW 001 1000

To check available balance- BALANCE <account_number>
example- bank BALANCE 001
