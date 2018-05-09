Feature: Test the page
@SmokeTest
Scenario Outline: User Registration with valid email address
Given  User Opens "<browser>" 
And    User starts  MyStore application
When   User clicks Signin link
And    User enters "<valid-emailAddress>" 
And    User clicks on Create an account button
And    User enters all the other required information
# User reads required information from Excel sheet
And    User clicks Create an account button
Then   User verifies that user registration is successful
And    User verifies My Account page

Examples:
|browser|valid-emailAddress|
|ie|ssd@ssd.com|
@RegressionTest
Scenario Outline: User Registration with invalid email address
Given  User Opens "<browser>" 
And    User starts  MyStore application
When   User clicks Signin link
And    User enters "<invalid-emailAddress>" 
And    User clicks on Create an account button
Then   User verifies the registration error message.
Examples:
|browser|invalid-emailAddress|
|ie|ssd@ssd.com|


@SmokeTest
Scenario Outline: Verify the MegaMenu functionality
Given  User Opens "<browser>" 
And    User starts  MyStore application
When   User navigates to Megamenu "<strMenu>" "<strSubMenu>"
Then   User verifies that Summer dresses page had opened "<pageTitle>"

Examples:
|browser|strMenu|strSubMenu|pageTitle|
|firefox|Dress|Summer Dresses|Summer Dresses - MyStore|

@RegressionTest
Scenario Outline: Verify the Prodcut Sort By price functionality
Given  Summer Dresses MyStore page is opened 
And    User selects value from the Sort By combo box "<strPriceLowest>" 
Then   User verifies products arrangement order as lowest price first
And    User selects value from the Sort By combo box "<strPriceHighest>"
And    User verifies products arrangement order as highest price first
Examples:
|strPriceLowest|strPriceHighest|
|Price: Lowest first|Price: Highest first|
@RegressionTest
Scenario Outline: Select the product And verify the Cart Summary
Given  User Opens <browser> 
And    User starts  MyStore application
And    User navigates on Megamenu "Dress-> Summer dresses"
When   User selects a product "<productName>"
And    User selects a "<productColor>"
And    User clicks to Add to cart button
And    User clicks to checkout button
Then   User verifies the Cart summery page "<cartSummary>"
And    User verifies the name of the product "<productName>"
And    User verifies the color of the product "<productColor>"
And    User verifies the quantity of the product "<productQuantity>"

Examples:
|browser|productName|productColor|productQuantity|cartSummary|
|firefox|Printed Summer Dress|blue|1||
