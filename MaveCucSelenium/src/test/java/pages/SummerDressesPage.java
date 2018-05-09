package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
public class SummerDressesPage {
	
	@FindBy(id="myaccount")
	WebElement lblMyAccount;
	
	private WebDriver driver;
	
	
// Verify verifyProductArrangment
	public void verifyProductArrangment(String selectionType)throws Exception {
		Assert.assertEquals(selectionType,"Lowest");
		
	}
	public void verifyPageTitle(String strTitle)throws Exception {
		Assert.assertEquals(strTitle,driver.getTitle());
		
	}
	/*
	 * Function Name : CreateAccountPage
	 * Description: This is the constructor method for the class.
	 * Parameters: Web driver
	 * Author: Shiv
	 * */
	public SummerDressesPage(WebDriver driver) throws Exception {
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
