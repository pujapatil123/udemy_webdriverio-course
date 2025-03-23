describe('Multiple elements', async () =>{
    it('Navigation menu item', async () =>{
        
        await browser.url('https://practice.sdetunicorns.com/')

        const expectedLinks=["Home","About","Shop","Blog","Contact","My account"]
        const actualLinks=[]

        const navlinks= await $$('//ul[@id="zak-primary-menu"]/li')
        for(const link of navlinks){
            actualLinks.push(await link.getText())
        }

        await expect(expectedLinks).toEqual(actualLinks)
    })
})