import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SearchParams } from "../Models/search-params";

@Injectable({
    providedIn: 'root',
})

export default class SearchService {

    private searchParams = new BehaviorSubject<SearchParams | null>(this.loadSearchParams());
    currentSearchParams = this.searchParams.asObservable();

    updateSearchParams(params: SearchParams) {
        this.searchParams.next(params);
        this.saveSearchParams(params);
    }

    saveSearchParams(params: SearchParams) {
        localStorage.setItem('searchParams', JSON.stringify(params));
    }

    private loadSearchParams(): SearchParams | null {
        const savedParams = localStorage.getItem('searchParams');
        return savedParams ? JSON.parse(savedParams) : null;
    }

}