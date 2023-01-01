import Core from "./Core";
import Aura from "./Aura";
import Ring from "./Ring";
import Stars from "./Stars";

const EnergyCore = () => {
    return (
        <group>
            <Core position={[0, 0.6, 0]} />
            <Aura position={[0, 0.6, 0]} />
            <Ring position={[0, 0.7, 0]} rotation={[12.5, 0.0, 0.9]}/>
            <Stars />
        </group>
    )
}

export default EnergyCore