export interface IApiGlossary {
    "title": string,
    "pages": IApiPage[]
}

export interface IApiScenarios {
    "title": string,
    "pages": IApiPage[]
}

export interface IApiGlossary_item {
    "title": string,
    "teamText": string,
    "images": IApiImage[]
}

export interface IApiScenarios_item {
    "title": string,
    "teamText": string,
    "images": IApiImage[]
}

export interface IApiSiteDetails {
    "title": string
    "introText": string
    "teamText": string
    "teamAbout": string
}

export interface IApiPage         {
    "title":    string,
    "uri":      string,
    "url":      string,
    "images": IApiImage[]
}


export interface IApiImage {
    "url":      string,
    "width":    number,
    "height":   number,
    "title":    string,
    "credit":   string,
    "resize": {
        "tiny":     string,
        "small":    string,
        "reg":      string,
        "large":    string,
        "xxl":      string,
    }
}
