/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SubcategoryJsonld } from './subcategory-jsonld';
import { InlineResponse200HydraView } from './inline-response200-hydra-view';
import { InlineResponse200HydraSearch } from './inline-response200-hydra-search';


export interface InlineResponse2005 { 
    hydramember: Array<SubcategoryJsonld>;
    hydratotalItems?: number;
    hydraview?: InlineResponse200HydraView;
    hydrasearch?: InlineResponse200HydraSearch;
}

