import { useState , useEffect } from 'react';
import { ethers, providers } from 'ethers';
import  Wallet  from './artifacts/contracts/Wallet.sol/Wallet.json';
import './App.css';

// Address of my Wallet(Smart Contract)
let WalletAddress = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'

function App() {

  const [balance, setBalance] = useState(0);
  const [amountSend, setAmountSend] = useState();
  const [amountWithdraw, setAmountWithdraw] = useState();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    getBalance();
  }, [])

  async function getBalance(){
    if (typeof window.ethereum !== 'undefined' ) {
      
      const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(WalletAddress, Wallet.abi, provider);
      
      try {
        let overides = {
          from: accounts[0]
        }
        const data = await contract.getBalance(overides);
        setBalance(String(data));
      } catch (err) {
        setError('Une erreur est apparue.');    
      }    
    }
  }

  

  async function transfer() {
    if(!amountSend) {
      return;
    }
    setError('');
    setSuccess('');
    if(typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      try {
        const tx = {
          from: accounts[0],
          to: WalletAddress,
          value: ethers.utils.parseEther(amountSend)
        }
        const transaction = await signer.sendTransaction(tx);
        await transaction.wait();
        setAmountSend('');
        getBalance();
        setSuccess('Votre argent a bien été transféré sur le portefeuille ! ')
      }
      catch(err) {
        setError('Une erreur est survenue.');
      }
    }
  }




  async function withdraw() {
    if(!amountWithdraw) {
      return;
    }
    setError('');
    setSuccess('');
    const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(WalletAddress, Wallet.abi, signer);
    try {
      const transaction = await contract.withdrawMoney(accounts[0], ethers.utils.parseEther(amountWithdraw));
      await transaction.wait();
      setAmountWithdraw('');
      getBalance();
      setSuccess('Votre argent a bien été retiré du portefeuille ! ');
    }
    catch(err) {
      setError('Une erreur est survenue sur withdraw function.');
    }
  }

  function changeAmountSend(a) {
    setAmountSend(a.target.value);
  }

  function changeAmountWithdraw(e) {
    setAmountWithdraw(e.target.value);
  }



  return (
    <div className="App">
     <div className="container">
        <div className="logo">
          <i className="fab fa-ethereum"></i>
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <h2>{balance / 10**18} <span className="eth">eth</span></h2>
        <div className="wallet__flex">
          <div className="walletG">
            <h3>Envoyer de l'ether</h3>
            <input type="text" placeholder="Montant en Ethers" onChange={changeAmountSend} />
            <button onClick={transfer}>Envoyer</button>
          </div>
          <div className="walletD">
            <h3>Retirer de l'ether</h3>
            <input type="text" placeholder="Montant en Ethers" onChange={changeAmountWithdraw} />
            <button onClick={withdraw}>Retirer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
