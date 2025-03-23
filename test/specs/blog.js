describe('Blog section', async () => {
    it('Return blog links', async () => {
       await browser.url("https://practice.sdetunicorns.com/")

       await $('//li[@id="menu-item-490"]').click();
       const posts=await $$('//section[@id="recent-posts-3"]//li')

       for(const links of posts){
            const text= await links.getText();
            await expect(text.length).toBeGreaterThan(10);
            
       }
       await expect(posts).toHaveLength(5)
     
    })

})