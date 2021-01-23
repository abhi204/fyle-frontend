import { environment } from "../../environments/environment";

export const hostUrl = environment.hostUrl;
export const apiUrl = hostUrl + '/api';

// Branch-Search API endpoints
export const apiBranchSearchUrl = apiUrl + '/branches';
export const apiBranchAutocompleteUrl = apiBranchSearchUrl + '/autocomplete';