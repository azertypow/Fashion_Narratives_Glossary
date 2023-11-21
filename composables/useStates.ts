export const usePanelIsOpen = () => {
    return useState('panelIsOpen', () => true)
}

export const useShowTeam = () => {
    return useState('showTeam', () => false)
}


export const useTakeMeThrough = () => {
    return useState('takeMeThrough', () => false)
}
