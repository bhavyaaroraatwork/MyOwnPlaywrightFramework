export async function captureScreenshot(page, testInfo, name) {

    const screenshot = await page.screenshot({
        fullPage: true
    });

    await testInfo.attach(name, {
        body: screenshot,
        contentType: 'image/png'
    });
}