import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    public getMongoCnnection() { return this.http.get("/api/check-mongo-connection") }

    public generateData(data: any) { return this.http.post("/api/generate-data", data) }

    public getAggregationTime() { return this.http.get("/api/get-aggregation") }

}