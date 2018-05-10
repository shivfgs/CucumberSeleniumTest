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
formatter.before({
  "duration": 16101034099,
  "status": "passed"
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
  "duration": 1295425648,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_starts_MyStore_application()"
});
formatter.result({
  "duration": 7422457107,
  "error_message": "org.openqa.selenium.WebDriverException: org.apache.http.conn.HttpHostConnectException: Connect to localhost:19281 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LP-CND5162NJ1\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:91)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:368)\r\n\tat stepDefinition.TestSteps.user_starts_MyStore_application(TestSteps.java:68)\r\n\tat ✽.And User starts  MyStore application(MyStore.feature:5)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to localhost:19281 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:159)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:359)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:381)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:237)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:185)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:111)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:139)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:87)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:368)\r\n\tat stepDefinition.TestSteps.user_starts_MyStore_application(TestSteps.java:68)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\r\n\t... 73 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestSteps.user_clicks_Signin_link()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_Create_an_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.user_enters_all_the_other_required_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.user_clicks_Create_an_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.user_verifies_that_user_registration_is_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.user_verifies_My_Account_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 167842,
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
formatter.before({
  "duration": 12046148635,
  "status": "passed"
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
  "duration": 198030,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_starts_MyStore_application()"
});
formatter.result({
  "duration": 16144967584,
  "error_message": "org.openqa.selenium.WebDriverException: org.apache.http.conn.HttpHostConnectException: Connect to localhost:45854 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LP-CND5162NJ1\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:91)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:368)\r\n\tat stepDefinition.TestSteps.user_starts_MyStore_application(TestSteps.java:68)\r\n\tat ✽.And User starts  MyStore application(MyStore.feature:34)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to localhost:45854 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:159)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:359)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:381)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:237)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:185)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:111)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:139)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:87)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:368)\r\n\tat stepDefinition.TestSteps.user_starts_MyStore_application(TestSteps.java:68)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\r\n\t... 73 more\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 146106,
  "status": "passed"
});
});