package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import base.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.CartSummaryPage;
import pages.HomePage;
import pages.LoginPage;
import pages.MyAccountPage;
import pages.SummerDressesPage;
import util.ExcelUtil;
import util.TestUtil;

public class TestSteps extends TestBase {
	
public TestSteps() throws Exception {
		super();
		// TODO Auto-generated constructor stub
	}

	
	TestBase testbase=new TestBase();
	HomePage homepage=new HomePage();
	LoginPage loginpage=new LoginPage(driver);
	CartSummaryPage cartsumpage=new CartSummaryPage(driver);
	MyAccountPage myactpage=new MyAccountPage(driver);
	SummerDressesPage summerdresspage=new SummerDressesPage(driver);
	ExcelUtil exlutl=new ExcelUtil();
	@Before
	public  void startUp() throws Exception {
		
		testbase.driverInitialization();
		System.out.println("Initialization is completed.");
	}
	@After
	public  void closeDown() {
		// Close excel connection
		// Close browser
		//driver.quit();
		testbase.closeBrowser();
		System.out.println(testbase.getPageTitle() + " page is closed successfully.");
	}
	
	@Given("^User Opens firefox$")
	public void user_Opens_firefox() throws Throwable {
	
	System.out.println("Browser is launched.");	
		 
		
		
	}
	@Given("^User Opens \"([^\"]*)\"$")
	public void user_Opens(String strBrowserName) throws Throwable {
		
		System.out.println("Browser "+strBrowserName + " is launched.");	
		//String strCellValue=ExcelUtil.getCellData(1, 2);
	}
	@Given("^User starts  MyStore application$")
	public void user_starts_MyStore_application() throws Throwable {
	Assert.assertEquals("MyStore", driver.getTitle());
	}

	@When("^User clicks Signin link$")
	public void user_clicks_Signin_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		homepage.clickSignIn();
	}

	@When("^User enters ssd@ssd\\.com address$")
	public void user_enters_ssd_ssd_com_address() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}
	@When("^User enters \\\"([^\\\"]*)\\\"$")
	public void user_enters(String strEmailid) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//System.out.println(strEmailid);
	}
	@When("^User clicks on Create an account button$")
	public void user_clicks_on_Create_an_account_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//loginpage.clickCreateanAccount();
	    
	}

	@When("^User enters all the other required information$")
	public void user_enters_all_the_other_required_information() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //loginpage.createAccountDetails();
	}

	@When("^User clicks Create an account button$")
	public void user_clicks_Create_an_account_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //loginpage.clickRegister();
	}

	@Then("^User verifies that user registration is successful$")
	public void user_verifies_that_user_registration_is_successful() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   //loginpage.verifyRegistrationSuccessful();
	}

	@Then("^User verifies My Account page$")
	public void user_verifies_My_Account_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//loginpage.verifyMyAccount();
	}

	
	@Then("^User verifies the registration error message\\.$")
	public void user_verifies_the_registration_error_message() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // loginpage.verifyRegistrationSuccessful();
	}

	@When("^User navigates to Megamenu \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_navigates_to_Megamenu(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^User verifies that Summer dresses page had opened \"([^\"]*)\"$")
	public void user_verifies_that_Summer_dresses_page_had_opened(String strTitle) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
	}

	@Given("^Summer Dresses MyStore page is opened$")
	public void summer_Dresses_MyStore_page_is_opened() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
	}

	@Given("^User selects value from the Sort By combo box \"([^\"]*)\"$")
	public void user_selects_value_from_the_Sort_By_combo_box(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^User verifies products arrangement order as lowest price first$")
	public void user_verifies_products_arrangement_order_as_lowest_price_first() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	
	@Then("^User verifies products arrangement order as highest price first$")
	public void user_verifies_products_arrangement_order_as_highest_price_first() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Given("^User navigates on Megamenu \"([^\"]*)\"$")
	public void user_navigates_on_Megamenu(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^User selects a product \"([^\"]*)\"$")
	public void user_selects_a_product(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^User selects a \"([^\"]*)\"$")
	public void user_selects_a(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^User clicks to Add to cart button$")
	public void user_clicks_to_Add_to_cart_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^User clicks to checkout button$")
	public void user_clicks_to_checkout_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^User verifies the Cart summery page \"([^\"]*)\"$")
	public void user_verifies_the_Cart_summery_page(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//cartsumpage.VerifyCartSummaryPageTitle();
	}

	@Then("^User verifies the name of the product \"([^\"]*)\"$")
	public void user_verifies_the_name_of_the_product(String strProdName) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//cartsumpage.verifyCartSummary(strProdName);
	}

	@Then("^User verifies the color of the product \"([^\"]*)\"$")
	public void user_verifies_the_color_of_the_product(String strColor) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//cartsumpage.verifyCartSummary(strColor);
	}

	@Then("^User verifies the quantity of the product \"([^\"]*)\"$")
	public void user_verifies_the_quantity_of_the_product(String strQty) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//cartsumpage.verifyCartSummary(strQty);
	}


}
