import {IApiSiteDetails} from "~/utils/apiTypes";

export const usePanelIsOpen = () => {
    return useState('panelIsOpen', () => true)
}

export const useShowTeam = () => {
    return useState('showTeam', () => false)
}

export const useShowAbout = () => {
    return useState('showAbout', () => false)
}

export const useTakeMeThrough = () => {
    return useState('takeMeThrough', () => false)
}

export const useActivatedTag = () => {
    return useState('activatedTag', () => '')
}

export const useSiteDetails = () => {
    return useState('siteDetails', () => {return {
        introText: '',
        teamAbout: '',
        teamText: '',
        title: '',
    } as IApiSiteDetails})
}
