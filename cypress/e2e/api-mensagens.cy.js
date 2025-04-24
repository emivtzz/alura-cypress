describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMmVjN2ZjZC04ZWNlLTRmMTgtYjE0Ni1kOWE2OTBkN2Y5N2UiLCJhZG9wdGVyTmFtZSI6ImVtaSIsImlhdCI6MTc0NTQ1Njc4NCwiZXhwIjoxNzQ1NzE1OTg0fQ.9Un04jJ2kXvTFkeiV5ypfDvOdS_8Fk77MFZBtlIcu8o`

    it('Mensagens da API', () =>{
        cy.request({
            mothod: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/b2ec7fcd-8ece-4f18-b146-d9a690d7f97e',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})