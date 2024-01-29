# 👨🏻‍💻 Food Ordering System - Interview Machine Coding Round

## ✅ SOLUTION using Node.js - List of commands:

### To install node modules
> npm install
### To run the project
> node app
### To onboard a restaurant / change existing resturant's menu
`onboard-resturant <resturant_name> <delivering_capacity> <itemname1> <price1> <itemname2> <price2> ... <itemnameN> <priceN>`
> onboard-resturant KFC 4 item1 200 item2 300
### To order from a resturant
`order-food <resturant_name_without_space> <item1_from_menu> <no_of_items> <item2_from_menu> <no_of_items> ... <itemN_from_menu> <no_of_items>`
> order-food kfc item1 1 item2 2
### To exit the project
> exit

## ⁉️ PROBLEM STATEMENT:

### Description
Implement an online food ordering system. Below are the expected features from the system.
### Features
1. This system has tie-ups with restaurants where each restaurant has a menu with all the items with its price.
2. Each restaurant has a maximum processing capacity of items at any given time. Beyond that, it won’t accept any further item requests until items which are in processing are completed. Every item preparation time is the same for simplicity.
3. Each restaurant takes some time to prepare and dispatch food. Once an item is fulfilled the system gets the notification of it which adds back the processing capacity of that restaurant.
4. One or multiple restaurants can be selected based on the restaurant selection strategy.
5. Order is accepted from customers only if all the items can be fulfilled by one or more restaurants.
### Requirements
1. Onboard new restaurant with its menu and item processing capacity.
2. The restaurant should be able to change its menu.
3. Customers should be able to place an order by giving multiple items and quantity details.
4. Implement one restaurant selection strategy (lowest price offered by the restaurant for that item.) Have the option of selection using a different strategy.
5. The system should be able to keep track of all items served by each restaurant.
### Other Details
1. Do not use any database or NoSQL store, use in-memory store for now. ***
2. Do not create any UI for the application.
3. Write a driver class for demo purposes. Which will execute all the commands at one place in the code and test cases.
4. Start the system with onboarding 5 restaurants, each restaurant serving 10 items and has processing power for a maximum of 4 items at a given time.
### Expectations
1. Make sure that you can execute your code and show that it is working.
2. Make sure that the code is functionally correct.
3. Work on the expected output first and then add good-to-have features of your own.
4. The code should be modular and readable.
5. Separation of concern should be addressed.
6. The code should easily accommodate new requirements with minimal changes.
7. The code should be easily testable.
### Test cases: (You need not follow the same method signatures and output)
- Sample Test Cases
`add_restaurant(resta1, {'king_burger': 10, 'samosa_pizza': 20, 'alu_pasta': 19}, 15)
add_restaurant(resta2, {'bendi_macaroni': 12, 'samosa_pizza': 25, 'alu_pasta': 17}, 12)
update_menu(resta1, {'bendi_macaroni': 8, 'king_burger': 15})`
- Print all restaurant details
`[{ 'name': 'resta1', 'menu': {'king_burger': 15, 'samosa_pizza': 20, 'alu_pasta': 19, 'bendi_macaroni': 8}, 'total_capacity': 15, 'capacity_in_use': 0},
{'name': 'resta2', 'menu': {'bendi_macaroni': 12, 'samosa_pizza': 25, 'alu_pasta': 17}, 'total_capacity': 12, 'capacity_in_use': 0}]`
- Book an order
`book('cust1', {'bendi_macaroni': 3, 'samosa_pizza': 2'})`
- Print all restaurant details
`[{ 'name': 'resta1', 'menu': {'king_burger': 10, 'samosa_pizza': 20, 'alu_pasta': 19, 'bendi_macaroni': 8}, 'total_capacity': 15, 'capacity_in_use': 5}, {...}]`
- Print all orders placed
`[{ 'order_id': 'order1', 'user': 'cust1', 'order_details': [{'restaurant': 'resta1', 'items': {'bendi_macaroni': 3, 'samosa_pizza': 2'}, 'cost': 64}]}]`
