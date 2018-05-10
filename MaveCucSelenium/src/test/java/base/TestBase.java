package base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import util.TestUtil;

public class TestBase {
	public static WebDriver driver;
	public static Properties prop;

	public TestBase() throws Exception {
		// to read from property class

		prop = new Properties();
		try {
			FileInputStream fis = new FileInputStream(TestUtil.CONFIG_FILE_PATH + TestUtil.CONFIG_FILE_NAME);
			prop.load(fis);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.getMessage();
		}

	}

	public static void driverInitialization() throws Exception {
		String chromeDriverPath = util.TestUtil.CHROME_DRIVER_PATH;
		String ieDriverPath = util.TestUtil.IE_DRIVER_PATH;

		if (prop.getProperty("browser").equalsIgnoreCase("FireFox")) {
			driver = new FirefoxDriver();
			System.out.println("Starting Firefox driver.");
		} else if (prop.getProperty("browser").equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", chromeDriverPath);
			driver = new ChromeDriver();
		} else if (prop.getProperty("browser").equalsIgnoreCase("ie")) {
			System.setProperty("webdriver.ie.driver", ieDriverPath);
			driver = new InternetExplorerDriver();
			// driver=new FirefoxDriver();
			System.out.println("Starting IE driver.");
		} else {
			// default driver - Fire fox
			driver = new FirefoxDriver();
			System.out.println("Starting default driver- Firefox driver.");
		}

		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(util.TestUtil.IMPLICIT_WAITTIME, TimeUnit.SECONDS);
		driver.get(prop.getProperty("url"));
		Thread.sleep(6000);

	}

	/*
	 * Function Name : closeBrowser Description: This function closes the browser
	 * Parameters: NA Author: Shiv
	 */
	public void closeBrowser() {
		// driver.quit();
	}

	/*
	 * Function Name : getPageTitle Description: This function reads the page title
	 * Parameters: NA Author: Shiv
	 */
	public String getPageTitle() {
		return "";// driver.getTitle();
	}

}
