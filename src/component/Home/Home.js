import React from 'react'
import "./Home.css"
import ReactWhatsapp from 'react-whatsapp';
function Home() {
    return (
        <div className='container cont-width d-flex justify-content-center align-items-center'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-7  col-11'>
                    <h3 className='home-h3'>My name Is Maryam Mahmood</h3>
                    <p className='home-p'>I'm a full stack developer  with an experience over 4 years in which I have been providing my services to many businesses with a proven track record of success in achieving extraordinary results.</p>
                    <p className='home-p'>These are my expertise on which I've been working for many years:
                        - Blockchain
                        - Binance Smart Contact
                        - Fixing Smart Contract Issues
                        - Auditing Smart Contracts
                        - Cryptocurrency | Wallets
                        - Ethereum
                        - Tron
                        - Kucoin Blockchain
                        - Polygon (Matic)
                        - Crypto Payment Gateways
                        - Tokenisation DeFi
                        - DEX
                        - CEX</p>
                    <p className='home-p'>
                        I am able to complete the task you require of me in a timely manner.</p>
                    <div class="button-container-2">
                        <span class="mas">Contact Me</span>
                        <ReactWhatsapp number="+92 303 6954689" message="Hello World!!!" style={{ backgroundColor: "transparent" }} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home