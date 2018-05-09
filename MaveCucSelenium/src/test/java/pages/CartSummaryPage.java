package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import org.junit.Assert;
public class CartSummaryPage {
	private WebDriver driver;
	// POM: Web Elements on this page
	@FindBy(id="cart_title")
	WebElement lblCartSummary;
	@FindBy(name="quantity_5_20_0_0")
	WebElement txtQuantity;
	@FindBy(id="product-name")
	WebElement lblProductName;
	@FindBy(xpath=".//*[@class='product-name']/a")
	WebElement lblColorName;
	
	
	/*
	 * Function Name : verifyCartSummary
	 * Description: This function will verify Cart Summary
	 * Parameters: 
	 * Author: Shiv
	 * */
	public void verifyCartSummary(String prodName) throws Exception {
		Assert.assertEquals(prodName, lblProductName.getText());
		}
	public void verifyCartSummary(String prodName,String prodColor) throws Exception {
		
		Assert.assertEquals(prodColor, lblColorName.getText());
		
	}
	public void verifyCartSummary(int prodQty) throws Exception {
		
		Assert.assertEquals(prodQty, txtQuantity.getText());
	}
	// Verify CartSummary PageTitle
	public void VerifyCartSummaryPageTitle() {
		Assert.assertEquals("Order - MyStore", driver.getTitle());
	}
	/*
	 * Function Name : CartSummaryPage
	 * Description: This is the constructor method for the class.
	 * Parameters: Web driver
	 * Author: Shiv
	 * */
	public CartSummaryPage(WebDriver driver) throws Exception {
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
