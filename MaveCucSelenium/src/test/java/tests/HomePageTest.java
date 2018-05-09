package tests;

import base.TestBase;
import pages.HomePage;
import pages.LoginPage;

public class HomePageTest  {

		

	
	public static void main(String[] args) throws Throwable {
		TestBase tb=new TestBase();
		HomePage homepage=new HomePage();
		LoginPage loginpage=new LoginPage(TestBase.driver);
		// Click on Sign In link
		homepage.clickSignIn();
		// Enter email address
		loginpage.enterEmail("qw1e@qwe.com");
		// Click on CreateanAccount button
		loginpage.clickCreateanAccount();
		// Verify Create account page opened
		loginpage.verifyCreateAccountPage();
		// Enter the user details for registration
		//loginpage.createAccountDetails("ss","kumar","pass@123","street1","Delhi","","","","","");
		loginpage.clickRegister();
		System.out.println(tb.getPageTitle());
	}
	
}
