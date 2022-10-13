import { Kbd } from '../web-components/ChakraElements'

export const ShortcutKey = ({keyword}) => {
    return(
        <span>
            <Kbd>{`${keyword}`}</Kbd>
        </span>
    )
}