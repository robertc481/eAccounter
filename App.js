import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Option from './components/Option';
import Input from './components/Input';
import './App.css';

const StyledWrapper = styled.div`
      position:relative;
      width:100vw;
      height:100vh;
      display:flex;
      flex-direction:column;
      align-items:center;
      >*,>*+*{
        box-sizing:border-box;
      }

   `;

const StyledOptionWrapper = styled.div`
display: flex;
 justify-content: center; 
 align-items: center;
  width: 100%;
   height: 3vh; 
   margin-top: 20px;
`;
const StyledSection = styled.section`
  width:50%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:0;
  padding:0;
  border-left: ${({ left }) => left ? 0 : `2px solid black`};
  @media (min-width:800px){
    
  margin-left: ${({ left }) => left ? '100px' : 0};
  margin-right: ${({ left }) => left ? 0 : `100px`};
 
  }
  
`;
const StyledForm = styled.form`
  width:100%;
  height:100%;
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;

  >*{
    margin:25px 0 10px 0;
  }
  >label>span{
    font-size:1.5rem;
    
    
  }

  >label>input{
    border:none;
    box-shadow:0 3px 2px -2px black;
    outline:none;
    max-width: 250px;
    height: 20px;
    font-size:1.2rem;
    margin-left:5px;
    align-self:flex-end;
    padding-left:10px;
    @media (max-width:480px){
      font-size:1rem;
      padding: 0;
      margin-left:2px;
   }

   @media(max-width:800px){
      width:120px;
      
    }
  }
  >button{
    width:4rem;
    height:2rem;
    background:none;
    border:2px solid black;
    cursor:pointer;
    border-radius:20px;
    font-size:1.2rem;
    outline:none;
    transition: .25s linear;  


  }
  >button:hover{
    background-color: black;
    color:white;
  }
`;
const StyledIncome = styled.div`
  
             width: 70%;
              height: 50px;
              box-shadow: inset 0px -3px 2px -2px black;
              font-size: 1.8rem;
              font-weight: 400;
              display: flex;
              justify-content:space-between;
              align-items: flex-end;
              margin-bottom: 10px;
              max-width:300px;
`;
const StyledDetail = styled.div`
              width: 70%;
              height: 30px;
              box-shadow: inset 0px -3px 2px -2px black;
              font-size: 1.2rem;
              font-weight: 400;
              display: flex;
              justify-content:space-between;
              align-items: flex-end;
              margin:5px 0 10px 0;
              max-width:300px;

              @media (max-width:360px){
               font-size:1rem;
              }
              @media (max-width:480px){
                  font-size:1rem;
              }
`;
const StyledProfit = styled.div`

              width: 70%;
              height: 50px;
              box-shadow: inset 0px -3px 2px -2px black;
              font-size: 1.8rem;
              font-weight: 400;
              display: flex;
              justify-content:space-evenly;
              align-items: flex-end;
              margin-TOP:3rem;
              max-width:300px;

              @media (max-width:360px){
      font-size:1.2rem;
      margin-top:1.5rem;
   }
   @media (max-width:480px){
      font-size:1.2rem;
      margin-top:1.5rem;
   }
`;


class App extends Component {
  state = {
    income: 0,
    cash: 0,
    vat: 0,
    company: 'uber',
    proceed: false,
    partnerCharge: 40,

  }
  handleInputChange = (e) => {

    this.setState({
      proceed: false,
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { company, income, cash, vat, partnerCharge, proceed } = this.state;
    const brutto = company === 'uber' ? income / 0.75 : income / 0.8;
    const taxInvoice = brutto - (brutto * 0.83);
    const vatInvoice = brutto - (brutto * 0.92);
    const weeklyTransfer = (parseInt((income - taxInvoice - vatInvoice - cash - partnerCharge + parseInt(vat)).toFixed(2)));
    return (
      <StyledWrapper>
        <Header />
        <StyledOptionWrapper>
          <Option
            id='1'
            checked={company === 'uber'}
            checkFn={() => this.setState({ company: 'uber' })}
          >Uber</Option>
          <Option
            id='2'
            checked={company === 'bolt'}
            checkFn={() => this.setState({ company: 'bolt' })}
          >Bolt</Option>

        </StyledOptionWrapper>
        <Content>
          <StyledSection left>
            <StyledForm >
              <Input
                changeFn={this.handleInputChange}
                ariaLabel='credit card'
                name='income'
                placeholder='netto income'>💳</Input>
              <Input
                changeFn={this.handleInputChange}
                ariaLabel='cash'
                name='cash'
                placeholder='cash included'>💵</Input>
              <Input
                changeFn={this.handleInputChange}
                ariaLabel='vat'
                name='vat'
                placeholder='vat surcharge'>🧾</Input>


              <button type='reset' onClick={(e) => {
                e.preventDefault();
                this.setState({
                  proceed: true
                })


              }} >✔</button>
            </StyledForm>
          </StyledSection>
          <StyledSection>

            <StyledIncome>
              {proceed ? <><span>=</span><span>{income}.-</span></> : <><span>=</span><span>0.-</span></>}

            </StyledIncome>

            {proceed ? <StyledDetail>
              <span>Tax:</span><span>- {taxInvoice.toFixed(2)}.-</span>
            </StyledDetail> : null}

            {proceed ? <StyledDetail >
              <span>Vat:</span><span>- {vatInvoice.toFixed(2)}.-</span>
            </StyledDetail> : null}
            {proceed ? <StyledDetail >
              <span>Cash:</span><span>- {cash}.-</span>
            </StyledDetail> : null}

            {proceed ? <StyledDetail >
              <span>Partner:</span><span>- {partnerCharge}.-</span>
            </StyledDetail> : null}
            {proceed ? <StyledDetail>
              <span>Fv:</span><span>+ {vat}.-</span>
            </StyledDetail> : null}



            {proceed ? <StyledProfit><span>Weekly transfer:</span><span>{weeklyTransfer}.-</span></StyledProfit> : null}
            {proceed ? <StyledProfit><span>Weekly PROFIT:</span><span>{parseInt(weeklyTransfer) + parseInt(cash)}.-</span></StyledProfit> : null}


          </StyledSection>


        </Content>
        <Footer />
      </StyledWrapper>
    )
  }
}

export default App;
