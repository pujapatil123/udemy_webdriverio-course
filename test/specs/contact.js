describe('Contact Form submission', async () => {
it('Contact Form submission', async () =>{
await browser.url('https://practice.sdetunicorns.com/')

await $('//li[@id="menu-item-493"]').click()
await $('//input[@id="evf-277-field_ys0GeZISRs-1"]').setValue('XYZ')
await $('//input[@id="evf-277-field_LbH5NxasXM-2"]').setValue('xyz@gmail.com')
await $('//input[@id="evf-277-field_66FR384cge-3"]').setValue('1234567890')
await $('//textarea[@id="evf-277-field_yhGx3FOwr2-4"]').setValue('Hello')
await $('//button[@id="evf-submit-277"]').click()

const heading= await $('//div[@class="everest-forms-notice everest-forms-notice--success everest-forms-submission-scroll"]')
await expect(heading).toHaveText('Thanks for contacting us! We will be in touch with you shortly')

})

})