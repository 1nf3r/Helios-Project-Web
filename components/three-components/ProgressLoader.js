import { Html, useProgress } from '@react-three/drei'
import ProgressBar from './ProgressBar'

const ProgressLoader = ()  => {
  const { progress } = useProgress()
  let ProgressBarData = {
    bgColor: '#B8EAD9',
    progress: Math.trunc(progress)
  }
  return (
    <Html center>
      <ProgressBar props={ProgressBarData}/>
    </Html>
  )
}
export default ProgressLoader