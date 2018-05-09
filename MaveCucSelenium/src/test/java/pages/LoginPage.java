package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import util.ExcelUtil;

public class LoginPage {
	
// POM: Web Elements on this page
	@FindBy(id="email_create")
	WebElement txtEmailAddress;
	
	@FindBy(id="SubmitCreate")
	WebElement btnCreateanAccount;
	
	@FindBy(xpath=".//*[@id='create_account_error']")
	WebElement lblCreateAccountError;
	@FindBy(id="customer_firstname")
	WebElement txtFirstName;
	
	@FindBy(id="customer_lastname")
	WebElement txtLastName;
	
	@FindBy(id="passwd")
	WebElement txtPassword;
	
	@FindBy(id="address1")
	WebElement txtAddress;
	
	@FindBy(id="city")
	WebElement txtCity;
	
	@FindBy(id="id_state")
	WebElement ddlState;
	@FindBy(id="postcode")
	WebElement txtZip;
	@FindBy(id="id_country")
	WebElement ddlCountry;
	
	@FindBy(id="phone_mobile")
	WebElement txtmobile;
	@FindBy(id="alias")
	WebElement txtAddressAlias;
	@FindBy(id="submitAccount")
	WebElement btnRegister;
	// Webdriver for this page
	private WebDriver driver;
/*
* Function Name : createAccountDetails
* Description: This function enters the user details at login page
* Parameters: strFirstName, strLastName.....etc
* Author: Shiv
* */
	public void createAccountDetails() throws Exception {
		String strFirstName=ExcelUtil.getCellData(1, 1);
		String strLastName=ExcelUtil.getCellData(1, 2);
		String strPassword=ExcelUtil.getCellData(1, 3);
		String strAddress=ExcelUtil.getCellData(1, 4);
		String strCity=ExcelUtil.getCellData(1, 5);
		String strState=ExcelUtil.getCellData(1, 6);
		String strZip=ExcelUtil.getCellData(1, 7);
		String strCountry=ExcelUtil.getCellData(1, 8);
		String strMobile=ExcelUtil.getCellData(1, 9);
		String strAddAlias=ExcelUtil.getCellData(1, 10);
		txtFirstName.sendKeys(strFirstName);
		txtLastName.sendKeys(strLastName);
		txtPassword.sendKeys(strPassword);
		txtAddress.sendKeys(strAddress);
		txtCity.sendKeys(strCity);
		//ddlState.sendKeys(strState);
		Select listState= new Select(ddlState);
		listState.selectByVisibleText(strState);

		txtZip.sendKeys(strZip);
		ddlCountry.sendKeys(strCountry);
		Select listCountry= new Select(ddlState);
		listCountry.selectByVisibleText(strState);
		txtmobile.sendKeys(strMobile);
		txtAddressAlias.clear();
		txtAddressAlias.sendKeys(strAddAlias);
	}
	
	/*
	 * Function Name : verifyCreateAccountPage
	 * Description: This function verifies the Login page title.
	 * Parameters: NA
	 * Author: Shiv
	 * */
	
	public void verifyCreateAccountPage(){
		Assert.assertEquals("Login - My Store", driver.getTitle());
	}
	/*
	 * Function Name : clickRegister
	 * Description: This function clicks Register link on the page
	 * Parameters: NA
	 * Author: Shiv
	 * */
	public void clickRegister() {
		btnRegister.submit();
	}
	
	
	// Enter email address
	public void enterEmail(String strEmailAddress) {
		txtEmailAddress.click();
		txtEmailAddress.sendKeys(strEmailAddress);
			
	}
	
	// Click on Create Account
	public boolean clickCreateanAccount() {
		 boolean sFlag=false;
		if(!sFlag) {
			btnCreateanAccount.submit();
			sFlag=true;
		}
		return sFlag;
	}
	// Check Error for email address
	public boolean createAccountError() {
		return lblCreateAccountError.isDisplayed();
	}
	
	// verify Registration is Successful 
			public void verifyRegistrationSuccessful() {
				
				Assert.assertFalse(createAccountError());		
			}
		
	// verify my account page title
		public void verifyMyAccount() {
			
			Assert.assertEquals("My Account", driver.getTitle());		
		}
	
	/*
	 * Function Name : CreateAccountPage
	 * Description: This is the constructor method for the class.
	 * Parameters: Web driver
	 * Author: Shiv
	 * */
	public LoginPage(WebDriver driver) throws Exception {
		this.driver=driver;
		initializeWebElements();
	}
	/*
	 * Function Name : initializeWebElements
	 * Description: This function initializes Web elements in this pag class.
	 * Parameters: Driver and This
	 * Author: Shiv
	 * */
	public void initializeWebElements() {
		PageFactory.initElements(driver, this);
	}
	

}
