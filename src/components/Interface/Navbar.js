import Logo from '../logo/Logo'
import EthIcon from "../../assets/icons/Eth_Icon.png"
const Navbar = ({ web3Handler, account , balance, CBOTokens, landId}) => {
    return (
        <nav className="flex-between">

            
            {account ? (
                 
                 <button onClick={web3Handler} className="btn purple">
                 <svg width="150px" height="60px"  viewBox="0 0 180 60" className="border">
                 <rect x="0" y="0" width="150" height="60" rx="10" stroke="white" strokeWidth="0.5" fill="none" />
                 </svg>
                 <span>{account.slice(0, 5) + '...' + account.slice(38, 42)}</span>
                 </button>
             
            ) : (
                
                <button onClick={web3Handler} className="btn">
                <svg width="150px" height="60px"  viewBox="0 0 180 60" className="border">
                <rect x="0" y="0" width="150" height="60" rx="10" stroke="white" strokeWidth="0.5" fill="none" />
                </svg>
                <span>Connect Wallet</span>
                </button>
            )}
           
            {landId && (<h1 className="landId">{landId}</h1>)}
            
            
          
            <div className="balances">
                <div className="flex-between">
                    <img className="eth-icon" src={EthIcon}/>
                    <h1 className="eth-balance">{(Math.round((balance) * 1000) / 1000)}</h1> 
                </div>
                <div className="flex-between">
                    <Logo size={15}/>
                    <h1 className="cbo-balance">{(Math.round((CBOTokens) * 1000) / 1000)}</h1>
                </div>
            
           
            </div>
            
           
            
            
            
        
        </nav>
    )
}

export default Navbar;