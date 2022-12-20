Feature: Login 
Scenario: Login Functionality 
Given user on the Login Page
And user enters "email address" with "chitrali.sharma27@gmail.com" 
And user enters "password" with "Inquiry@1234"  
And user click "log in" button
Then user should successful login 
