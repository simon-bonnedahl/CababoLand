import { useState } from 'react';
import EthIcon from "../../assets/icons/Eth_Icon.png"

const PlotTooltip= ({landId, landOwner, cost, hasOwner, mintPlot, landView, setLandView, account, sellPlot, cancelSell, web3, plot, buyPlot}) => {
    const [sellPrice, setSellPrice] = useState(null)
    const [offerPrice, setOfferPrice] = useState(null)
    return (

      
        <div className="info">
            <div className="info--header">
            <h1>Plot {landId}</h1>
            
            {landOwner===account ? (<p>Owner: You</p>): (<p>Owner: {landOwner}</p>) }
            </div>
            <div className="divider line glow"/>
            
            <div className="info--lower">
                <div className="info--lower-left">
                    <div className="info--row">
                        <div className="info--column">
                        <span>Buyable:</span>
                        </div>
                        <div className="info--column">
                        {plot.forSale ? (<span>Yes</span>) : (<span>No</span>)}
                        </div>
                        
                    </div>
                    
                    {!landView && (<button onClick={() => setLandView(true)} className='button info--buy'>View Land</button>)}
                </div>
                
                {/*Mint plot */}
                {(plot.forSale && !hasOwner)&& (
                    <div className="info--lower-right">
                        <div className="info--row">
                            <img className="eth-icon" src={EthIcon}/>
                            {web3.utils.fromWei(plot.price.toString(), 'ether')}
                        
                        </div>
                        <button onClick={() => mintPlot(landId, plot.price)} className='button info--buy'>Mint Property</button>     
                    </div>
                )}

                {/*Buy plot */}
                {(plot.forSale && hasOwner && landOwner!==account) && (
                    <div className="info--lower-right">
                            <div className="info--row">
                                <img className="eth-icon" src={EthIcon}/>
                                {web3.utils.fromWei(plot.price.toString(), 'ether')} 
                            
                            </div>
                        <button onClick={() => buyPlot(landId, plot.price)} className='button info--buy'>Buy Property</button>    
                    </div>
                )}  

                {/*Sell plot */}
                {(landOwner===account && !plot.forSale) && (
                    <div className="info--lower-right">
                        <div className="info--row">
                            <img className="eth-icon" src={EthIcon}/>
                            <div className="inputfield">
                                <input type="number" id="price" required="required" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)}/>
        
                                <label for="price">Price</label>
                                
                                
                                <div className="bar"></div>

                            </div>
                            
                        </div>
                        <button onClick={() => (sellPlot(landId, web3.utils.toWei(sellPrice.toString(), 'ether')))} className='button info--buy'>Sell Plot</button>
                    </div> 
                    
                )}
                {/*Make an offer */}
                {(hasOwner && landOwner!==account) && (
                    <div className="info--lower-right">
                        <div className="info--row">
                            <img className="eth-icon" src={EthIcon}/>
                            <div className="inputfield">
                                <input type="number" id="price" required="required" value={offerPrice} onChange={(e) => setOfferPrice(e.target.value)}/>
                                <label for="price">Price</label>
                                
                                <div className="bar"></div>
                                
                            </div>
                            
                        </div>
                        <button onClick={() => (console.log("offer"))} className='button info--buy'>Offer</button>
            
                    </div>
                )}
                {/*Cancel sale */}
                {(landOwner===account && plot.forSale) && (
                    <div className="info--lower-right">
                        <div className="info--row">
                        <img className="eth-icon" src={EthIcon}/>
                        {web3.utils.fromWei(plot.price.toString(), 'ether')} 
                        </div>
                        <button onClick={() => (cancelSell(landId))} className='button info--buy'>Cancel Sell</button>
                    </div>
                )}
                
            </div>
        </div>  
    )
}

export default PlotTooltip;
                
                
                