"use client"

import React from "react";

/**
 * The interface for sitebar props (what's passed into the sitebar!)
 */
export interface SitebarProps {
    pageName : String;
}

/**
 * Interface for the sitebar itself
 */
export interface Sitebar {
    pageName : String;
    render() : any;
}

/**
 * This is the sitebar for the website, which will be rendered over most pages if called
 */
 export class Sitebar {

    /**
     * Creates a new sitebar
     * @param props Sitebar props for the sitebar
     */
    constructor(props : SitebarProps){
        this.pageName = props.pageName;
    }

    render (){
        return (
            <div className="bg-black">
                <p>Hey wassup</p>
            </div>
        );
    }
}