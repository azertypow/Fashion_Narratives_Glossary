import {IApiGlossary, IApiGlossary_item, IApiScenarios, IApiScenarios_item, IApiSiteDetails} from "~/utils/apiTypes";

export const baseApiUrl = 'https://api.fashionnarratives.ch'


// glossary
export async function fetchApi_glossary(): Promise<IApiGlossary> {
    return await (await fetch(`${baseApiUrl}/glossary`)).json() as Promise<IApiGlossary>
}

export async function fetchApi_glossary_BySlug(slug: string): Promise<IApiGlossary_item> {
    return await (await fetch(`${baseApiUrl}/glossary/${slug}`)).json() as Promise<IApiGlossary_item>
}


//scenarios
export async function fetchApi_scenarios(): Promise<IApiScenarios> {
    return await (await fetch(`${baseApiUrl}/scenarios`)).json() as Promise<IApiScenarios>
}

export async function fetchApi_scenarios_BySlug(slug: string): Promise<IApiScenarios_item> {
    return await (await fetch(`${baseApiUrl}/scenarios/${slug}`)).json() as Promise<IApiScenarios_item>
}


// site details
export async function fetchApi_siteDetails(): Promise<IApiSiteDetails> {
    return await (await fetch(`${baseApiUrl}/site-details`)).json() as Promise<IApiSiteDetails>
}


