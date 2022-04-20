package ui;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;



public class TestAutomationClass {
	
	private String baseUrl= "http://127.0.0.1:5500/index.html";
	ChromeDriver driver = null;

	@BeforeMethod(description = "Open Broswer Session")
	public void driverSetup() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get(baseUrl);
	}
	
	@Test(description = "This is verify title test")
	public void verifyTitleTest(){
		String expectedTitle = "Garima's Portfolio";
		driver.manage().window().maximize();
		String actualTitle = driver.getTitle();
		Assert.assertEquals(actualTitle, expectedTitle);
	}
	
	@Test(description = "This is test linkedin navigation")
	public void verifyLinkedInNavigationTest() throws InterruptedException{
		driver.manage().window().maximize();
		driver.findElement(By.className("linkedin-icon")).click();
		Assert.assertTrue(driver.findElement(By.className("linkedin-icon")).isEnabled());
	}
	
	@Test(description = "This is a download resume function test")
	public void downloadResumeTest() throws InterruptedException{

		driver.manage().window().maximize();
		driver.findElement(By.xpath("//*[@id=\"resources-section\"]/a[1]/button")).click(); 

		Thread.sleep(1000);
		Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"resources-section\"]/a[1]/button")).isEnabled());
	}
	
	@Test(description = "This is a generate profile card test")
	public void generateProfileCardTest() throws InterruptedException{

		driver.manage().window().maximize();
		driver.findElement(By.xpath("//*[@id=\"resources-section\"]/a[2]/button")).click(); 

		Thread.sleep(1000);
		Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"resources-section\"]/a[2]/button")).isEnabled());
	}
	
	@Test(description = "This is to verify that profile page link was opened")
	public void verifyProfileCardLinkPage() throws InterruptedException{

		driver.manage().window().maximize();
		String expectedPageTitle = "Profile Card";
		driver.findElement(By.xpath("//*[@id=\"resources-section\"]/a[2]/button")).click(); 

		Thread.sleep(1000);
		
        for(String winHandle : driver.getWindowHandles()){
            driver.switchTo().window(winHandle);
        }
		Assert.assertTrue(driver.getTitle().equals(expectedPageTitle));
	}
	
	
	@AfterMethod(description = "Close Browser Session")
	public void driverClosed() {
		driver.close();
		driver.quit();
	}

}
