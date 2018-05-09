$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyStore.feature");
formatter.feature({
  "line": 1,
  "name": "Test the page",
  "description": "",
  "id": "test-the-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Registration with valid email address",
  "description": "",
  "id": "test-the-page;user-registration-with-valid-email-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User Opens \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User starts  MyStore application",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User clicks Signin link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cvalid-emailAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters all the other required information",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "# User reads required information from Excel sheet"
    }
  ],
  "line": 11,
  "name": "User clicks Create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User verifies that user registration is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User verifies My Account page",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "test-the-page;user-registration-with-valid-email-address;",
  "rows": [
    {
      "cells": [
        "browser",
        "valid-emailAddress"
      ],
      "line": 16,
      "id": "test-the-page;user-registration-with-valid-email-address;;1"
    },
    {
      "cells": [
        "ie",
        "ssd@ssd.com"
      ],
      "line": 17,
      "id": "test-the-page;user-registration-with-valid-email-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "User Registration with valid email address",
  "description": "",
  "id": "test-the-page;user-registration-with-valid-email-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User Opens \"ie\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User starts  MyStore application",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User clicks Signin link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"ssd@ssd.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters all the other required information",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "# User reads required information from Excel sheet"
    }
  ],
  "line": 11,
  "name": "User clicks Create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User verifies that user registration is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User verifies My Account page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "ie",
      "offset": 12
    }
  ],
  "location": "TestSteps.user_Opens(String)"
});
formatter.result({
  "duration": 18353226003,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_starts_MyStore_application()"
});
formatter.result({
  "duration": 49508,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_Signin_link()"
});
formatter.result({
  "duration": 60375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ssd@ssd.com",
      "offset": 13
    }
  ],
  "location": "TestSteps.user_enters(String)"
});
formatter.result({
  "duration": 135843,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_Create_an_account_button()"
});
formatter.result({
  "duration": 44678,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_all_the_other_required_information()"
});
formatter.result({
  "duration": 42263,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_Create_an_account_button()"
});
formatter.result({
  "duration": 40451,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_verifies_that_user_registration_is_successful()"
});
formatter.result({
  "duration": 49507,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_verifies_My_Account_page()"
});
formatter.result({
  "duration": 39848,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Verify the MegaMenu functionality",
  "description": "",
  "id": "test-the-page;verify-the-megamenu-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User Opens \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User starts  MyStore application",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User navigates to Megamenu \"\u003cstrMenu\u003e\" \"\u003cstrSubMenu\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User verifies that Summer dresses page had opened \"\u003cpageTitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "test-the-page;verify-the-megamenu-functionality;",
  "rows": [
    {
      "cells": [
        "browser",
        "strMenu",
        "strSubMenu",
        "pageTitle"
      ],
      "line": 39,
      "id": "test-the-page;verify-the-megamenu-functionality;;1"
    },
    {
      "cells": [
        "firefox",
        "Dress",
        "Summer Dresses",
        "Summer Dresses - MyStore"
      ],
      "line": 40,
      "id": "test-the-page;verify-the-megamenu-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Verify the MegaMenu functionality",
  "description": "",
  "id": "test-the-page;verify-the-megamenu-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User Opens \"firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User starts  MyStore application",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User navigates to Megamenu \"Dress\" \"Summer Dresses\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User verifies that Summer dresses page had opened \"Summer Dresses - MyStore\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 12
    }
  ],
  "location": "TestSteps.user_Opens(String)"
});
formatter.result({
  "duration": 10823573557,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_starts_MyStore_application()"
});
formatter.result({
  "duration": 33206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dress",
      "offset": 28
    },
    {
      "val": "Summer Dresses",
      "offset": 36
    }
  ],
  "location": "TestSteps.user_navigates_to_Megamenu(String,String)"
});
formatter.result({
  "duration": 149729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer Dresses - MyStore",
      "offset": 51
    }
  ],
  "location": "TestSteps.user_verifies_that_Summer_dresses_page_had_opened(String)"
});
formatter.result({
  "duration": 90562,
  "status": "passed"
});
});