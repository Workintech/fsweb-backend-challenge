
describe('template spec', () => {
  it('local host 3000 works', () => {
    cy.visit('http://localhost:3000/')
  })
});

const loginPassingUser={
  password:'12345678',
  userEmail:'musacan@hotmail.com',
  userName:'Student0001'
}
const loginFailingUser={
  password:'12345678',
  userEmail:'serkan@gmail.com',
  userName:'Student0011'
}

const registerPassingUser={
  password:'12345678',
  userEmail:'deneme@hotmail.com',
  userName:'Deneme0001',
  name:'deneme'
}

describe('Anasayfa Login Testler',()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })
  it('click Giris button and login form appears', () =>{
    cy.get('[data-cy="entryPageGirisBtn"]').click();
    cy.get('#entryPageForm').should("contain",'Login')
  })

  it('click Giris button without data and fails', () =>{
    cy.get('[data-cy="entryPageGirisBtn"]').click();
    cy.get('[data-cy="loginSbmtBtn"]').click();
    cy.get('p').should("contain",'Please enter your username').and("contain",'Please enter your password')
    })
  it('Correct username and Password Entry and Passes', async () =>{
    cy.get('[data-cy="entryPageGirisBtn"]').click();
    cy.get('[data-cy="loginDataName"]').type(loginPassingUser.userName)
    cy.get('[data-cy="loginPassword"]').type(loginPassingUser.password)
    cy.get('[data-cy="loginSbmtBtn"]').click();
    await cy.get('[data-cy="homePageWelcome"]').should("equal",'test')
    })
  // it('Correct e-mail and Password Entry and Passes',  () =>{
  //   cy.get('[data-cy="entryPageGirisBtn"]').click();
  //   cy.get('[data-cy="loginDataName"]').type(loginPassingUser.userEmail)
  //   cy.get('[data-cy="loginPassword"]').type(loginPassingUser.password)
  //   cy.get('[data-cy="loginSbmtBtn"]').click();
  //   cy.get('#mainPageContainer').should("contain",'MainPage')
  //   })
  // it('Wrong username and Password Entry and fails', () =>{
  //   cy.get('[data-cy="entryPageGirisBtn"]').click();
  //   cy.get('[data-cy="registerDataName"]').type(loginFailingUser.userName)
  //   cy.get('[data-cy="registerUserName"]').type(loginPassingUser.password)
  //   cy.get('[data-cy="loginSbmtBtn"]').click();
  //   cy.get('p').should("equal",'Geçersiz')
  //   })
})

// describe('Anasayfa Register Testler',()=>{

//   beforeEach(()=>{
//     cy.visit('http://localhost:3000/')
//   })

//   it('click Kayit button and register form appears',() =>{
//     cy.task('pause', 2000)
//     cy.get('[data-cy="entryPageKayitBtn"]').click();
//     cy.get('label').should("contain",'Şifre')
//   })
  
//   it('click Kayit button without data and fails',() =>{
//     cy.get('[data-cy="entryPageKayitBtn"]').click();
//     cy.get('[data-cy="registerSbmtBtn"]').click();
//     cy.get('p').should("contain",'Lütfen isminizi giriniz').and("contain",'Lütfen kullanıcı adınızı giriniz').and("contain",'Lütfen e-mail adresinizi giriniz').and("contain",'Lütfen şifre giriniz')
//     })
//   it('Correct data Entry and Passes', () =>{
//     cy.get('[data-cy="entryPageKayitBtn"]').click();
//     cy.get('[data-cy="registerDataName"]').type(registerPassingUser.name)
//     cy.get('[data-cy="registerUserName"]').type(registerPassingUser.userName)
//     cy.get('[data-cy="registerUserEmail"]').type(registerPassingUser.userEmail)
//     cy.get('[data-cy="registerPassword"]').type(registerPassingUser.password)
//     cy.get('[data-cy="registerSbmtBtn"]').click();
//     cy.get('[data-cy="loginFormH2"]').should("equal",'ldfdsgfdgdfsgdfgdfgdfsogo')
//   })

// })