import { environment } from "../../environments/environment";

export const hostUrl = environment.hostUrl;
export const apiUrl = hostUrl + '/api';

// Branch-Search API endpoints
export const apiSearchUrl = apiUrl + '/branches';
export const apiBranchSearchUrl = apiSearchUrl + '/autocomplete';