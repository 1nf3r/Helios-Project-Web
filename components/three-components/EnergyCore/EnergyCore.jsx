import Core from "./Core";
import Aura from "./Aura";
import Ring from "./Ring";


const EnergyCore = () => {
    return <group>
        <Core position={[0, 0.7, 0]} />
        <Aura position={[-0.01, 0.6, 0]} />
        <Ring position={[0, 0.8, 0]} rotation={[12.5, 0.0, 0.9]}/>
    </group>
}

export default EnergyCore