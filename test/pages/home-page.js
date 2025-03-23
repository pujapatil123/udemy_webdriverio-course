class HomePage{
    open(){
        return browser.url('/');
    }
    get getStarted(){
        return $('//a[@id="get-started"]');
    }
    get customLogoLink(){
        return $('//a[@class="custom-logo-link"]');
    }
    get headingTitle(){
        return $('//h1[@class="elementor-heading-title elementor-size-default"]');
    }
}
export default new HomePage();
