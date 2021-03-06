import Plot from "./Plot";
import Plane from "./Plane";
import EthIcon from "../assets/icons/Eth_Icon.png"
const Plotview = ({plots, hoveringLandId, setLandName, setLandOwner, setHasOwner, setLandId, setHoveringLandId}) => {
    return (
        <group  rotation={[-Math.PI/2, 0, 0]}>
            {plots && plots.map((plot, index) => {
            if (plot.owner === '0x0000000000000000000000000000000000000000') {
                return (
                    <Plot
                        key={index}
                        position={[(plot.id % 10)-5, (Math.floor(plot.id / 10))-5, 0.51]}
                        size={[0.99, 0.99, 0.01]}
                        color={"#6f6fC4"}
                        landId={index + 1}
                        hoveringLandId={hoveringLandId}
                        landInfo={plot}
                        setLandName={setLandName}
                        setLandOwner={setLandOwner}
                        setHasOwner={setHasOwner}
                        setLandId={setLandId}
                        setHoveringLandId={setHoveringLandId}
                        forSale={false}
                        
                    />
                )
            } else {
                return (
                 
                    <Plot
                        key={index}
                        position={[(plot.id % 10)-5, (Math.floor(plot.id / 10))-5, 0.5]}
                        size={[0.95, 0.95, 0.2]}
                        color={"#ea68dd"}
                        landId={index + 1}
                        hoveringLandId={hoveringLandId}
                        landInfo={plot}
                        setLandName={setLandName}
                        setLandOwner={setLandOwner}
                        setHasOwner={setHasOwner}
                        setLandId={setLandId}
                        setHoveringLandId={setHoveringLandId}
                        forSale={plot.forSale}
                    />
                )
            }
        })}
           <Plane height={10} width={10} depth={1}/>
            </group>
        
        
            
    );
}
export default Plotview;