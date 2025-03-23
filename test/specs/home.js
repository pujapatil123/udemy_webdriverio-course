import HomePage from '../pages/home-page';

describe('Home',() => {
it('Open url and assert title',async() => {
    //await browser.url('https://practice.sdetunicorns.com/')
    await HomePage.open();
    await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');


});
it('About page', async () => {
    await browser.url('https://practice.sdetunicorns.com/about')

    await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');

})
it('Click get started', async () => {
    //await browser.url('https://practice.sdetunicorns.com')
    await HomePage.open();
   // await $('//a[@id="get-started"]').click();
    await HomePage.getStarted.click();
   // await expect(browser).toHaveUrlContaining('get-started');

})
it('Verify Logo link', async () => {
    //await browser.url('https://practice.sdetunicorns.com')
    await HomePage.open();
    //await $('//a[@class="custom-logo-link"]').click();
    await HomePage.customLogoLink.click();
    // await expect(browser).not.toHaveUrlContaining('get-started');
})
it('Verify Text', async () => {
    //await browser.url('https://practice.sdetunicorns.com')
    await HomePage.open();
   // const heading= await $('//h1[@class="elementor-heading-title elementor-size-default"]');
   const heading= await HomePage.headingTitle;
    //const gettext=await heading.getText();
    //await expect(gettext).toEqual('Think different. Make different.')
    await expect(heading).toHaveText('Think different. Make different.')

})



});