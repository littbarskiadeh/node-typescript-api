import express from 'express';
export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }

    getName() {
        return this.name;
    }
    // declare endpoints for each routing class' resource with this function
    abstract configureRoutes(): express.Application;
}